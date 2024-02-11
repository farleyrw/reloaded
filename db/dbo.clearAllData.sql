USE [Reloaded]
GO

CREATE OR ALTER PROCEDURE dbo.clearAllData
AS

SET NOCOUNT ON;

DELETE FROM dbo.reloadFirearmMap
DELETE FROM dbo.reloadResult
DELETE FROM dbo.reload
DELETE FROM dbo.firearm
DELETE FROM dbo.account

DBCC CHECKIDENT ('[reloadFirearmMap]', RESEED, 0);
DBCC CHECKIDENT ('[reloadResult]', RESEED, 0);
DBCC CHECKIDENT ('[reload]', RESEED, 0);
DBCC CHECKIDENT ('[firearm]', RESEED, 0);
DBCC CHECKIDENT ('[account]', RESEED, 0);

GO
