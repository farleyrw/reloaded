USE [Reloaded]
GO

/****** Object: Table [dbo].[reloadResult] Script Date: 2/2/2021 10:32:16 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[reloadResult] (
    [reloadResultId]       INT          IDENTITY (1, 1) NOT NULL,
    [reloadId]             INT          NOT NULL,
    [firearmId]            INT          NOT NULL,
    [accountId]            INT          NOT NULL,
    [date]                 DATETIME     NOT NULL,
    [totalShots]           INT          NOT NULL,
    [distanceYds]          INT          NOT NULL,
    [groupSizeIn]          FLOAT        NOT NULL,
    [velocityMph]          INT              NULL,
    [weatherTemperatureF]  INT              NULL,
    [weatherElevationFt]   INT              NULL,
    [weatherWindSpeedMph]  INT              NULL,
	[createdOn]            DATETIME     NOT NULL,
	[lastUpdatedOn]        DATETIME     NOT NULL,
    CONSTRAINT [PK_reloadResult] PRIMARY KEY ([reloadResultId]),
    CONSTRAINT [FK_reloadResult_ToReload] FOREIGN KEY ([reloadId]) REFERENCES [reload]([reloadId]),
    CONSTRAINT [FK_reloadResult_ToFirearm] FOREIGN KEY ([firearmId]) REFERENCES [firearm]([firearmId]),
    CONSTRAINT [FK_reloadResult_ToAccount] FOREIGN KEY ([accountId]) REFERENCES [account]([accountId])
);


