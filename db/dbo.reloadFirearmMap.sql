USE [Reloaded]
GO

/****** Object: Table [dbo].[reloadFirearmMap] Script Date: 3/7/2023 11:32:16 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[reloadFirearmMap] (
    [reloadId]             INT          NOT NULL,
    [firearmId]            INT          NOT NULL,
    [accountId]            INT          NOT NULL,
	[createdOn]            DATETIME     NOT NULL,
	[lastUpdatedOn]        DATETIME     NOT NULL,
	PRIMARY KEY (reloadId, firearmId),
    CONSTRAINT [FK_reloadFirearmMap_ToReload] FOREIGN KEY ([reloadId]) REFERENCES [reload]([reloadId]),
    CONSTRAINT [FK_reloadFirearmMap_ToFirearm] FOREIGN KEY ([firearmId]) REFERENCES [firearm]([firearmId]),
    CONSTRAINT [FK_reloadFirearmMap_ToAccount] FOREIGN KEY ([accountId]) REFERENCES [account]([accountId])
);


