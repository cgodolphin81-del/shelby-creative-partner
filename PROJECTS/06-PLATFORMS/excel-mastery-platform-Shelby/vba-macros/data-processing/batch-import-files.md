# Batch Import Files Macro

## Overview
Imports data from multiple Excel/CSV files in a folder and consolidates them into a single workbook with a summary sheet.

## Code

### Module: modBatchImport

```vba
Option Explicit

' ============================================
' BATCH IMPORT FILES MACRO
' ============================================
' Imports data from multiple files in a folder
' Consolidates into single workbook
' ============================================

' ============================================
' MAIN IMPORT PROCEDURE
' ============================================
Public Sub BatchImportFiles()
    Dim FolderPath As String
    Dim FileName As String
    Dim ws As Worksheet
    Dim wbSource As Workbook
    Dim LastRow As Long
    Dim ImportRow As Long
    Dim FileCount As Integer
    Dim ErrorCount As Integer
    
    ' Get folder path from user
    FolderPath = GetFolderPath()
    If FolderPath = "" Then Exit Sub
    
    ' Ensure path ends with backslash
    If Right(FolderPath, 1) <> "\" Then FolderPath = FolderPath & "\"
    
    ' Create or clear import sheet
    On Error Resume Next
    Set ws = ThisWorkbook.Sheets("ImportedData")
    If ws Is Nothing Then
        Set ws = ThisWorkbook.Sheets.Add
        ws.Name = "ImportedData"
    Else
        ws.Cells.Clear
    End If
    On Error GoTo 0
    
    ' Set up headers
    ImportRow = 1
    With ws
        .Range("A1").Value = "Source File"
        .Range("B1").Value = "Import Date"
        .Range("C1").Value = "Data"
        .Range("A1:C1").Font.Bold = True
        .Range("A1:C1").Interior.Color = RGB(200, 200, 255)
        ImportRow = 2
    End With
    
    ' Get first file
    FileName = Dir(FolderPath & "*.xls*")
    FileCount = 0
    ErrorCount = 0
    
    Application.ScreenUpdating = False
    Application.DisplayAlerts = False
    
    ' Loop through all Excel files
    Do While FileName <> ""
        On Error Resume Next
        Set wbSource = Workbooks.Open(FolderPath & FileName, ReadOnly:=True)
        
        If Err.Number = 0 Then
            ' Copy data from source
            Call ImportFromWorkbook(wbSource, ws, ImportRow, FileName)
            wbSource.Close SaveChanges:=False
            FileCount = FileCount + 1
        Else
            ErrorCount = ErrorCount + 1
            Err.Clear
        End If
        On Error GoTo 0
        
        FileName = Dir()
    Loop
    
    ' Also process CSV files
    FileName = Dir(FolderPath & "*.csv")
    Do While FileName <> ""
        On Error Resume Next
        Set wbSource = Workbooks.Open(FolderPath & FileName, ReadOnly:=True)
        
        If Err.Number = 0 Then
            Call ImportFromWorkbook(wbSource, ws, ImportRow, FileName)
            wbSource.Close SaveChanges:=False
            FileCount = FileCount + 1
        Else
            ErrorCount = ErrorCount + 1
            Err.Clear
        End If
        On Error GoTo 0
        
        FileName = Dir()
    Loop
    
    Application.ScreenUpdating = True
    Application.DisplayAlerts = True
    
    ' Create summary
    Call CreateImportSummary(ws, FileCount, ErrorCount, FolderPath)
    
    ' Auto-fit columns
    ws.Columns.AutoFit
    
    MsgBox "Import Complete!" & vbCrLf & _
           "Files Imported: " & FileCount & vbCrLf & _
           "Errors: " & ErrorCount, vbInformation
End Sub

' ============================================
' IMPORT DATA FROM WORKBOOK
' ============================================
Private Sub ImportFromWorkbook(wbSource As Workbook, _
                               wsDest As Worksheet, _
                               ByRef StartRow As Long, _
                               SourceFile As String)
    Dim wsSource As Worksheet
    Dim LastRow As Long
    Dim LastCol As Long
    Dim DataRange As Range
    Dim i As Long
    
    ' Use first sheet or sheet named "Data"
    On Error Resume Next
    Set wsSource = wbSource.Sheets("Data")
    If wsSource Is Nothing Then Set wsSource = wbSource.Sheets(1)
    On Error GoTo 0
    
    ' Find last row and column
    LastRow = wsSource.Cells(wsSource.Rows.Count, 1).End(xlUp).Row
    LastCol = wsSource.Cells(1, wsSource.Columns.Count).End(xlToLeft).Column
    
    ' Skip if no data
    If LastRow < 2 Then Exit Sub
    
    ' Copy data (skip header row)
    For i = 2 To LastRow
        wsDest.Cells(StartRow, 1).Value = SourceFile
        wsDest.Cells(StartRow, 2).Value = Now
        wsDest.Cells(StartRow, 3).Value = wsSource.Cells(i, 1).Value
        
        ' Copy additional columns if needed
        If LastCol > 1 Then
            wsSource.Range(wsSource.Cells(i, 1), wsSource.Cells(i, LastCol)).Copy
            wsDest.Cells(StartRow, 3).PasteSpecial xlPasteValues
        End If
        
        StartRow = StartRow + 1
    Next i
    
    Application.CutCopyMode = False
End Sub

' ============================================
' CREATE IMPORT SUMMARY
' ============================================
Private Sub CreateImportSummary(ws As Worksheet, _
                                FileCount As Integer, _
                                ErrorCount As Integer, _
                                FolderPath As String)
    Dim wsSummary As Worksheet
    Dim LastRow As Long
    
    ' Create summary sheet
    On Error Resume Next
    Set wsSummary = ThisWorkbook.Sheets("ImportSummary")
    If wsSummary Is Nothing Then
        Set wsSummary = ThisWorkbook.Sheets.Add(Before:=ws)
        wsSummary.Name = "ImportSummary"
    Else
        wsSummary.Cells.Clear
    End If
    On Error GoTo 0
    
    With wsSummary
        .Range("A1").Value = "IMPORT SUMMARY"
        .Range("A1").Font.Size = 16
        .Range("A1").Font.Bold = True
        
        .Range("A3").Value = "Folder Path:"
        .Range("B3").Value = FolderPath
        
        .Range("A4").Value = "Import Date:"
        .Range("B4").Value = Now
        
        .Range("A6").Value = "Files Imported:"
        .Range("B6").Value = FileCount
        
        .Range("A7").Value = "Import Errors:"
        .Range("B7").Value = ErrorCount
        
        .Range("A9").Value = "Total Records:"
        .Range("B9").Value = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row - 1
        
        ' List imported files
        .Range("A12").Value = "Files Imported:"
        .Range("A12").Font.Bold = True
        
        ' Create file list from ImportedData sheet
        ws.Range("A:A").RemoveDuplicates Columns:=1, Header:=xlYes
        ws.Range("A2:A" & ws.Cells(ws.Rows.Count, 1).End(xlUp).Row).Copy
        .Range("A13").PasteSpecial xlPasteValues
        Application.CutCopyMode = False
        
        .Columns.AutoFit
    End With
End Sub

' ============================================
' GET FOLDER PATH (FOLDER PICKER)
' ============================================
Public Function GetFolderPath() As String
    Dim FolderDialog As FileDialog
    Set FolderDialog = Application.FileDialog(msoFileDialogFolderPicker)
    
    With FolderDialog
        .Title = "Select Folder Containing Files to Import"
        .InitialFileName = ThisWorkbook.Path
        .AllowMultiSelect = False
        
        If .Show = -1 Then
            GetFolderPath = .SelectedItems(1)
        Else
            GetFolderPath = ""
        End If
    End With
    
    Set FolderDialog = Nothing
End Function

' ============================================
' IMPORT SPECIFIC COLUMNS
' ============================================
Public Sub ImportSpecificColumns()
    Dim FolderPath As String
    Dim FileName As String
    Dim ws As Worksheet
    Dim wbSource As Workbook
    Dim StartRow As Long
    
    FolderPath = GetFolderPath()
    If FolderPath = "" Then Exit Sub
    If Right(FolderPath, 1) <> "\" Then FolderPath = FolderPath & "\"
    
    Set ws = ThisWorkbook.Sheets.Add
    ws.Name = "Import_" & Format(Now, "hhnnss")
    
    ' Headers
    ws.Range("A1:D1").Value = Array("File", "Date", "Name", "Amount")
    ws.Range("A1:D1").Font.Bold = True
    
    StartRow = 2
    FileName = Dir(FolderPath & "*.xls*")
    
    Application.ScreenUpdating = False
    
    Do While FileName <> ""
        Set wbSource = Workbooks.Open(FolderPath & FileName, ReadOnly:=True)
        
        ' Import specific columns (e.g., A and D)
        Call ImportColumns(wbSource, ws, StartRow, FileName, Array(1, 4))
        
        wbSource.Close SaveChanges:=False
        FileName = Dir()
    Loop
    
    Application.ScreenUpdating = True
    ws.Columns.AutoFit
End Sub

Private Sub ImportColumns(wbSource As Workbook, _
                          wsDest As Worksheet, _
                          ByRef RowNum As Long, _
                          SourceFile As String, _
                          Columns To Import As Variant)
    Dim wsSource As Worksheet
    Dim LastRow As Long
    Dim i As Long
    Dim ColIdx As Long
    
    Set wsSource = wbSource.Sheets(1)
    LastRow = wsSource.Cells(wsSource.Rows.Count, 1).End(xlUp).Row
    
    For i = 2 To LastRow
        wsDest.Cells(RowNum, 1).Value = SourceFile
        wsDest.Cells(RowNum, 2).Value = Now
        
        For ColIdx = LBound(Columns To Import) To UBound(Columns To Import)
            wsDest.Cells(RowNum, ColIdx + 2).Value = _
                wsSource.Cells(i, Columns To Import(ColIdx)).Value
        Next ColIdx
        
        RowNum = RowNum + 1
    Next i
End Sub
```

## Usage Instructions

1. **Open VBA Editor**: `Alt + F11`
2. **Insert Module**: Right-click > Insert > Module
3. **Paste Code**: Copy all code above
4. **Save Workbook**: As `.xlsm`
5. **Run Macro**: `Alt + F8` > Select `BatchImportFiles`

## Features

✅ Import all Excel files from folder
✅ Import CSV files
✅ Track source file name
✅ Track import timestamp
✅ Create summary sheet
✅ Error handling
✅ Auto-fit columns
✅ Remove duplicates

## Customization

### Change Import Location
```vba
' Instead of new sheet, append to existing
Set ws = ThisWorkbook.Sheets("MasterData")
StartRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row + 1
```

### Filter by File Name Pattern
```vba
' Only import files starting with "Report"
FileName = Dir(FolderPath & "Report*.xls*")
```

### Add Data Validation
```vba
' Validate data before importing
If IsDate(wsSource.Cells(i, 1).Value) Then
    ' Import valid data
End If
```

### Progress Indicator
```vba
' Add progress bar
Application.StatusBar = "Importing: " & FileName & " (" & FileCount & ")"
```

## Best Practices

1. **Backup First**: Always backup before batch operations
2. **Test Small**: Test with 2-3 files first
3. **Consistent Format**: Ensure all files have same structure
4. **Error Logging**: Log errors for review
5. **Memory Management**: Close source files promptly

---

**File Type**: Excel Macro-Enabled (.xlsm)
**Difficulty**: Intermediate-Advanced
**Compatible**: Excel 2010+
