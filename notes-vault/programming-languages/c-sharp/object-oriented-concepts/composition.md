---
title: Composition
tags:
  - programming
  - csharp
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

* It is a type of relation that allows one [[csharp-classes|Class]] to contain the other (When the parent object is deleted the child also looses its status)
* It establishes a "Has-a" type of relation between the classes
* It is used to design loosely coupled applications (Loose Coupling is ideal and preferred over [[csharp-inheritance|Inheritence]])

````csharp
namespace Composition
{
		public class Logger
    {
        public void Log(string message)
        {
            Console.WriteLine(message);
        }
    }

		public class DbMigrator
    {
        private readonly Logger _logger;

        public DbMigrator(Logger logger)
        {
            _logger = logger;
        }

        public void Migrate()
        {
            _logger.Log("Data Migration has started ...");
        }
    }

		public class Installer
    {
        private readonly Logger _logger;

        public Installer(Logger logger)
        {
            _logger = logger;
        }

        public void Install()
        {
            _logger.Log("Installation has started ...");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var migrator = new DbMigrator(new Logger());
            var installer = new Installer(new Logger());

            migrator.Migrate();
            installer.Install();
        }
    }
}
````
