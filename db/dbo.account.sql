USE [Reloaded]
GO

/****** Object: Table [dbo].[account] Script Date: 3/7/2023 11:07:10 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[account] (
    [accountId]    INT            IDENTITY (1, 1) NOT NULL,
	[name]	       NVARCHAR (100) NOT NULL,
	[createdOn]    DATETIME       NOT NULL,
	[lastUpdatedOn] DATETIME      NOT NULL,
    CONSTRAINT [PK_account] PRIMARY KEY ([accountId])
);


