sTestdir = Environment.Value("TestDir")
Set oFso = CreateObject("Scripting.FileSystemObject")
Environment.Value("Images") = fn_FolderOperations("Images")
Environment.Value("Screenshots") = fn_FolderOperations("Screenshots")
Environment.Value("FunctionLog") = fn_FolderOperations("FunctionLog")
Environment.Value("EngineLog") = fn_FolderOperations("EngineLog")

Public Function fn_FolderOperations(sFolderName)
If oFso.FolderExists(sTestdir) Then
	If oFso.FolderExists(sTestdir & "\" & sFolderName) Then
		
	else
		oFso.CreateFolder(sTestdir & "\" & sFolderName)
		
	End If
Else
	oFso.CreateFolder(sTestdir)
	oFso.CreateFolder(sTestdir & "\" & sFolderName)
End If

fn_FolderOperations = sTestdir & "\" & sFolderName
End Function

Set fTxt = oFso.CreateTextFile(Environment.Value("FunctionLog") & "\" & Replace(Replace(Replace(now,"/","_"),":","_")," ","_") & ".txt",True)
fTxt.WriteLine "Hello mate"
fTxt.Close

Public Function fn_CreateLogFiles()
	Dim objFlog,objElog
	Set objFlog = oFso.CreateTextFile(Environment.Value("FunctionLog") & "\" & Replace(Replace(Replace(now,"/","_"),":","_")," ","_") & ".txt",True)
	Set objElog = oFso.CreateTextFile(Environment.Value("EngineLog") & "\" & Replace(Replace(Replace(now,"/","_"),":","_")," ","_") & ".txt",True)
	
End Function

Dim sobjPage,sWebEdit
Set sobjPage = Browser("Browser").Page("Page")
Set sWebEdit = sobjPage.WebEdit("firstName")
If fn_Web_UI_WebObjectOperations("Dummy_Test","exist",sWebEdit,"") Then
	msgbox "managed to work mates"
End If
Public Function fn_Web_UI_WebObjectOperations(sFunctionName,sAction,sWebObject,sPropertValue)
	fn_Web_UI_WebObjectOperations = False
	Select Case sAction
		Case "exist"
			If sWebObject.exist Then
				fn_Web_UI_WebObjectOperations = True
			End If
		Case "enabled"
			
		Case Else
				msgbox "No valid case"
	End Select
End Function


