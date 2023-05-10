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

GO
