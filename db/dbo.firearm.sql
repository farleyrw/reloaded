USE [Reloaded]
GO

/****** Object: Table [dbo].[firearm] Script Date: 2/1/2021 11:47:10 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[firearm] (
    [firearmId]    INT            IDENTITY (1, 1) NOT NULL,
    [accountId]    INT            NOT NULL,
    [model]        NVARCHAR (100) NOT NULL,
    [brand]        NVARCHAR (100) NOT NULL,
    [type]         INT            NOT NULL,
    [chamberType]  INT            NOT NULL,
    [barrelLength] DECIMAL (18)   NOT NULL
);


