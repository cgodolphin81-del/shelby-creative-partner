# Gmail Integration Scripts

## Overview
Automate Gmail operations from Google Sheets - send emails, read messages, create drafts, and manage labels.

## Code

### Code.gs

```javascript
/**
 * ============================================
 * GMAIL INTEGRATION SCRIPTS
 * ============================================
 * Send, read, and manage emails from Sheets
 * ============================================
 */

/**
 * Create menu
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📧 Gmail')
    .addItem('Send Email', 'showSendEmailDialog')
    .addItem('Send Bulk Emails', 'sendBulkEmails')
    .addItem('Read Unread Messages', 'readUnreadEmails')
    .addItem('Create Drafts from Sheet', 'createDraftsFromSheet')
    .addItem('Log Sent Emails', 'logSentEmails')
    .addToUi();
}

/**
 * ============================================
 * SEND SINGLE EMAIL
 * ============================================
 */

/**
 * Send email from sheet data
 * Expects: To, Subject, Body in row
 */
function sendEmailFromSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var row = sheet.getActiveRange().getRow();
  
  var to = sheet.getRange(row, 1).getValue();
  var subject = sheet.getRange(row, 2).getValue();
  var body = sheet.getRange(row, 3).getValue();
  var cc = sheet.getRange(row, 4).getValue();
  
  if (!to || !subject) {
    SpreadsheetApp.getUi().alert('Please fill in To and Subject fields');
    return;
  }
  
  var options = {
    name: 'Your Name',
    cc: cc,
    htmlBody: body.replace(/\n/g, '<br>')
  };
  
  try {
    MailApp.sendEmail(to, subject, body, options);
    sheet.getRange(row, 5).setValue('Sent');
    sheet.getRange(row, 6).setValue(new Date());
    SpreadsheetApp.getUi().alert('Email sent successfully!');
  } catch (error) {
    sheet.getRange(row, 5).setValue('Error: ' + error.message);
    SpreadsheetApp.getUi().alert('Error sending email: ' + error.message);
  }
}

/**
 * ============================================
 * BULK EMAIL SENDER
 * ============================================
 */

/**
 * Send bulk emails from sheet
 * Column A: Email
 * Column B: Name
 * Column C: Subject
 * Column D: Body
 * Column E: Status
 * Column F: Sent Date
 */
function sendBulkEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  
  var sentCount = 0;
  var errorCount = 0;
  
  // Skip header row
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var email = row[0];
    var name = row[1];
    var subject = row[2];
    var body = row[3];
    
    // Skip if already sent or no email
    if (row[4] === 'Sent' || !email) continue;
    
    try {
      // Personalize email
      var personalizedBody = body.replace('{{Name}}', name);
      var personalizedSubject = subject.replace('{{Name}}', name);
      
      var options = {
        name: 'Your Company',
        htmlBody: personalizedBody.replace(/\n/g, '<br>')
      };
      
      MailApp.sendEmail(email, personalizedSubject, personalizedBody, options);
      
      // Update status
      sheet.getRange(i + 1, 5).setValue('Sent');
      sheet.getRange(i + 1, 6).setValue(new Date());
      
      sentCount++;
      
      // Avoid rate limits (100 emails/day for free accounts)
      if (sentCount >= 50) {
        SpreadsheetApp.getUi().alert('Reached 50 emails. Please run again for remaining.');
        break;
      }
      
      // Small delay between emails
      Utilities.sleep(1000);
      
    } catch (error) {
      sheet.getRange(i + 1, 5).setValue('Error: ' + error.message);
      errorCount++;
      Logger.log('Error sending to ' + email + ': ' + error.message);
    }
  }
  
  SpreadsheetApp.getUi().alert(
    'Bulk Email Complete\n\n' +
    'Sent: ' + sentCount + '\n' +
    'Errors: ' + errorCount
  );
}

/**
 * ============================================
 * READ EMAILS
 * ============================================
 */

/**
 * Read unread emails and log to sheet
 */
function readUnreadEmails() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EmailLog');
  
  if (!sheet) {
    sheet = ss.insertSheet('EmailLog');
    sheet.appendRow(['Date', 'From', 'Subject', 'Snippet', 'Label', 'Read']);
  }
  
  // Get unread threads
  var threads = GmailApp.search('is:unread', 0, 50);
  
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var messages = thread.getMessages();
    
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      
      sheet.appendRow([
        message.getDate(),
        message.getFrom(),
        message.getSubject(),
        message.getPlainBody().substring(0, 200),
        thread.getLabels().map(function(l) { return l.getName(); }).join(', '),
        'Unread'
      ]);
    }
    
    // Mark as read
    thread.markRead();
  }
  
  SpreadsheetApp.getUi().alert('Processed ' + threads.length + ' unread threads');
}

/**
 * Search emails and log results
 */
function searchEmails(query, maxResults) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('SearchResults');
  
  if (!sheet) {
    sheet = ss.insertSheet('SearchResults');
    sheet.appendRow(['Date', 'From', 'To', 'Subject', 'Body Preview', 'Has Attachment']);
  }
  
  var threads = GmailApp.search(query, 0, maxResults || 50);
  
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var firstMessage = thread.getMessages()[0];
    
    sheet.appendRow([
      firstMessage.getDate(),
      firstMessage.getFrom(),
      firstMessage.getTo(),
      firstMessage.getSubject(),
      firstMessage.getPlainBody().substring(0, 200),
      firstMessage.getAttachments().length > 0 ? 'Yes' : 'No'
    ]);
  }
  
  return threads.length;
}

/**
 * ============================================
 * CREATE DRAFTS
 * ============================================
 */

/**
 * Create email drafts from sheet data
 */
function createDraftsFromSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var draftCount = 0;
  
  // Skip header
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var to = row[0];
    var subject = row[1];
    var body = row[2];
    
    if (!to || !subject) continue;
    
    try {
      GmailApp.createDraft(to, subject, body, {
        htmlBody: body.replace(/\n/g, '<br>')
      });
      
      sheet.getRange(i + 1, 4).setValue('Draft Created');
      draftCount++;
    } catch (error) {
      sheet.getRange(i + 1, 4).setValue('Error: ' + error.message);
    }
  }
  
  SpreadsheetApp.getUi().alert('Created ' + draftCount + ' drafts');
}

/**
 * ============================================
 * EMAIL TEMPLATES
 * ============================================
 */

/**
 * Send email with template
 * @param {string} to - Recipient email
 * @param {string} templateName - Template name from Templates sheet
 * @param {object} replacements - Key-value pairs for template
 */
function sendEmailWithTemplate(to, templateName, replacements) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var templatesSheet = ss.getSheetByName('EmailTemplates');
  
  if (!templatesSheet) {
    throw new Error('EmailTemplates sheet not found');
  }
  
  var data = templatesSheet.getDataRange().getValues();
  var template = null;
  
  // Find template
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === templateName) {
      template = {
        subject: data[i][1],
        body: data[i][2]
      };
      break;
    }
  }
  
  if (!template) {
    throw new Error('Template not found: ' + templateName);
  }
  
  // Replace placeholders
  var subject = template.subject;
  var body = template.body;
  
  for (var key in replacements) {
    subject = subject.replace('{{' + key + '}}', replacements[key]);
    body = body.replace('{{' + key + '}}', replacements[key]);
  }
  
  MailApp.sendEmail(to, subject, body, {
    htmlBody: body.replace(/\n/g, '<br>')
  });
}

/**
 * ============================================
 * AUTOMATED RESPONSES
 * ============================================
 */

/**
 * Auto-reply to emails with specific subject
 */
function autoReplyToEmails() {
  var threads = GmailApp.search('is:unread subject:"Inquiry"', 0, 10);
  
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var messages = thread.getMessages();
    var lastMessage = messages[messages.length - 1];
    
    var replyBody = 'Thank you for your inquiry!\n\n' +
                    'We have received your message and will respond within 24 hours.\n\n' +
                    'Best regards,\nSupport Team';
    
    thread.reply(replyBody);
    thread.markRead();
    thread.addLabel(GmailApp.getUserLabelByName('Processed'));
  }
}

/**
 * ============================================
 * EMAIL ANALYTICS
 * ============================================
 */

/**
 * Generate email statistics
 */
function generateEmailStats() {
  var stats = {
    sent: 0,
    received: 0,
    unread: 0,
    drafts: 0
  };
  
  // Count sent (from Sent folder)
  var sentThreads = GmailApp.search('in:sent', 0, 100);
  stats.sent = sentThreads.length;
  
  // Count unread
  var unreadThreads = GmailApp.search('is:unread', 0, 100);
  stats.unread = unreadThreads.length;
  
  // Count drafts
  var drafts = GmailApp.getDrafts();
  stats.drafts = drafts.length;
  
  // Get inbox count
  var inboxThreads = GmailApp.search('in:inbox', 0, 100);
  stats.received = inboxThreads.length;
  
  // Log to sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EmailStats') || ss.insertSheet('EmailStats');
  
  sheet.appendRow([
    new Date(),
    stats.sent,
    stats.received,
    stats.unread,
    stats.drafts
  ]);
  
  return stats;
}

/**
 * ============================================
 * ATTACHMENT HANDLER
 * ============================================
 */

/**
 * Save attachments from emails to Drive
 */
function saveAttachmentsToDrive() {
  var threads = GmailApp.search('has:attachment is:unread', 0, 10);
  var folder = DriveApp.getFolderById('YOUR_FOLDER_ID'); // Set your folder ID
  
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var messages = thread.getMessages();
    
    for (var j = 0; j < messages.length; j++) {
      var attachments = messages[j].getAttachments();
      
      for (var k = 0; k < attachments.length; k++) {
        var attachment = attachments[k];
        folder.createFile(attachment);
      }
    }
    
    thread.markRead();
  }
}
```

## Setup Instructions

1. **Open Script Editor**: Extensions > Apps Script
2. **Enable Gmail API**: Services > Gmail > Enable
3. **Paste Code**: Copy all code into Code.gs
4. **Save & Authorize**: Run any function to authorize
5. **Use Menu**: Gmail menu appears in Sheets

## Email Template Sheet Format

| Template Name | Subject | Body |
|---------------|---------|------|
| Welcome | Welcome {{Name}}! | Hi {{Name}},\n\nWelcome to... |
| Follow-up | Following up, {{Name}} | Hi {{Name}},\n\nJust checking in... |
| Invoice | Invoice #{{InvoiceNumber}} | Dear {{Name}},\n\nPlease find... |

## Best Practices

1. **Rate Limits**: 100 emails/day (free), 2000/day (Workspace)
2. **Personalization**: Use {{placeholders}} for templates
3. **Error Handling**: Always catch and log errors
4. **Testing**: Send test emails first
5. **Unsubscribe**: Include unsubscribe for bulk emails

## Common Use Cases

- Welcome email sequences
- Invoice delivery
- Newsletter distribution
- Meeting confirmations
- Follow-up automation
- Customer support responses

---

**Platform**: Google Sheets + Gmail
**Difficulty**: Intermediate
**Quotas**: 100 emails/day (free), 2000/day (Workspace)
