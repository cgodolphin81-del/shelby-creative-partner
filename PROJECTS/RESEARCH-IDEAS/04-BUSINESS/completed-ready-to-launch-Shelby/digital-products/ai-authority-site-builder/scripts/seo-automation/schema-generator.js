#!/usr/bin/env node
/**
 * Schema Markup Generator
 * Generates JSON-LD schema for articles, products, FAQs, and more
 */

const fs = require('fs');
const path = require('path');

class SchemaGenerator {
    constructor() {
        this.baseSchema = {
            "@context": "https://schema.org"
        };
    }

    /**
     * Generate Article schema
     */
    generateArticle(data) {
        return {
            ...this.baseSchema,
            "@type": "Article",
            "headline": data.title,
            "description": data.description,
            "image": data.image ? [data.image] : [],
            "datePublished": data.publishedDate || new Date().toISOString(),
            "dateModified": data.modifiedDate || new Date().toISOString(),
            "author": {
                "@type": "Person",
                "name": data.author || "Site Team",
                "url": data.authorUrl || ""
            },
            "publisher": {
                "@type": "Organization",
                "name": data.publisher || "Authority Site",
                "logo": {
                    "@type": "ImageObject",
                    "url": data.publisherLogo || ""
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": data.url
            }
        };
    }

    /**
     * Generate FAQ schema
     */
    generateFAQ(faqs) {
        return {
            ...this.baseSchema,
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };
    }

    /**
     * Generate Product schema (for reviews)
     */
    generateProduct(data) {
        return {
            ...this.baseSchema,
            "@type": "Product",
            "name": data.name,
            "description": data.description,
            "image": data.image || [],
            "brand": {
                "@type": "Brand",
                "name": data.brand
            },
            "offers": {
                "@type": "Offer",
                "url": data.url,
                "priceCurrency": data.currency || "USD",
                "price": data.price,
                "availability": data.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                "seller": {
                    "@type": "Organization",
                    "name": data.seller
                }
            },
            "aggregateRating": data.rating ? {
                "@type": "AggregateRating",
                "ratingValue": data.rating.value,
                "reviewCount": data.rating.count
            } : undefined,
            "review": data.reviews ? data.reviews.map(review => ({
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": review.rating
                },
                "author": {
                    "@type": "Person",
                    "name": review.author
                },
                "reviewBody": review.body
            })) : undefined
        };
    }

    /**
     * Generate HowTo schema
     */
    generateHowTo(data) {
        return {
            ...this.baseSchema,
            "@type": "HowTo",
            "name": data.title,
            "description": data.description,
            "image": data.image || [],
            "totalTime": data.totalTime || "",
            "tool": data.tools ? data.tools.map(tool => ({
                "@type": "HowToTool",
                "name": tool
            })) : [],
            "supply": data.supplies ? data.supplies.map(supply => ({
                "@type": "HowToSupply",
                "name": supply
            })) : [],
            "step": data.steps.map((step, index) => ({
                "@type": "HowToStep",
                "position": index + 1,
                "name": step.name,
                "text": step.text,
                "image": step.image || ""
            }))
        };
    }

    /**
     * Generate BreadcrumbList schema
     */
    generateBreadcrumb(items) {
        return {
            ...this.baseSchema,
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url
            }))
        };
    }

    /**
     * Generate SiteNavigationElement schema
     */
    generateSiteNavigation(navItems) {
        return {
            ...this.baseSchema,
            "@type": "SiteNavigationElement",
            "name": "Main Navigation",
            "hasPart": navItems.map(item => ({
                "@type": "WebPage",
                "name": item.name,
                "url": item.url
            }))
        };
    }

    /**
     * Generate Organization schema
     */
    generateOrganization(data) {
        return {
            ...this.baseSchema,
            "@type": "Organization",
            "name": data.name,
            "url": data.url,
            "logo": data.logo,
            "sameAs": data.socialMedia || [],
            "contactPoint": data.contact ? {
                "@type": "ContactPoint",
                "contactType": data.contact.type,
                "email": data.contact.email,
                "telephone": data.contact.phone
            } : undefined
        };
    }

    /**
     * Generate WebSite schema
     */
    generateWebSite(data) {
        return {
            ...this.baseSchema,
            "@type": "WebSite",
            "name": data.name,
            "url": data.url,
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${data.url}/?s={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        };
    }

    /**
     * Generate complete schema for a page
     */
    generateCompleteSchema(pageData) {
        const schemas = [];

        // Always add article schema for content pages
        if (pageData.type === 'article' || pageData.type === 'blog') {
            schemas.push(this.generateArticle(pageData));
        }

        // Add FAQ if present
        if (pageData.faq && pageData.faq.length > 0) {
            schemas.push(this.generateFAQ(pageData.faq));
        }

        // Add breadcrumb
        if (pageData.breadcrumb) {
            schemas.push(this.generateBreadcrumb(pageData.breadcrumb));
        }

        // Add product schema for reviews
        if (pageData.type === 'review' || pageData.type === 'product') {
            schemas.push(this.generateProduct(pageData));
        }

        // Add HowTo for tutorials
        if (pageData.type === 'howto') {
            schemas.push(this.generateHowTo(pageData));
        }

        return schemas;
    }

    /**
     * Save schema to file
     */
    saveSchema(schema, outputPath) {
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const json = JSON.stringify(schema, null, 2);
        fs.writeFileSync(outputPath, json);
        console.log(`✓ Schema saved to: ${outputPath}`);
    }

    /**
     * Generate HTML script tag
     */
    toScriptTag(schema) {
        const json = JSON.stringify(schema, null, 2);
        return `<script type="application/ld+json">\n${json}\n</script>`;
    }
}

// CLI Interface
if (require.main === module) {
    const generator = new SchemaGenerator();
    
    console.log("=== Schema Markup Generator ===\n");
    console.log("Available schema types:");
    console.log("  1. Article");
    console.log("  2. FAQ");
    console.log("  3. Product/Review");
    console.log("  4. HowTo");
    console.log("  5. Breadcrumb");
    console.log("  6. Organization");
    console.log("  7. WebSite");
    console.log("");
    console.log("Usage: node schema-generator.js <type> [options]");
    console.log("");
    console.log("Example: node schema-generator.js article --title='My Post' --url='https://...'");
}

module.exports = SchemaGenerator;
