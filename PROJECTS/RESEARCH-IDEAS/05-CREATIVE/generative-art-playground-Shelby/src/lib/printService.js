// Print-on-Demand Integration
// Supports: Printful, Printify, Gelato
const axios = require('axios');

class PrintOnDemandService {
  constructor(options = {}) {
    this.provider = options.provider || 'printful'; // printful, printify, gelato
    this.apiKey = options.apiKey || process.env.PRINTFUL_API_KEY;
    this.baseUrl = {
      printful: 'https://api.printful.com',
      printify: 'https://api.printify.com/v1',
      gelato: 'https://api.gelato.io'
    };
  }

  /**
   * Get available products
   * @returns {Promise<Array>}
   */
  async getProducts() {
    try {
      let products;
      
      switch (this.provider) {
        case 'printful':
          products = await this.getPrintfulProducts();
          break;
        case 'printify':
          products = await this.getPrintifyProducts();
          break;
        case 'gelato':
          products = await this.getGelatoProducts();
          break;
        default:
          products = await this.getPrintfulProducts();
      }

      return products;
    } catch (error) {
      console.error('Failed to fetch products:', error.message);
      throw new Error(`Product fetch failed: ${error.message}`);
    }
  }

  /**
   * Get Printful product catalog
   */
  async getPrintfulProducts() {
    const response = await axios.get(`${this.baseUrl.printful}/store/products`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });

    return response.data.result.map(product => ({
      id: product.id,
      name: product.name,
      type: product.type,
      thumbnail: product.thumbnail_url,
      variants: product.variants.map(v => ({
        id: v.id,
        size: v.size,
        color: v.color,
        price: v.retail_price
      }))
    }));
  }

  /**
   * Get Printify product catalog
   */
  async getPrintifyProducts() {
    const shopId = process.env.PRINTIFY_SHOP_ID;
    const response = await axios.get(`${this.baseUrl.printify}/shops/${shopId}/products`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });

    return response.data.data.map(product => ({
      id: product.id,
      name: product.title,
      type: product.type,
      thumbnail: product.images[0]?.url,
      variants: product.variants.map(v => ({
        id: v.id,
        size: v.options?.size,
        color: v.options?.color,
        price: v.price
      }))
    }));
  }

  /**
   * Get Gelato product catalog
   */
  async getGelatoProducts() {
    const response = await axios.get(`${this.baseUrl.gelato}/products`, {
      headers: {
        'X-API-KEY': this.apiKey
      }
    });

    return response.data.products.map(product => ({
      id: product.id,
      name: product.name,
      type: product.product_type,
      thumbnail: product.images[0]?.url,
      variants: product.variants.map(v => ({
        id: v.id,
        size: v.size,
        color: v.color_name,
        price: v.price
      }))
    }));
  }

  /**
   * Create print order
   * @param {object} order - Order details
   * @returns {Promise<{orderId: string, status: string, trackingUrl: string}>}
   */
  async createOrder(order) {
    const { recipient, items, artworkUrl } = order;

    try {
      let orderResult;

      switch (this.provider) {
        case 'printful':
          orderResult = await this.createPrintfulOrder(recipient, items, artworkUrl);
          break;
        case 'printify':
          orderResult = await this.createPrintifyOrder(recipient, items, artworkUrl);
          break;
        case 'gelato':
          orderResult = await this.createGelatoOrder(recipient, items, artworkUrl);
          break;
        default:
          orderResult = await this.createPrintfulOrder(recipient, items, artworkUrl);
      }

      return orderResult;
    } catch (error) {
      console.error('Order creation failed:', error.message);
      throw new Error(`Order creation failed: ${error.message}`);
    }
  }

  /**
   * Create Printful order
   */
  async createPrintfulOrder(recipient, items, artworkUrl) {
    const orderData = {
      recipient: {
        name: recipient.name,
        address1: recipient.address1,
        address2: recipient.address2,
        city: recipient.city,
        state_code: recipient.state,
        country_code: recipient.country,
        zip: recipient.zip
      },
      items: items.map(item => ({
        variant_id: item.variantId,
        quantity: item.quantity,
        files: [
          {
            type: 'front',
            url: artworkUrl
          }
        ]
      }))
    };

    const response = await axios.post(
      `${this.baseUrl.printful}/orders`,
      orderData,
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      orderId: response.data.result.id.toString(),
      status: response.data.result.status,
      trackingUrl: null, // Will be available when shipped
      totalCost: response.data.result.total_cost
    };
  }

  /**
   * Create Printify order
   */
  async createPrintifyOrder(recipient, items, artworkUrl) {
    const shopId = process.env.PRINTIFY_SHOP_ID;

    const orderData = {
      external_id: `order-${Date.now()}`,
      line_items: items.map(item => ({
        product_id: item.productId,
        variant_id: item.variantId,
        quantity: item.quantity,
        print_provider_id: item.printProviderId
      })),
      shipping_method: 1,
      send_shipping_notification: true,
      address_to: {
        first_name: recipient.name.split(' ')[0],
        last_name: recipient.name.split(' ')[1] || '',
        email: recipient.email,
        phone: recipient.phone,
        address1: recipient.address1,
        address2: recipient.address2,
        city: recipient.city,
        region: recipient.state,
        country: recipient.country,
        zip: recipient.zip
      }
    };

    const response = await axios.post(
      `${this.baseUrl.printify}/shops/${shopId}/orders.json`,
      orderData,
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      orderId: response.data.id.toString(),
      status: response.data.status,
      trackingUrl: null,
      totalCost: response.data.total_price
    };
  }

  /**
   * Create Gelato order
   */
  async createGelatoOrder(recipient, items, artworkUrl) {
    const orderData = {
      externalRef: `order-${Date.now()}`,
      shippingAddress: {
        firstName: recipient.name.split(' ')[0],
        lastName: recipient.name.split(' ')[1] || '',
        email: recipient.email,
        phone: recipient.phone,
        address1: recipient.address1,
        address2: recipient.address2,
        city: recipient.city,
        stateProvince: recipient.state,
        postalCode: recipient.zip,
        country: recipient.country
      },
      items: items.map(item => ({
        product: item.productId,
        variant: item.variantId,
        quantity: item.quantity,
        image: artworkUrl
      }))
    };

    const response = await axios.post(
      `${this.baseUrl.gelato}/orders`,
      orderData,
      {
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      orderId: response.data.orderId,
      status: response.data.status,
      trackingUrl: null,
      totalCost: response.data.totalPrice
    };
  }

  /**
   * Get order status
   * @param {string} orderId - Order ID
   * @returns {Promise<{status: string, trackingUrl: string, estimatedDelivery: string}>}
   */
  async getOrderStatus(orderId) {
    try {
      let status;

      switch (this.provider) {
        case 'printful':
          status = await this.getPrintfulOrderStatus(orderId);
          break;
        case 'printify':
          status = await this.getPrintifyOrderStatus(orderId);
          break;
        case 'gelato':
          status = await this.getGelatoOrderStatus(orderId);
          break;
        default:
          status = await this.getPrintfulOrderStatus(orderId);
      }

      return status;
    } catch (error) {
      console.error('Status check failed:', error.message);
      throw new Error(`Status check failed: ${error.message}`);
    }
  }

  /**
   * Get Printful order status
   */
  async getPrintfulOrderStatus(orderId) {
    const response = await axios.get(`${this.baseUrl.printful}/orders/${orderId}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });

    const order = response.data.result;
    return {
      status: order.status,
      trackingUrl: order.shipments?.[0]?.tracking_url || null,
      estimatedDelivery: null
    };
  }

  /**
   * Get Printify order status
   */
  async getPrintifyOrderStatus(orderId) {
    const shopId = process.env.PRINTIFY_SHOP_ID;
    const response = await axios.get(
      `${this.baseUrl.printify}/shops/${shopId}/orders/${orderId}.json`,
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      }
    );

    const order = response.data;
    return {
      status: order.status,
      trackingUrl: order.tracking_number ? `https://track.printify.com/${order.tracking_number}` : null,
      estimatedDelivery: order.ship_by_date
    };
  }

  /**
   * Get Gelato order status
   */
  async getGelatoOrderStatus(orderId) {
    const response = await axios.get(`${this.baseUrl.gelato}/orders/${orderId}`, {
      headers: {
        'X-API-KEY': this.apiKey
      }
    });

    const order = response.data;
    return {
      status: order.status,
      trackingUrl: order.tracking?.url || null,
      estimatedDelivery: order.estimatedDelivery
    };
  }

  /**
   * Calculate print pricing
   * @param {string} productId - Product ID
   * @param {string} variantId - Variant ID
   * @param {number} quantity - Quantity
   * @returns {Promise<{basePrice: number, shipping: number, total: number}>}
   */
  async calculatePricing(productId, variantId, quantity = 1) {
    // This would query the provider's pricing API
    // Simplified for demo
    const basePrices = {
      'poster': 15.99,
      'canvas': 49.99,
      'phone-case': 24.99,
      'mug': 12.99,
      't-shirt': 19.99
    };

    const basePrice = basePrices[productId] || 29.99;
    const shipping = 4.99;
    const total = (basePrice * quantity) + shipping;

    return {
      basePrice: basePrice * quantity,
      shipping,
      total,
      currency: 'USD'
    };
  }
}

module.exports = PrintOnDemandService;
