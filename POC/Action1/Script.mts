
'************************************************************************
'Folder creations
Environment.Value("Images") = fn_FolderOperations("Images")
Environment.Value("Screenshots") = fn_FolderOperations("Screenshots")
Environment.Value("FunctionLog") = fn_FolderOperations("FunctionLog")
Environment.Value("EngineLog") = fn_FolderOperations("EngineLog")
'*************************************************************************

'********************************************************************************************
'class creating and using
'Set ClassLog = triggerClass
'ClassLog.fn_CreateLogFile "FunctionLog","FunctionLogPath"
'ClassLog.fn_CreateLogFile "EngineLog","EngineLogPath"
'ClassLog.fn_PrintnUpdateLogFile  "FunctionLogPath","Step1 of function log is successfull"
'ClassLog.fn_PrintnUpdateLogFile  "EngineLogPath","Step1 of engine log is successfull"
'********************************************************************************************
Call fn_CreateLogFile("FunctionLog","FunctionLogPath")
Call fn_CreateLogFile("EngineLog","EngineLogPath")
Call fn_PrintnUpdateLogFile("FunctionLogPath","Step1 of function log is successfull")
'Action on Webapplication
SystemUtil.Run "iexplore.exe","http://newtours.demoaut.com/mercurywelcome.php"
Dim sobjPage,sWebEdit
Set sobjPage = Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours")



Call fn_Web_UI_WebEdit_Opearations("WebEdit_Set","Set",sobjPage,"sg8412","userName")

Call fn_Web_UI_WebEdit_Opearations("WebEdit_Set","SetSecure",sobjPage,"594287779be76ea082631d7c53a20de41da4c8f38986f0f0","password")
Call fn_Web_UI_Image_Operations("Image_Click","Click",sobjPage,"LogIn")

 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf6.xml_;_