### Table of Content

* [Action Result](Action%20Result.md)
* [Entity Framework](Entity%20Framework.md)

---

### MVC Concept

Model : Application data and behavior in terms of its problem domain and independent of the UI  
View : The HTML markup that we show to the user  
Controller : Responsible to handling an HTTP request  
Router : Component which is response for selecting the appropriate Controller based on the URL

---

### Points to Remember

In ASP.NET the methods present in a Controller class is called as **Actions**  
`appsettings.json` : Stores secrets and connection string for our application  
`launchSettings.json` : Different profiles for running/ starting the application  
`Views/Shared` : Used to store Partial Views  
TempData : Data that will be stored for a single request before its cleared

````powershell
# Add Package to Project
dotnet add package <package-name>

# Enable Migration Support
dotnet tool install --global dotnet-ef
dotnet ef migrations add <migration-name>

# Apply Migration on DB
dotnet ef database update
````

---

### Best Practices

By convention (default configuration) the name of the Controller should be the name of the folder for storing the Views  
e.g. `HomeController.cs` : `Views/Home/Index.cshtml`
