
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
	objSelection.TypeParagraph
	Set objShape = objwrdDoc.Shapes
	With objSelection
		.EndKey 6,0
		
		.TypeParagraph
		.Font.Size = "12"
		.TypeText sStepName
		.TypeParagraph
		.EndKey 6,0
		.InlineShapes.AddPicture Environment.Value("ImagePath")
		.TypeParagraph
	End With
'	objShape.AddPicture Environment.Value("ImagePath")
'	objSelection.InsertParagraphAfter
	objWord.ActiveDocument.Save
	objWord.Quit
	Set objWord = Nothing	
End Function

