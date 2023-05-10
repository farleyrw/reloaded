using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using Microsoft.Extensions.Configuration;
using Reloaded.Common.Enums;
using Reloaded.Common.Enums.Firearms;
using Reloaded.Common.Models;
using Reloaded.Data.Contexts;

namespace Reloaded.Data.Initialization
{
    public class DataSeeder
    {
        private readonly FirearmContext firearmContext;
        private readonly ReloadContext reloadContext;
        private readonly UserAccountContext userAccountContext;
        private readonly IConfiguration configuration;

        public DataSeeder(
            FirearmContext firearmContext, 
            ReloadContext reloadContext, 
            UserAccountContext userAccountContext,
            IConfiguration configuration)
        {
            this.firearmContext = firearmContext;
            this.reloadContext = reloadContext;
            this.userAccountContext = userAccountContext;
            this.configuration = configuration;
        }

        public void Seed()
        {
            // TODO: determine how to map, by index using $1
            if (!this.userAccountContext.UserAccounts.Any())
            {
                var accounts = GetData<UserAccount>();

                this.userAccountContext.UserAccounts.AddRange(accounts);

                this.userAccountContext.SaveChanges();
            }

            if (!this.firearmContext.Firearms.Any())
            {
                var accounts = this.userAccountContext.UserAccounts.ToList();

                this.firearmContext.Firearms.AddRange(
                    new Firearm
                    {
                        Nickname = "Sharts",
                        Notes = "Super awesome scope",
                        Model = "700 SPS",
                        Brand = "Remington",
                        BarrelLength = 22,
                        BarrelTwist = 8,
                        Type = FirearmType.Rifle,
                        Chamber = Cartridge.TwoTwoThreeRemington,
                        AccountId = accounts.FirstOrDefault().AccountId
                    },
                    new Firearm
                    {
                        Nickname = "Turds",
                        Notes = "A truck gun",
                        Model = "Model 70",
                        Brand = "Winchester",
                        BarrelLength = 20,
                        BarrelTwist = 10,
                        Type = FirearmType.Rifle,
                        Chamber = Cartridge.ThirtyOSixSpringfield,
                        AccountId = accounts.FirstOrDefault().AccountId
                    },
                    new Firearm
                    {
                        Nickname = "Boof",
                        Notes = "A boofer",
                        Model = "AR 15",
                        Brand = "Custom",
                        BarrelLength = 16,
                        BarrelTwist = 8,
                        Type = FirearmType.Rifle,
                        Chamber = Cartridge.TwoTwoThreeRemington,
                        AccountId = accounts.LastOrDefault().AccountId
                    });

                this.firearmContext.SaveChanges();
            }

            if (!this.reloadContext.Reloads.Any())
            {

                this.reloadContext.SaveChanges();
            }
        }

        public string GetFileContents<T>() where T : class
        {
            string assemblyLocation = Assembly.GetAssembly(typeof(DataSeeder)).Location.Split("bin")[0];
            string fileLocation = $"data/{typeof(T).Name}.json";
            string filePath = Path.Combine(Path.GetDirectoryName(assemblyLocation), fileLocation);

            return File.ReadAllText(filePath);
        }

        public List<T> GetData<T>() where T : class
        {
            string filePath = GetFileContents<T>();

            return JsonSerializer.Deserialize<List<T>>(filePath, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
        }
    }
}
