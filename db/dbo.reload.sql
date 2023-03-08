USE [Reloaded]
GO

/****** Object: Table [dbo].[reload] Script Date: 2/2/2021 10:12:37 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[reload] (
    [reloadId]           INT          IDENTITY (1, 1) NOT NULL,
    [accountId]          INT          NOT NULL,
	[nickname]           NVARCHAR (50) NULL,
	[notes]              NVARCHAR (500) NULL,
	[overallLengthIn]    FLOAT        NOT NULL,
    [powderType]         INT          NOT NULL,
    [powderChargeGr]     FLOAT        NOT NULL,
    [seatingDepthIn]     FLOAT        NOT NULL,
    [primerBrand]        INT          NOT NULL,
    [primerType]         INT          NOT NULL,
    [brassBrand]         INT          NOT NULL,
    [brassCartridge]     INT          NOT NULL,
    [brassTimesFired]    INT          NOT NULL,
    [brassIsNew]         BIT          NOT NULL,
    [bulletBrand]        INT          NOT NULL,
    [bulletWeightGr]     INT          NOT NULL,
    [bulletConstruction] INT          NOT NULL,
    [bulletTipType]      INT          NOT NULL,
    [bulletBaseType]     INT          NOT NULL,
    [bulletCaliber]      INT          NOT NULL,
	[createdOn]          DATETIME     NOT NULL,
	[lastUpdatedOn]      DATETIME     NOT NULL,
    CONSTRAINT [PK_reload] PRIMARY KEY ([reloadId]),
    CONSTRAINT [FK_reload_ToAccount] FOREIGN KEY ([accountId]) REFERENCES [account]([accountId])
);


