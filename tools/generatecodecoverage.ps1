
split-path -parent $psISE.CurrentFile.Fullpath | Set-Location

cd..

Remove-Item .\coveragereport -Recurse -ErrorAction Continue

dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=cobertura

dotnet tool install -g dotnet-reportgenerator-globaltool

reportgenerator "-reports:tests\**\coverage.cobertura.xml" "-targetdir:coveragereport" -reporttypes:Html

Invoke-Item .\coveragereport\index.html