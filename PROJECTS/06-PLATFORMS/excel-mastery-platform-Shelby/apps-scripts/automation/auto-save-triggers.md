# Auto-Save & Time-Based Triggers

## Overview
Google Apps Script functions for automatic saving, time-based triggers, and scheduled operations in Google Sheets.

## Code

### Code.gs

```javascript
/**
 * ============================================
 * AUTO-SAVE & TIME-BASED TRIGGERS
 * ============================================
 * Automate saves and scheduled operations
 * in Google Sheets
 * ============================================
 */

/**
 * Create menu for manual trigger testing
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🔄 Auto-Save')
    .addItem('Enable Auto-Save', 'enableAutoSave')
    .addItem('Disable Auto-Save', 'disableAutoSave')
    .addItem('Check Triggers', 'checkTriggers')
    .addItem('Run Manual Save', 'manualSave')
    .addToUi();
}

/**
 * Enable automatic time-based save trigger
 * Saves every 5 minutes
 */
function enableAutoSave() {
  // Delete existing triggers
  deleteTriggers('autoSaveFunction');
  
  // Create new time-driven trigger (every 5 minutes)
  ScriptApp.newTrigger('autoSaveFunction')
    .timeBased()
    .everyMinutes(5)
    .create();
  
  SpreadsheetApp.getUi().alert('Auto-save enabled! Workbook will save every 5 minutes.');
}

/**
 * Disable all auto-save triggers
 */
function disableAutoSave() {
  deleteTriggers('autoSaveFunction');
  SpreadsheetApp.getUi().alert('Auto-save disabled.');
}

/**
 * Auto-save function (called by trigger)
 */
function autoSaveFunction() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var name = ss.getName();
    var url = ss.getUrl();
    
    // Force save by making a small change and reverting
    var sheet = ss.getActiveSheet();
    var range = sheet.getRange('ZZ1');
    var oldValue = range.getValue();
    
    // Update timestamp
    range.setValue('Auto-saved: ' + new Date().toLocaleString());
    SpreadsheetApp.flush(); // Force save
    
    // Optional: Log the save
    Logger.log('Auto-saved: ' + name + ' at ' + new Date());
    
    // Optional: Send notification (uncomment if needed)
    // sendSaveNotification(name, url);
    
  } catch (error) {
    Logger.log('Auto-save error: ' + error.toString());
  }
}

/**
 * Manual save function
 */
function manualSave() {
  autoSaveFunction();
  SpreadsheetApp.getUi().alert('Manual save completed!');
}

/**
 * Check existing triggers
 */
function checkTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  var message = 'Current Triggers:\n\n';
  
  if (triggers.length === 0) {
    message += 'No triggers found.';
  } else {
    for (var i = 0; i < triggers.length; i++) {
      var trigger = triggers[i];
      message += (i + 1) + '. ' + trigger.getHandlerFunction() + '\n';
      message += '   Type: ' + trigger.getTriggerType() + '\n';
      message += '   Event: ' + trigger.getEventType() + '\n\n';
    }
  }
  
  SpreadsheetApp.getUi().alert(message);
}

/**
 * Delete triggers by function name
 */
function deleteTriggers(functionName) {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === functionName) {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
}

/**
 * Send save notification email
 * @param {string} spreadsheetName - Name of spreadsheet
 * @param {string} spreadsheetUrl - URL of spreadsheet
 */
function sendSaveNotification(spreadsheetName, spreadsheetUrl) {
  var recipient = Session.getActiveUser().getEmail();
  var subject = 'Auto-Save: ' + spreadsheetName;
  var body = 'Your spreadsheet was auto-saved.\n\n' +
             'Name: ' + spreadsheetName + '\n' +
             'Time: ' + new Date().toLocaleString() + '\n' +
             'URL: ' + spreadsheetUrl;
  
  MailApp.sendEmail(recipient, subject, body);
}

/**
 * ============================================
 * DAILY REPORT TRIGGER
 * ============================================
 */

/**
 * Enable daily report generation
 */
function enableDailyReport() {
  deleteTriggers('generateDailyReport');
  
  // Run every day at 8 AM
  ScriptApp.newTrigger('generateDailyReport')
    .timeBased()
    .atHour(8)
    .everyDays(1)
    .create();
  
  SpreadsheetApp.getUi().alert('Daily report enabled! Will run at 8 AM each day.');
}

/**
 * Generate daily report
 */
function generateDailyReport() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Data');
  
  if (!sheet) {
    Logger.log('Data sheet not found');
    return;
  }
  
  // Get yesterday's data
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  var dateStr = Utilities.formatDate(yesterday, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  
  // Create or get report sheet
  var reportSheet = ss.getSheetByName('DailyReports');
  if (!reportSheet) {
    reportSheet = ss.insertSheet('DailyReports');
  }
  
  // Append summary
  var lastRow = reportSheet.getLastRow();
  reportSheet.getRange(lastRow + 1, 1).setValue(dateStr);
  reportSheet.getRange(lastRow + 1, 2).setValue(sheet.getLastRow() - 1); // Data count
  reportSheet.getRange(lastRow + 1, 3).setValue(new Date());
  
  // Send email report
  sendDailyReportEmail(dateStr, sheet.getLastRow() - 1);
}

/**
 * Send daily report email
 */
function sendDailyReportEmail(date, recordCount) {
  var recipient = Session.getActiveUser().getEmail();
  var subject = 'Daily Report: ' + date;
  var body = 'Daily Summary\n\n' +
             'Date: ' + date + '\n' +
             'Records: ' + recordCount + '\n' +
             'Generated: ' + new Date().toLocaleString();
  
  MailApp.sendEmail(recipient, subject, body);
}

/**
 * ============================================
 * WEEKLY CLEANUP TRIGGER
 * ============================================
 */

/**
 * Enable weekly cleanup
 */
function enableWeeklyCleanup() {
  deleteTriggers('weeklyCleanup');
  
  // Run every Monday at 6 AM
  ScriptApp.newTrigger('weeklyCleanup')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.MONDAY)
    .atHour(6)
    .create();
  
  SpreadsheetApp.getUi().alert('Weekly cleanup enabled! Runs every Monday at 6 AM.');
}

/**
 * Weekly cleanup function
 */
function weeklyCleanup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Archive old data
  archiveOldData(ss);
  
  // Clear temp sheets
  clearTempSheets(ss);
  
  // Send cleanup report
  sendCleanupReport();
}

/**
 * Archive data older than 90 days
 */
function archiveOldData(ss) {
  var sheet = ss.getSheetByName('Data');
  if (!sheet) return;
  
  var data = sheet.getDataRange().getValues();
  var cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - 90);
  
  var archiveSheet = ss.getSheetByName('Archive');
  if (!archiveSheet) {
    archiveSheet = ss.insertSheet('Archive');
  }
  
  // Find and move old rows
  for (var i = data.length - 1; i > 0; i--) {
    var rowDate = new Date(data[i][0]); // Assuming date in column A
    if (rowDate < cutoffDate) {
      archiveSheet.appendRow(data[i]);
      sheet.deleteRow(i + 1);
    }
  }
}

/**
 * Clear temporary sheets
 */
function clearTempSheets(ss) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    var sheetName = sheets[i].getName();
    if (sheetName.indexOf('Temp') === 0 || sheetName.indexOf('tmp') === 0) {
      sheets[i].clearContents();
    }
  }
}

/**
 * Send cleanup report
 */
function sendCleanupReport() {
  var recipient = Session.getActiveUser().getEmail();
  var subject = 'Weekly Cleanup Complete';
  var body = 'Weekly cleanup completed successfully.\n\n' +
             'Time: ' + new Date().toLocaleString() + '\n' +
             'Old data archived\n' +
             'Temp sheets cleared';
  
  MailApp.sendEmail(recipient, subject, body);
}

/**
 * ============================================
* CUSTOM SCHEDULE TRIGGER
 * ============================================
 */

/**
 * Create custom trigger with specific schedule
 * @param {string} functionName - Function to call
 * @param {number} hour - Hour (0-23)
 * @param {number} minute - Minute (0-59)
 * @param {number} intervalDays - Days between runs
 */
function createCustomTrigger(functionName, hour, minute, intervalDays) {
  deleteTriggers(functionName);
  
  var trigger = ScriptApp.newTrigger(functionName)
    .timeBased()
    .atHour(hour)
    .nearMinute(minute)
    .everyDays(intervalDays)
    .create();
  
  return trigger;
}

/**
 * Example: Run every 3 hours
 */
function enableThreeHourly() {
  deleteTriggers('threeHourlyTask');
  
  ScriptApp.newTrigger('threeHourlyTask')
    .timeBased()
    .everyHours(3)
    .create();
}

/**
 * Three hourly task
 */
function threeHourlyTask() {
  Logger.log('Three hourly task executed: ' + new Date());
  // Add your task logic here
}
```

## Setup Instructions

1. **Open Script Editor**: Extensions > Apps Script
2. **Paste Code**: Copy all code above into Code.gs
3. **Save Project**: Click Save icon
4. **Authorize**: Run `enableAutoSave` once to authorize
5. **Enable**: Run from menu or function

## Trigger Types

| Type | Method | Frequency |
|------|--------|-----------|
| Minutes | `.everyMinutes(n)` | Every n minutes |
| Hours | `.everyHours(n)` | Every n hours |
| Days | `.everyDays(n)` | Every n days at specific hour |
| Weeks | `.onWeekDay(day)` | Specific day of week |
| Month | `.onMonthDay(day)` | Specific day of month |

## Best Practices

1. **Error Handling**: Always wrap in try-catch
2. **Logging**: Use Logger.log for debugging
3. **Quotas**: Be aware of daily quotas
4. **Testing**: Test manually before enabling triggers
5. **Cleanup**: Delete old triggers before creating new

## Quotas (Free Google Accounts)

| Resource | Limit |
|----------|-------|
| Trigger runs | 20,000/day |
| Email sends | 100/day |
| Script runtime | 6 min/execution |

---

**Platform**: Google Sheets
**Difficulty**: Intermediate
**Permissions Required**: Script execution, Email (if sending notifications)
