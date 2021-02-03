USE [Reloaded]
GO

/****** Object: Table [dbo].[Table] Script Date: 2/2/2021 10:12:37 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[handload] (
    [handloadId]         INT          IDENTITY (1, 1) NOT NULL,
    [accountId]          INT          NOT NULL,
    [firearmId]          INT          NOT NULL,
    [powderType]         INT          NOT NULL,
    [powderChargeGr]     FLOAT        NOT NULL,
    [seatingDepthIn]     FLOAT        NOT NULL,
    [primerBrand]        INT          NOT NULL,
    [primerType]         INT          NOT NULL,
    [brassBrand]         INT          NOT NULL,
    [brassCaliber]       INT          NOT NULL,
    [brassTimesFired]    INT          NOT NULL,
    [bulletBrand]        INT          NOT NULL,
    [bulletWeightGr]     INT          NOT NULL,
    [bulletConstruction] INT          NOT NULL,
    [bulletType]         INT          NOT NULL,
    [bulletBaseType]     INT          NOT NULL,
    [bulletCaliber]      INT          NOT NULL,
    
    CONSTRAINT [PK_handload] PRIMARY KEY ([handloadId]),
    CONSTRAINT [FK_handload_ToFirearm] FOREIGN KEY ([firearmId]) REFERENCES [firearm]([firearmId])
);


