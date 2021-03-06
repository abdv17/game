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
			Environment.Value("bExecStatus") = False
			Environment.Value("ActionWord") = objWrkSht.Cells(i,3).Value
			Environment.Value("TCName") = objWrkSht.Cells(i,2).Value
			Call fn_CreateWordDoc()
			objWrkSht.Cells(i,6).Value = Time	
			LoadAndRunAction "C:\Users\Lenovo\Documents\Unified Functional Testing\GUITest1",Environment.Value("ActionWord"),oneIteration
			objWrkSht.Cells(i,7).Value = Time
			objWrkSht.Cells(i,8).Value = Second(objWrkSht.Cells(i,7).Value - objWrkSht.Cells(i,6).Value) & " Seconds"
			If Environment("bExecStatus") Then
				objWrkSht.Cells(i,5).Value = "Pass"
			Else
				objWrkSht.Cells(i,5).Value = "Fail"
			End If
		End If 
	
	
Next
objWrkBk.Save
Set objWrkSht = Nothing
Set objWrkBk = Nothing
objWrkBk.Close
objExcel.Quit




'Call for HTML reporting after test data excel sheet complete update done.
Call fn_HTMLReporting(sExcelFilePath)