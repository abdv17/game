Class FunctionLogClass
	Private Sub Class_Initialize()
		msgbox "class is intialized"
		
	End Sub
	
	Public Function fn_CreateLogFile(sFolderName,sFilePath)
		Set oFso = CreateObject("Scripting.FileSystemObject")
		Environment.Value(sFilePath) = Environment.Value(sFolderName) & "\" & Replace(Replace(Replace(now,"/","_"),":","_")," ","_") & ".txt"
		Set ftxt = oFso.CreateTextFile(Environment.Value(sFilePath),true)
		ftxt.WriteLine sFolderName & " Created @ " & now
		ftxt.Close
		Set oFso = Nothing
	End Function
	Public Function fn_PrintnUpdateLogFile(sFilePath,sText)
		Set oFso = CreateObject("Scripting.FileSystemObject")
		Set fLog = oFso.OpenTextFile(Environment.Value(sFilePath),8)
		fLog.WriteLine sText
		fLog.WriteLine "**********************************************************************"
		fLog.WriteBlankLines 1
		Set fLog = Nothing
		Set oFso = Nothing
	End Function
	Private Sub Class_Terminate()
		msgbox "class is terminated"
	End Sub
End Class
Public Function triggerClass()
	Set triggerClass = new FunctionLogClass
End Function