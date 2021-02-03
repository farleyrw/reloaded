USE [Reloaded]
GO

/****** Object: Table [dbo].[handloadResult] Script Date: 2/2/2021 10:32:16 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[handloadResult] (
    [handloadResultId]     INT          IDENTITY (1, 1) NOT NULL,
    [handloadId]           INT          NOT NULL,
    [accountId]            INT          NOT NULL,
    [date]                 DATETIME     NOT NULL,
    [yardage]              INT          NOT NULL,
    [totalShots]           INT          NOT NULL,
    [groupSizeIn]          FLOAT        NOT NULL,
    [weatherTemperatureF]  INT          NOT NULL,
    [weatherElevationFt]   INT          NOT NULL,
    [weatherWindSpeedMph]  INT          NOT NULL,
    [weatherWindDirection] INT          NOT NULL, 
    CONSTRAINT [PK_handloadResult] PRIMARY KEY ([handloadResultId]),
    CONSTRAINT [FK_handloadResult_ToHandload] FOREIGN KEY ([handloadId]) REFERENCES [handload]([handloadId])
);


