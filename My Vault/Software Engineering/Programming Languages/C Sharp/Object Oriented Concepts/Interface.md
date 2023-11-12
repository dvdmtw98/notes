---
tags: [programming, csharp]
---

They have a similar to [structures](Structs.md) and [classes](CSharp%20Classes.md). [Methods](CSharp%20Methods.md) in Interfaces do not have a declaration (they are only defined similar to [Abstract](Abstract%20&%20Sealed%20Class.md) Methods)  
[Access Modifiers](Access%20Modifiers.md) are also not specified for the methods in a Interface  
Interfaces are used to design loosely coupled applications  
The methods and [Properties](Properties.md) that are declared in a interface when implemented in a class should be public ([Fields](Fields.md) cannot be declared in Interface)

[C# Interface](https://www.w3schools.com/cs/cs_interface.php)

````csharp
using System;
using System.Collections;
using System.Collections.Generic;

namespace WorkflowEngine
{
		public class CallWebService : IActivity
		{
			public void Execute()
			{
				Console.WriteLine(@"Call a web service provided by a third-party video encoding 
				service to tell them you have a video ready for encoding");
			}
		}

		public class UploadVideo : IActivity
		{
			public void Execute()
			{
				Console.WriteLine("Upload a video to a cloud storage");
			}
		}

		public interface IActivity
		{
			void Execute();
		}

		public class Workflow
		{
			private readonly IList<IActivity> _workflow;

			public Workflow()
			{
				_workflow = new List<IActivity>();
			}

			public void Add(IActivity activity)
			{
				_workflow.Add(activity);
			}

			public void Remove(IActivity activity)
			{
				_workflow.Remove(activity);
			}

			public IEnumerable<IActivity> GetActivities()
			{
				return _workflow;
			}
		}

		public class WorkflowEngine
		{
			public void Run(Workflow workflow)
			{
				foreach (IActivity activity in workflow.GetActivities())
				{
					activity.Execute();
				}
			}
		}

		class Program
		{
			static void Main(string[] args)
			{
				var workflow1 = new Workflow();
				workflow1.Add(new UploadVideo());
				workflow1.Add(new CallWebService());

				var engine = new WorkflowEngine();
				engine.Run(workflow1);
			}
		}
}
````
