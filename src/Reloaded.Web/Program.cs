using System.Text.Json.Serialization;
using Microsoft.OpenApi.Models;
using NLog.Web;
using Reloaded.Core.Extensions;
using Reloaded.Web.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var services = builder.Services;
services.AddControllersWithViews();

services.ConfigureCoreServices(builder.Configuration);

services.AddHealthChecks().AddSqlServer(builder.Configuration.GetConnectionString("Reloaded"), name: "Reloaded DB");
services.AddHealthChecksUI().AddInMemoryStorage();

services.AddCors();

services.AddControllers().AddJsonOptions(opts =>
{
    opts.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
});

services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "reloaded", Version = "v1" });
    c.ConfigureSwaggerDocs();
});

builder.Host.UseNLog(new NLogAspNetCoreOptions { RemoveLoggerFactoryFilter = false });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
else
{
    app.UseDeveloperExceptionPage();

    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "reloaded v1"));
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.ConfigureHealtChecks();

app.Run();
