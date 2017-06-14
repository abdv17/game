'************************************************************************
'Folder creations


Environment.Value("Images") = fn_FolderOperations("Images")
Environment.Value("Screenshots") = fn_FolderOperations("Screenshots")
Environment.Value("FunctionLog") = fn_FolderOperations("FunctionLog")
Environment.Value("EngineLog") = fn_FolderOperations("EngineLog")
'*************************************************************************

Call fn_CreateLogFile("FunctionLog","FunctionLogPath")
Call fn_CreateLogFile("EngineLog","EngineLogPath")

Call fn_Print_UpdateLogFile("FunctionLogPath","Start of Logging")
Call fn_Print_UpdateLogFile("EngineLogPath","Start of Logging")

'Action on Webapplication
SystemUtil.Run "iexplore.exe","http://newtours.demoaut.com/mercuryregister.php"

Dim sobjPage,sWebEdit
Set sobjPage = Browser("Browser").Page("Page")
Set sWebEdit = sobjPage.WebEdit("firstName")
If fn_Web_UI_WebObject_Operations("Dummy_Test","exist",sWebEdit,"") Then
	If fn_Web_UI_WebObject_Operations("Dummy","enabled",sWebEdit,"disabled") Then
		Call fn_Print_UpdateLogFile("FunctionLogPath",sWebEdit.ToString & " is exist and enabled")		
	else
		Call fn_Print_UpdateLogFile("FunctionLogPath",sWebEdit.ToString & " is disabled")
	End If
Else
	Call fn_Print_UpdateLogFile("FunctionLogPath",sWebEdit.ToString & " doesn't exist")
End If
Public Function fn_Web_UI_WebObject_Operations(sFunctionName,sAction,sWebObject,sPropertValue)
	fn_Web_UI_WebObjectOperations = False
	Select Case sAction
		Case "exist"
			If sWebObject.exist Then
				fn_Web_UI_WebObjectOperations = True	
				
			End If
		Case "enabled"
			If sWebObject.getROProperty(sPropertyValue) = 0 Then
				fn_Web_UI_WebObjectOperations = True
			End If
		Case Else
				msgbox "No valid case"
	End Select
End Function
'

