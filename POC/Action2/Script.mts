'Working with Excel Objects
'Writing functions to open an existing excel
'Read data,execute accordingly
'Update data after execution

sExcelFilePath = "C:\Users\bd2kfk\Documents\Unified Functional Testing\POC\TestData.xls"

Set objExcel = CreateObject("Excel.Application")
Set objWrkBk = objExcel.Workbooks.Open(sExcelFilePath)
Set objWrkSht = objWrkB
