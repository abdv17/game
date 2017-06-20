﻿'Working with Excel Objects
'Writing functions to open an existing excel
'Read data,execute accordingly
'Update data after execution
'

sExcelFilePath = Environment.Value("TestDir") & "\TestData\TestCasesData.xlsx"

Set objExcel = CreateObject("Excel.Application")
objExcel.Visible = False
Set objWrkBk = objExcel.Workbooks.Open(sExcelFilePath)
Set objWrkSht = objWrkBk.Worksheets("Sheet1")

iRwcnt = objWrkSht.UsedRange.Rows.Count
iClncnt = objWrkSht.UsedRange.Columns.Count
For i = 1 To iRwcnt
	
		If objWrkSht.Cells(i,4).Value = "Yes" Then
			Environment.Value("ActionWord") = objWrkSht.Cells(i,3).Value
			Environment.Value("TCName") = objWrkSht.Cells(i,2).Value
			Call fn_CreateWordDoc()			
			LoadAndRunAction "C:\Users\bd2kfk\Documents\Unified Functional Testing\Practise",Environment.Value("ActionWord"),oneIteration
		End If 
	
	
Next
Set objWrkSht = Nothing
Set objWrkBk = Nothing
objWrkBk.Close
objExcel.Quit




