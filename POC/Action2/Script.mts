'Working with Excel Objects
'Writing functions to open an existing excel
'Read data,execute accordingly
'Update data after execution
'

sExcelFilePath = "C:\Users\Lenovo\Documents\Unified Functional Testing\POC\TestData\TestCasesData.xlsx"

Set objExcel = CreateObject("Excel.Application")
objExcel.Visible = True
Set objWrkBk = objExcel.Workbooks.Open(sExcelFilePath)
Set objWrkSht = objWrkBk.Worksheets("Sheet1")

iRwcnt = objWrkSht.UsedRange.Rows.Count
iClncnt = objWrkSht.UsedRange.Columns.Count
For i = 1 To iRwcnt
	For j = 1 To iClncnt
		Print objWrkSht.Cells(i,j).Value
	Next
	
Next



Set objWrkSht = Nothing
Set objWrkBk = Nothing
objWrkBk.Close
objExcel.Quit