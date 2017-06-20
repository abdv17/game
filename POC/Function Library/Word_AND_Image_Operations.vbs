
'Code to capture screenshot of application
'We have to pass the 'objPage' to the function
Public Function fn_CaptureImage(objPage)
	Environment.Value("ImagePath") = Environment.Value("Images") & "\" & Replace(Replace(Replace(now,":","_"),"/","_")," ","_") & ".png"
	objPage.CaptureBitmap Environment.Value("ImagePath"),True
End Function





Public Function fn_CreateWordDoc()
	Set objWord = CreateObject("Word.Application")
	objWord.Visible = False
	Set objwrdDoc = objWord.Documents.Add
	Environment.Value("ScreenshotPath") = Environment.Value("Screenshots") & "\" & Environment.Value("TCName") & ".doc"
	objWord.ActiveDocument.SaveAs Environment.Value("ScreenshotPath")
	objWord.Quit
	Set objWord = Nothing
End Function



'Here code for word document>>>Screenshot capturing
Public Function fn_UpdateWord(sStepName)
	Set objWord = CreateObject("Word.Application")
	objWord.Visible = False
	Set objwrdDoc = objWord.Documents.Open (Environment.Value("ScreenshotPath"))
	Set objSelection = objWord.Selection
	Set objShape = objwrdDoc.Shapes
	With objSelection
		.Font.Size = "18"
		.TypeText sStepName
		.TypeParagraph()
		.Font.Size = "14"
		.TypeParagraph()
		
		.TypeParagraph()		
	End With
	objShape.AddPicture Environment.Value("ImagePath")
	objSelection.TypeParagraph()
	objSelection.TypeParagraph()
	objWord.ActiveDocument.Save
	objWord.Quit
	Set objWord = Nothing	
End Function