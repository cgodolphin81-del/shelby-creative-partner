# Auto-Save Workbook Macro

## Overview
Automatically saves the workbook at regular intervals or when specific events occur, preventing data loss.

## Code

### Module: modAutoSave

```vba
Option Explicit

' ============================================
' AUTO-SAVE WORKBOOK MACRO
' ============================================
' Automatically saves workbook at specified intervals
' Place in: Insert > Module
' ============================================

' Global variable for timer
Public SaveTimer As Double
Public SaveInterval As Double

' ============================================
' START AUTO-SAVE TIMER
' ============================================
Public Sub StartAutoSave()
    SaveInterval = 5  ' Minutes between saves
    
    If SaveTimer <> 0 Then KillTimer SaveTimer
    SaveTimer = SetTimer(0, 0, SaveInterval * 60 * 1000, AddressOf AutoSaveCallback)
    
    MsgBox "Auto-save enabled: Every " & SaveInterval & " minutes", vbInformation
End Sub

' ============================================
' STOP AUTO-SAVE TIMER
' ============================================
Public Sub StopAutoSave()
    If SaveTimer <> 0 Then
        KillTimer SaveTimer
        SaveTimer = 0
    End If
    
    MsgBox "Auto-save disabled", vbInformation
End Sub

' ============================================
' AUTO-SAVE CALLBACK (API)
' ============================================
' Requires API declarations at top of module
Private Sub AutoSaveCallback(ByVal hwnd As Long, ByVal uMsg As Long, _
                            ByVal idEvent As Long, ByVal dwTime As Long)
    Call PerformAutoSave
End Sub

' ============================================
' PERFORM AUTO-SAVE
' ============================================
Public Sub PerformAutoSave()
    On Error GoTo ErrorHandler
    
    ThisWorkbook.Save
    
    ' Optional: Show status in status bar
    Application.StatusBar = "Auto-saved at " & Format(Now, "hh:mm:ss")
    
    ' Clear status bar after 3 seconds
    Application.OnTime Now + TimeValue("00:00:03"), "ClearStatusBar"
    
    Exit Sub
    
ErrorHandler:
    MsgBox "Auto-save failed: " & Err.Description, vbExclamation
End Sub

' ============================================
' CLEAR STATUS BAR
' ============================================
Public Sub ClearStatusBar()
    Application.StatusBar = False
End Sub

' ============================================
' SIMPLE VERSION - NO API REQUIRED
' ============================================
Public Sub SimpleAutoSave()
    ' Simple version using OnTime instead of API
    Dim NextSave As Date
    NextSave = Now + TimeValue("00:05:00")  ' 5 minutes
    
    ThisWorkbook.Save
    
    ' Schedule next save
    Application.OnTime NextSave, "SimpleAutoSave"
    
    Application.StatusBar = "Auto-saved at " & Format(Now, "hh:mm:ss")
End Sub

' ============================================
' STOP SIMPLE AUTO-SAVE
' ============================================
Public Sub StopSimpleAutoSave()
    On Error Resume Next
    Application.OnTime EarliestTime:=Now, Procedure:="SimpleAutoSave", Schedule:=False
    On Error GoTo 0
    
    Application.StatusBar = False
End Sub
```

### Workbook Event: ThisWorkbook

```vba
Option Explicit

' ============================================
' AUTO-SAVE ON WORKBOOK OPEN
' ============================================
Private Sub Workbook_Open()
    ' Start auto-save when workbook opens
    Call StartAutoSave
    ' Or use simple version:
    ' Call SimpleAutoSave
End Sub

' ============================================
' AUTO-SAVE ON WORKBOOK CLOSE
' ============================================
Private Sub Workbook_BeforeClose(Cancel As Boolean)
    ' Ensure save before closing
    If ThisWorkbook.Saved = False Then
        If MsgBox("Save changes before closing?", vbYesNo + vbQuestion) = vbYes Then
            ThisWorkbook.Save
        End If
    End If
    
    ' Stop auto-save timer
    Call StopAutoSave
End Sub

' ============================================
' AUTO-SAVE AFTER CHANGES
' ============================================
Private Sub Workbook_SheetChange(ByVal Sh As Object, ByVal Target As Range)
    ' Optional: Save after specific changes
    Static LastSave As Date
    
    ' Only save if 5 minutes since last save
    If Now - LastSave > TimeValue("00:05:00") Then
        ThisWorkbook.Save
        LastSave = Now
    End If
End Sub
```

### API Declarations (for timer version)

```vba
' Add at top of module for timer functionality
#If VBA7 Then
    Public Declare PtrSafe Function SetTimer Lib "user32" ( _
        ByVal hwnd As LongPtr, _
        ByVal nIDEvent As LongPtr, _
        ByVal uElapse As Long, _
        ByVal lpTimerFunc As LongPtr) As LongPtr
    
    Public Declare PtrSafe Function KillTimer Lib "user32" ( _
        ByVal hwnd As LongPtr, _
        ByVal nIDEvent As LongPtr) As Long
#Else
    Public Declare Function SetTimer Lib "user32" ( _
        ByVal hwnd As Long, _
        ByVal nIDEvent As Long, _
        ByVal uElapse As Long, _
        ByVal lpTimerFunc As Long) As Long
    
    Public Declare Function KillTimer Lib "user32" ( _
        ByVal hwnd As Long, _
        ByVal nIDEvent As Long) As Long
#End If
```

## Setup Instructions

1. **Open VBA Editor**: Press `Alt + F11`
2. **Insert Module**: Right-click project > Insert > Module
3. **Paste Code**: Copy the module code above
4. **Add to ThisWorkbook**: Double-click ThisWorkbook, paste event code
5. **Save as Macro-Enabled**: File > Save As > `.xlsm`
6. **Enable Macros**: When opening, click "Enable Content"

## Usage

### Start Auto-Save
```vba
' Run this macro to start
StartAutoSave
```

### Stop Auto-Save
```vba
' Run this macro to stop
StopAutoSave
```

## Customization Options

### Change Save Interval
```vba
' In StartAutoSave, change:
SaveInterval = 10  ' 10 minutes instead of 5
```

### Save to Specific Location
```vba
Public Sub PerformAutoSave()
    Dim SavePath As String
    SavePath = "C:\Backups\" & ThisWorkbook.Name
    
    ThisWorkbook.SaveCopyAs SavePath
    ' Keep original open and saved
    ThisWorkbook.Saved = True
End Sub
```

### Versioned Backups
```vba
Public Sub PerformAutoSave()
    Dim BackupPath As String
    Dim Timestamp As String
    
    Timestamp = Format(Now, "yyyy-mm-dd_hhnnss")
    BackupPath = "C:\Backups\" & _
                 Left(ThisWorkbook.Name, InStr(ThisWorkbook.Name, ".") - 1) & _
                 "_" & Timestamp & ".xlsm"
    
    ThisWorkbook.SaveCopyAs BackupPath
End Sub
```

### Conditional Auto-Save
```vba
Public Sub PerformAutoSave()
    ' Only save if specific sheet has changes
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("Data")
    
    If ws.Range("A1").Value <> "" Then
        ThisWorkbook.Save
    End If
End Sub
```

## Best Practices

1. **Test First**: Run manually before enabling auto
2. **Backup Location**: Save copies to different drive
3. **Version Control**: Use timestamps for backups
4. **User Notification**: Inform users auto-save is active
5. **Error Handling**: Always include error handling
6. **Disable on Close**: Stop timers when closing

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Macro won't run | Enable macros in Trust Center |
| Save fails | Check file permissions |
| Timer doesn't stop | Ensure StopAutoSave called |
| Multiple saves | Check for duplicate timers |

## Security Notes

⚠️ **Important**: 
- Save as `.xlsm` (macro-enabled)
- Users must enable macros
- Consider digital signature for distribution
- Document auto-save behavior for users

---

**File Type**: Excel Macro-Enabled (.xlsm)
**Difficulty**: Intermediate
**Compatible**: Excel 2010+
