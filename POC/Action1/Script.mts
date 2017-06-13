'************************************************************************
'Folder creations


Environment.Value("Images") = fn_FolderOperations("Images")
Environment.Value("Screenshots") = fn_FolderOperations("Screenshots")
Environment.Value("FunctionLog") = fn_FolderOperations("FunctionLog")
Environment.Value("EngineLog") = fn_FolderOperations("EngineLog")
'*************************************************************************

Call fn_CreateLogFile("FunctionLog","FunctionLogPath")
Call fn_CreateLogFile("EngineLog","EngineLogPath")

'Action on Webapplication
'Dim sobjPage,sWebEdit
'Set sobjPage = Browser("Browser").Page("Page")
'Set sWebEdit = sobjPage.WebEdit("firstName")
'If fn_Web_UI_WebObject_Operations("Dummy_Test","exist",sWebEdit,"") Then
'	If fn_Web_UI_WebObject_Operations("Dummy","enabled",sWebEdit,"disabled") Then
'		msgbox "Cool with exist and enabled mate"
'	End If
'End If
'Public Function fn_Web_UI_WebObject_Operations(sFunctionName,sAction,sWebObject,sPropertValue)
'	fn_Web_UI_WebObjectOperations = False
'	Select Case sAction
'		Case "exist"
'			If sWebObject.exist Then
'				fn_Web_UI_WebObjectOperations = True
'			End If
'		Case "enabled"
'			If sWebObject.getROProperty(sPropertyValue) = 0 Then
'				fn_Web_UI_WebObjectOperations = True
'			End If
'		Case Else
'				msgbox "No valid case"
'	End Select
'End Function



