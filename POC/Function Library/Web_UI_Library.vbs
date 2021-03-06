Public Function fn_Web_UI_Image_Operations(sFunctionName,sAction,sobjPage,sName)
	Dim sImage
	Set sImage = sobjPage.Image(sName)
	fn_Web_UI_Image_Operations = False
	If fn_Web_UI_WebObject_Operations("WebButton_Enabled_Checking","enabled",sImage,"disabled") = False Then
		Call fn_PrintnUpdateLogFile ("FunctionLogPath","FAIL : [ " &  sImage.toString & " ] Image Object does not enabled")
		Call fn_CaptureImage(sobjPage)
		Call fn_UpdateWord("FAIL : [ " &  sImage.toString & " ] Image Object does not enabled")
		Set sImage = Nothing
		Exit Function
	Else
		Call fn_PrintnUpdateLogFile ("FunctionLogPath","PASS : [ " &  sImage.toString & " ] Image Object enabled")
		Call fn_CaptureImage(sobjPage)
		Call fn_UpdateWord("PASS : [ " &  sImage.toString & " ] Image Object enabled")
	End If
	Select Case sAction
		Case "Click"
			sImage.Click
	End Select
	fn_Web_UI_Image_Operations = True
	Call fn_CaptureImage(sobjPage)
	Call fn_UpdateWord("PASS : Successfully clicked Image [ "& sImage.toString &" ]")
	Call fn_PrintnUpdateLogFile ("FunctionLogPath","PASS : Successfully clicked Image [ "& sImage.toString &" ]")
	If Err.Number <> 0 Then
		fn_Web_UI_WebObject_Operations = False
		Call fn_PrintnUpdateLogFile  ("FunctionLogPath","<FAIL>: Fail to perform operation [ " & Cstr(sAction) & " ] due to error number [ " & Cstr(Err.Number) & " ] with error description [ " & Cstr(Err.Description) & " ]")
		Call fn_CaptureImage(sobjPage)
		Call fn_UpdateWord("<FAIL>: Fail to perform operation [ " & Cstr(sAction) & " ] due to error number [ " & Cstr(Err.Number) & " ] with error description [ " & Cstr(Err.Description) & " ]")
	End If
	Set sWebEdit = Nothing
End Function


'WebButton Operations like Click
Public Function fn_Web_UI_WebButton_Operations(sFunctionName,sAction,sobjPage,sName)
	Dim sWebButton
	Set sWebButton = sobjPage.WebButton(sName)
	fn_Web_UI_WebButton_Operations = False
	If fn_Web_UI_WebObject_Operations("WebButton_Enabled_Checking","enabled",sWebButton,"disabled") = False Then
		Call fn_PrintnUpdateLogFile ("FunctionLogPath","FAIL : [ " &  sWebButton.toString & " ] WebButton Object does not enabled")
		Call fn_CaptureImage(sobjPage)
		Call fn_UpdateWord("FAIL : [ " &  sWebButton.toString & " ] WebButton Object does not enabled")
		Set sWebButton = Nothing
		Exit Function
	Else
		Call fn_PrintnUpdateLogFile ("FunctionLogPath","PASS : [ " &  sWebButton.toString & " ] WebButton Object enabled")
		Call fn_CaptureImage(sobjPage)
		Call fn_UpdateWord("PASS : [ " &  sWebButton.toString & " ] WebButton Object enabled")
	End If
	Select Case sAction
		Case "Click"
			sWebButton.Click
	End Select
	fn_Web_UI_WebButton_Operations = True
	Call fn_CaptureImage(sobjPage)
	Call fn_UpdateWord("PASS : Successfully clicked WebButton [ "& sWebButton.toString &" ]")
	Call fn_PrintnUpdateLogFile ("FunctionLogPath","PASS : Successfully clicked WebButton [ "& sWebButton.toString &" ]")
	If Err.Number <> 0 Then
		fn_Web_UI_WebObject_Operations = False
		Call fn_PrintnUpdateLogFile  ("FunctionLogPath","<FAIL>: Fail to perform operation [ " & Cstr(sAction) & " ] due to error number [ " & Cstr(Err.Number) & " ] with error description [ " & Cstr(Err.Description) & " ]")
		Call fn_CaptureImage(sobjPage)
		Call fn_UpdateWord("<FAIL>: Fail to perform operation [ " & Cstr(sAction) & " ] due to error number [ " & Cstr(Err.Number) & " ] with error description [ " & Cstr(Err.Description) & " ]")
	End If
	Set sWebEdit = Nothing
End Function
'WebEdit Operations like Set,SetSecure
Public Function fn_Web_UI_WebEdit_Opearations(sFunctionName,sAction,sobjPage,sValue,sName)
	Dim sWebEdit
	Set sWebEdit = sobjPage.WebEdit(sName)
	fn_Web_UI_WebEdit_Opearations = False
	If fn_Web_UI_WebObject_Operations("Webedit_Enabled_Checking","enabled",sWebEdit,"disabled") = False Then
		Call fn_PrintnUpdateLogFile ("FunctionLogPath","FAIL : [ " &  sWebEdit.toString & " ] WebEdit Object does not enabled")
		Call fn_CaptureImage(sobjPage)
		Call fn_UpdateWord("FAIL : [ " &  sWebEdit.toString & " ] WebEdit Object does not enabled")
		Exit Function
	Else
		Call fn_PrintnUpdateLogFile ("FunctionLogPath","PASS : [ " &  sWebEdit.toString & " ] WebEdit Object enabled")
		Call fn_CaptureImage(sobjPage)
		Call fn_UpdateWord("PASS : [ " &  sWebEdit.toString & " ] WebEdit Object enabled")
	End If
	Select Case sAction
		Case "Set","SetSecure"
			If sAction = "Set" Then
				sWebEdit.Set sValue
			ElseIf sAction = "SetSecure" Then
				sWebEdit.SetSecure sValue
			End If
			fn_Web_UI_WebEdit_Opearations = True
			Call fn_CaptureImage(sobjPage)
			Call fn_UpdateWord("PASS : Successfully set the value [ " & Cstr(sValue) & " ] in WebEditBox [ " & sWebEdit.toString & " ]")
			Call fn_PrintnUpdateLogFile ("FunctionLogPath","PASS : Successfully set the value [ " & Cstr(sValue) & " ] in WebEditBox [ " & sWebEdit.toString & " ]")
		Case "SendString"
		Case Else
			Call fn_PrintnUpdateLogFile ("FunctionLogPath","FAIL : [No valid case] : No valid case was passed for function [Fn_WEB_UI_WebEdit_Operations]")
			Call fn_CaptureImage(sobjPage)
			Call fn_UpdateWord("FAIL : [No valid case] : No valid case was passed for function [Fn_WEB_UI_WebEdit_Operations]")
	End Select
	If Err.Number <> 0 Then
		fn_Web_UI_WebObject_Operations = False
		Call fn_PrintnUpdateLogFile  ("FunctionLogPath","<FAIL>: Fail to perform operation [ " & Cstr(sAction) & " ] due to error number [ " & Cstr(Err.Number) & " ] with error description [ " & Cstr(Err.Description) & " ]")
		Call fn_CaptureImage(sobjPage)
		Call fn_UpdateWord("<FAIL>: Fail to perform operation [ " & Cstr(sAction) & " ] due to error number [ " & Cstr(Err.Number) & " ] with error description [ " & Cstr(Err.Description) & " ]")
	End If
	Set sWebEdit = Nothing
End Function





'WebObject Operations like exist,enable

Public Function fn_Web_UI_WebObject_Operations(sFunctionName,sAction,sWebObject,sPropertyValue)
	fn_Web_UI_WebObject_Operations = False
	Select Case sAction
		Case "exist"
			If sWebObject.exist(5) Then
				fn_Web_UI_WebObject_Operations = True
				Call fn_PrintnUpdateLogFile  ("FunctionLogPath","PASS : Successfully verified object [ "& sWebObject.ToString &" ] exist")
'				Call fn_CaptureImage(sWebObject)
'				Call fn_UpdateWord("PASS : Successfully verified object [ "& sWebObject.ToString &" ] exist")
			End If
		Case "enabled"
			If sWebObject.exist(5) Then
				fn_Web_UI_WebObject_Operations = True
				Call fn_PrintnUpdateLogFile  ("FunctionLogPath","PASS : Successfully verified object [ "& sWebObject.ToString &" ] exist")
'				Call fn_CaptureImage(sWebObject)
'				Call fn_UpdateWord("PASS : Successfully verified object [ "& sWebObject.ToString &" ] exist")
					If sWebObject.getROProperty(sPropertyValue) = 0 Then
						fn_Web_UI_WebObject_Operations = True
						Call fn_PrintnUpdateLogFile  ("FunctionLogPath","PASS : Successfully verified object [ "& sWebObject.ToString &" ] enabled")
'						Call fn_UpdateWord("PASS : Successfully verified object [ "& sWebObject.ToString &" ] enabled")
					End If
			End If
			
		Case Else
				
	End Select
	If Err.Number <> 0 Then
		fn_Web_UI_WebObject_Operations = False
		Call fn_PrintnUpdateLogFile  ("FunctionLogPath","<FAIL>: Fail to perform operation [ " & Cstr(sAction) & " ] due to error number [ " & Cstr(Err.Number) & " ] with error description [ " & Cstr(Err.Description) & " ]")
		Call fn_CaptureImage(sWebObject)
		Call fn_UpdateWord("<FAIL>: Fail to perform operation [ " & Cstr(sAction) & " ] due to error number [ " & Cstr(Err.Number) & " ] with error description [ " & Cstr(Err.Description) & " ]")
	End If
End Function