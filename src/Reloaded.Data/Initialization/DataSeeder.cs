using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;
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

                var firearms = GetData<Firearm>();

                // Map to account by index
                firearms.ForEach(x => x.AccountId = accounts[x.AccountId].AccountId);

                this.firearmContext.Firearms.AddRange(firearms);

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

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            options.Converters.Add(new JsonStringEnumConverter());

            return JsonSerializer.Deserialize<List<T>>(filePath, options);
        }
    }
}
