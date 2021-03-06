USE [master]
GO
/****** Object:  Database [AMZIExamen1]    Script Date: 11/29/2020 3:02:20 PM ******/
CREATE DATABASE [AMZIExamen1]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'AMZIExamen1', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\AMZIExamen1.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'AMZIExamen1_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\AMZIExamen1_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [AMZIExamen1] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [AMZIExamen1].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [AMZIExamen1] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [AMZIExamen1] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [AMZIExamen1] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [AMZIExamen1] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [AMZIExamen1] SET ARITHABORT OFF 
GO
ALTER DATABASE [AMZIExamen1] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [AMZIExamen1] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [AMZIExamen1] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [AMZIExamen1] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [AMZIExamen1] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [AMZIExamen1] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [AMZIExamen1] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [AMZIExamen1] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [AMZIExamen1] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [AMZIExamen1] SET  DISABLE_BROKER 
GO
ALTER DATABASE [AMZIExamen1] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [AMZIExamen1] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [AMZIExamen1] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [AMZIExamen1] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [AMZIExamen1] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [AMZIExamen1] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [AMZIExamen1] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [AMZIExamen1] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [AMZIExamen1] SET  MULTI_USER 
GO
ALTER DATABASE [AMZIExamen1] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [AMZIExamen1] SET DB_CHAINING OFF 
GO
ALTER DATABASE [AMZIExamen1] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [AMZIExamen1] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [AMZIExamen1] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [AMZIExamen1] SET QUERY_STORE = OFF
GO
USE [AMZIExamen1]
GO
/****** Object:  Table [dbo].[cliente]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cliente](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](255) NULL,
	[limiteCredito] [float] NULL,
 CONSTRAINT [PK_cliente] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[producto]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[producto](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](255) NULL,
	[categoriaId] [int] NULL,
 CONSTRAINT [PK_producto] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[venta]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[venta](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[clienteId] [int] NULL,
	[fecha] [date] NULL,
 CONSTRAINT [PK_venta] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ordenProductos]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ordenProductos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ordenId] [int] NULL,
	[productoId] [int] NULL,
	[cantidad] [int] NULL,
	[costo] [float] NULL,
	[precioSugerido] [float] NULL,
 CONSTRAINT [PK_ordenProductos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[inventario]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[inventario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[productoId] [int] NULL,
	[cantidad] [int] NULL,
	[precio] [float] NULL,
 CONSTRAINT [PK_inventario] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ordenProveedores]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ordenProveedores](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[proveedorId] [int] NULL,
	[fechaOrden] [date] NULL,
	[fechaEntrega] [date] NULL,
	[estado] [bit] NULL,
	[cobroAdicional] [float] NULL,
 CONSTRAINT [PK_ordenProveedores] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[proveedor]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proveedor](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](255) NULL,
	[observacion] [varchar](255) NULL,
 CONSTRAINT [PK_proveedor] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ventaDetalle]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ventaDetalle](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ventaId] [int] NULL,
	[productoId] [int] NULL,
	[cantidad] [int] NULL,
 CONSTRAINT [PK_ventaDetalle] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[transaccionesPorDia]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[transaccionesPorDia]
AS
select  'VENTA' TRANSACCION,v.id, c.nombre, v.fecha, pd.nombre producto, i.precio,vd.cantidad
from venta v
inner join cliente c on v.clienteId = c.id
inner join ventaDetalle vd on  vd.ventaId = v.id
inner join inventario i on vd.productoId = i.id
inner join producto pd on pd.id = i.id
group by v.id, c.nombre,v.fecha, pd.nombre,i.precio,vd.cantidad
union

select 'ORDENPROVEEDOR' TRANSACCION, op.id, p.nombre, op.fechaOrden,p.nombre, opd.costo, opd.cantidad from ordenProveedores op
inner join proveedor p on op.proveedorId = p.id
inner join ordenProductos opd on op.id = opd.ordenId
inner join producto pd on pd.id = opd.productoId
group by op.id, p.nombre, op.fechaEntrega, op.fechaOrden, p.nombre, opd.costo, opd.cantidad
GO
/****** Object:  Table [dbo].[categoria]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categoria](
	[id] [int] NOT NULL,
	[nombre] [varchar](255) NULL,
 CONSTRAINT [PK_categoria] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[obtenerVentasPorCategorias]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[obtenerVentasPorCategorias]
AS
SELECT c.nombre, COUNT(v.id) AS ventas
FROM     dbo.venta AS v INNER JOIN
                  dbo.ventaDetalle AS vd ON v.id = vd.ventaId INNER JOIN
                  dbo.producto AS p ON vd.productoId = p.id INNER JOIN
                  dbo.categoria AS c ON c.id = p.categoriaId
GROUP BY c.nombre
GO
/****** Object:  View [dbo].[obtenerProductosConPrecioDefinidoPorProveedor]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[obtenerProductosConPrecioDefinidoPorProveedor]
AS
SELECT p.nombre, op.costo, i.precio
FROM     dbo.producto AS p INNER JOIN
                  dbo.ordenProductos AS op ON op.productoId = p.id INNER JOIN
                  dbo.inventario AS i ON i.productoId = p.id AND op.costo = i.precio
GO
/****** Object:  View [dbo].[obtenerProductosConPrecio30]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[obtenerProductosConPrecio30]
AS
SELECT p.nombre, op.costo, i.precio, op.costo * 0.30 AS precioPORCENTAJE30
FROM     dbo.producto AS p INNER JOIN
                  dbo.ordenProductos AS op ON op.productoId = p.id INNER JOIN
                  dbo.inventario AS i ON i.productoId = p.id
GO
/****** Object:  Table [dbo].[credito]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[credito](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[clienteId] [int] NULL,
	[ventaId] [int] NULL,
	[estado] [bit] NULL,
 CONSTRAINT [PK_credito] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[abono]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[abono](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [date] NULL,
	[creditoId] [int] NULL,
	[monto] [float] NULL,
 CONSTRAINT [PK_abono] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[clientesFrecuentesPagadoresYDeudores]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[clientesFrecuentesPagadoresYDeudores]
AS
SELECT c.nombre, c.limiteCredito, ab.fecha AS FECHADEPAGO, cd.ventaId, CASE WHEN cd.estado = 1 AND ab.id IS NULL THEN 'ALERTA DE NO PAGAR' WHEN cd.estado = 1 AND ab.id IS NOT NULL 
                  THEN 'TODAVIA DEBE' WHEN cd.ventaId IS NULL THEN 'TODAVIA NO COMPRA' ELSE NULL END AS ALERTA, CASE WHEN cd.estado = 0 THEN 'YA PAGO' WHEN cd.estado = 1 AND ab.id IS NOT NULL 
                  THEN 'PAGADOR PRECUENTE' ELSE 'NO DEBE' END AS TIPO_PAGADOR
FROM     dbo.cliente AS c LEFT OUTER JOIN
                  dbo.credito AS cd ON cd.clienteId = c.id LEFT OUTER JOIN
                  dbo.abono AS ab ON ab.creditoId = c.id
GROUP BY c.nombre, c.limiteCredito, ab.fecha, cd.estado, ab.id, cd.ventaId
GO
/****** Object:  View [dbo].[obtenerGastosCuentaPersonal]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[obtenerGastosCuentaPersonal]
AS
SELECT TOP (100) PERCENT p.nombre, MAX(vd.cantidad) AS cantidad, SUM(i.precio) AS monto, v.fecha
FROM     dbo.ventaDetalle AS vd INNER JOIN
                  dbo.venta AS v ON v.id = vd.ventaId INNER JOIN
                  dbo.cliente AS c ON c.id = v.clienteId INNER JOIN
                  dbo.producto AS p ON p.id = vd.productoId INNER JOIN
                  dbo.inventario AS i ON i.productoId = p.id
WHERE  (c.id = 1)
GROUP BY p.nombre, v.fecha
ORDER BY v.fecha
GO
SET IDENTITY_INSERT [dbo].[abono] ON 

INSERT [dbo].[abono] ([id], [fecha], [creditoId], [monto]) VALUES (1, CAST(N'2020-11-30' AS Date), 1, 2500)
INSERT [dbo].[abono] ([id], [fecha], [creditoId], [monto]) VALUES (2, CAST(N'2020-12-01' AS Date), 2, 1)
INSERT [dbo].[abono] ([id], [fecha], [creditoId], [monto]) VALUES (3, CAST(N'2020-12-01' AS Date), 1, 200)
SET IDENTITY_INSERT [dbo].[abono] OFF
GO
INSERT [dbo].[categoria] ([id], [nombre]) VALUES (1, N'Carnes')
INSERT [dbo].[categoria] ([id], [nombre]) VALUES (2, N'Lacteos')
INSERT [dbo].[categoria] ([id], [nombre]) VALUES (3, N'Granos')
GO
SET IDENTITY_INSERT [dbo].[cliente] ON 

INSERT [dbo].[cliente] ([id], [nombre], [limiteCredito]) VALUES (1, N'Maai', 6500)
INSERT [dbo].[cliente] ([id], [nombre], [limiteCredito]) VALUES (2, N'Juan', 50)
INSERT [dbo].[cliente] ([id], [nombre], [limiteCredito]) VALUES (3, N'Lucy', 67000)
INSERT [dbo].[cliente] ([id], [nombre], [limiteCredito]) VALUES (4, N'Exodo', 2065)
INSERT [dbo].[cliente] ([id], [nombre], [limiteCredito]) VALUES (5, N'Enoc', 560.24)
SET IDENTITY_INSERT [dbo].[cliente] OFF
GO
SET IDENTITY_INSERT [dbo].[credito] ON 

INSERT [dbo].[credito] ([id], [clienteId], [ventaId], [estado]) VALUES (1, 1, 1, 1)
INSERT [dbo].[credito] ([id], [clienteId], [ventaId], [estado]) VALUES (2, 2, 2, 0)
INSERT [dbo].[credito] ([id], [clienteId], [ventaId], [estado]) VALUES (3, 3, 3, 1)
INSERT [dbo].[credito] ([id], [clienteId], [ventaId], [estado]) VALUES (4, 1, 4, 1)
SET IDENTITY_INSERT [dbo].[credito] OFF
GO
SET IDENTITY_INSERT [dbo].[inventario] ON 

INSERT [dbo].[inventario] ([id], [productoId], [cantidad], [precio]) VALUES (1, 1, 149, 25062)
INSERT [dbo].[inventario] ([id], [productoId], [cantidad], [precio]) VALUES (2, 2, 99, 62)
INSERT [dbo].[inventario] ([id], [productoId], [cantidad], [precio]) VALUES (3, 3, 49, 56)
INSERT [dbo].[inventario] ([id], [productoId], [cantidad], [precio]) VALUES (4, 4, 69, 92)
INSERT [dbo].[inventario] ([id], [productoId], [cantidad], [precio]) VALUES (5, 5, 43, 99)
INSERT [dbo].[inventario] ([id], [productoId], [cantidad], [precio]) VALUES (6, 6, 939, 423)
SET IDENTITY_INSERT [dbo].[inventario] OFF
GO
SET IDENTITY_INSERT [dbo].[ordenProductos] ON 

INSERT [dbo].[ordenProductos] ([id], [ordenId], [productoId], [cantidad], [costo], [precioSugerido]) VALUES (1, 1, 1, 25, 25062, 20)
INSERT [dbo].[ordenProductos] ([id], [ordenId], [productoId], [cantidad], [costo], [precioSugerido]) VALUES (2, 2, 5, 93, 25923, 39)
INSERT [dbo].[ordenProductos] ([id], [ordenId], [productoId], [cantidad], [costo], [precioSugerido]) VALUES (3, 3, 2, 429, 92394, 9)
INSERT [dbo].[ordenProductos] ([id], [ordenId], [productoId], [cantidad], [costo], [precioSugerido]) VALUES (4, 4, 6, 22, 239, 9)
SET IDENTITY_INSERT [dbo].[ordenProductos] OFF
GO
SET IDENTITY_INSERT [dbo].[ordenProveedores] ON 

INSERT [dbo].[ordenProveedores] ([id], [proveedorId], [fechaOrden], [fechaEntrega], [estado], [cobroAdicional]) VALUES (1, 1, CAST(N'2020-11-30' AS Date), CAST(N'2020-12-06' AS Date), 0, 250)
INSERT [dbo].[ordenProveedores] ([id], [proveedorId], [fechaOrden], [fechaEntrega], [estado], [cobroAdicional]) VALUES (2, 2, CAST(N'2020-11-30' AS Date), CAST(N'2020-12-07' AS Date), 1, 250)
INSERT [dbo].[ordenProveedores] ([id], [proveedorId], [fechaOrden], [fechaEntrega], [estado], [cobroAdicional]) VALUES (3, 3, CAST(N'2020-11-30' AS Date), CAST(N'2020-11-30' AS Date), 0, 0)
INSERT [dbo].[ordenProveedores] ([id], [proveedorId], [fechaOrden], [fechaEntrega], [estado], [cobroAdicional]) VALUES (4, 4, CAST(N'2020-11-30' AS Date), CAST(N'2020-11-30' AS Date), 0, 0)
INSERT [dbo].[ordenProveedores] ([id], [proveedorId], [fechaOrden], [fechaEntrega], [estado], [cobroAdicional]) VALUES (5, 4, CAST(N'2020-11-25' AS Date), CAST(N'2020-11-25' AS Date), 0, 20)
INSERT [dbo].[ordenProveedores] ([id], [proveedorId], [fechaOrden], [fechaEntrega], [estado], [cobroAdicional]) VALUES (6, 4, CAST(N'2020-11-26' AS Date), CAST(N'2020-11-26' AS Date), 0, 200)
SET IDENTITY_INSERT [dbo].[ordenProveedores] OFF
GO
SET IDENTITY_INSERT [dbo].[producto] ON 

INSERT [dbo].[producto] ([id], [nombre], [categoriaId]) VALUES (1, N'PanBlanco', 3)
INSERT [dbo].[producto] ([id], [nombre], [categoriaId]) VALUES (2, N'Queso', 2)
INSERT [dbo].[producto] ([id], [nombre], [categoriaId]) VALUES (3, N'Jamon', 1)
INSERT [dbo].[producto] ([id], [nombre], [categoriaId]) VALUES (4, N'Arroz', 3)
INSERT [dbo].[producto] ([id], [nombre], [categoriaId]) VALUES (5, N'Leche', 2)
INSERT [dbo].[producto] ([id], [nombre], [categoriaId]) VALUES (6, N'Pollo', 1)
SET IDENTITY_INSERT [dbo].[producto] OFF
GO
SET IDENTITY_INSERT [dbo].[proveedor] ON 

INSERT [dbo].[proveedor] ([id], [nombre], [observacion]) VALUES (1, N'Zupercito', N'muy caro')
INSERT [dbo].[proveedor] ([id], [nombre], [observacion]) VALUES (2, N'Colonial', N'llega tarde')
INSERT [dbo].[proveedor] ([id], [nombre], [observacion]) VALUES (3, N'La bodega', N'apesta')
INSERT [dbo].[proveedor] ([id], [nombre], [observacion]) VALUES (4, N'Los Andes', N'carisimo')
SET IDENTITY_INSERT [dbo].[proveedor] OFF
GO
SET IDENTITY_INSERT [dbo].[venta] ON 

INSERT [dbo].[venta] ([id], [clienteId], [fecha]) VALUES (1, 1, CAST(N'2020-12-12' AS Date))
INSERT [dbo].[venta] ([id], [clienteId], [fecha]) VALUES (2, 2, CAST(N'2019-05-26' AS Date))
INSERT [dbo].[venta] ([id], [clienteId], [fecha]) VALUES (3, 3, CAST(N'2020-11-30' AS Date))
INSERT [dbo].[venta] ([id], [clienteId], [fecha]) VALUES (4, 1, CAST(N'2023-11-23' AS Date))
SET IDENTITY_INSERT [dbo].[venta] OFF
GO
SET IDENTITY_INSERT [dbo].[ventaDetalle] ON 

INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (1, 1, 1, 2)
INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (2, 1, 2, 5)
INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (3, 1, 3, 5)
INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (4, 2, 5, 2)
INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (5, 2, 4, 8)
INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (8, 3, 4, 4)
INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (10, 3, 1, 5)
INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (11, 3, 2, 5)
INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (15, 4, 2, 52)
INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (16, 4, 5, 23)
INSERT [dbo].[ventaDetalle] ([id], [ventaId], [productoId], [cantidad]) VALUES (17, 4, 1, 5)
SET IDENTITY_INSERT [dbo].[ventaDetalle] OFF
GO
ALTER TABLE [dbo].[abono]  WITH CHECK ADD  CONSTRAINT [FK_abono_credito] FOREIGN KEY([creditoId])
REFERENCES [dbo].[credito] ([id])
GO
ALTER TABLE [dbo].[abono] CHECK CONSTRAINT [FK_abono_credito]
GO
ALTER TABLE [dbo].[credito]  WITH CHECK ADD  CONSTRAINT [FK_credito_cliente] FOREIGN KEY([clienteId])
REFERENCES [dbo].[cliente] ([id])
GO
ALTER TABLE [dbo].[credito] CHECK CONSTRAINT [FK_credito_cliente]
GO
ALTER TABLE [dbo].[credito]  WITH CHECK ADD  CONSTRAINT [FK_credito_venta] FOREIGN KEY([ventaId])
REFERENCES [dbo].[venta] ([id])
GO
ALTER TABLE [dbo].[credito] CHECK CONSTRAINT [FK_credito_venta]
GO
ALTER TABLE [dbo].[inventario]  WITH CHECK ADD  CONSTRAINT [FK_inventario_producto] FOREIGN KEY([productoId])
REFERENCES [dbo].[producto] ([id])
GO
ALTER TABLE [dbo].[inventario] CHECK CONSTRAINT [FK_inventario_producto]
GO
ALTER TABLE [dbo].[ordenProductos]  WITH CHECK ADD  CONSTRAINT [FK_ordenProductos_ordenProveedores] FOREIGN KEY([ordenId])
REFERENCES [dbo].[ordenProveedores] ([id])
GO
ALTER TABLE [dbo].[ordenProductos] CHECK CONSTRAINT [FK_ordenProductos_ordenProveedores]
GO
ALTER TABLE [dbo].[ordenProductos]  WITH CHECK ADD  CONSTRAINT [FK_ordenProductos_producto] FOREIGN KEY([productoId])
REFERENCES [dbo].[producto] ([id])
GO
ALTER TABLE [dbo].[ordenProductos] CHECK CONSTRAINT [FK_ordenProductos_producto]
GO
ALTER TABLE [dbo].[ordenProveedores]  WITH CHECK ADD  CONSTRAINT [FK_ordenProveedores_proveedor] FOREIGN KEY([proveedorId])
REFERENCES [dbo].[proveedor] ([id])
GO
ALTER TABLE [dbo].[ordenProveedores] CHECK CONSTRAINT [FK_ordenProveedores_proveedor]
GO
ALTER TABLE [dbo].[producto]  WITH CHECK ADD  CONSTRAINT [FK_producto_categoria] FOREIGN KEY([categoriaId])
REFERENCES [dbo].[categoria] ([id])
GO
ALTER TABLE [dbo].[producto] CHECK CONSTRAINT [FK_producto_categoria]
GO
ALTER TABLE [dbo].[venta]  WITH CHECK ADD  CONSTRAINT [FK_venta_cliente] FOREIGN KEY([clienteId])
REFERENCES [dbo].[cliente] ([id])
GO
ALTER TABLE [dbo].[venta] CHECK CONSTRAINT [FK_venta_cliente]
GO
ALTER TABLE [dbo].[ventaDetalle]  WITH CHECK ADD  CONSTRAINT [FK_ventaDetalle_producto] FOREIGN KEY([productoId])
REFERENCES [dbo].[producto] ([id])
GO
ALTER TABLE [dbo].[ventaDetalle] CHECK CONSTRAINT [FK_ventaDetalle_producto]
GO
ALTER TABLE [dbo].[ventaDetalle]  WITH CHECK ADD  CONSTRAINT [FK_ventaDetalle_venta] FOREIGN KEY([ventaId])
REFERENCES [dbo].[venta] ([id])
GO
ALTER TABLE [dbo].[ventaDetalle] CHECK CONSTRAINT [FK_ventaDetalle_venta]
GO
/****** Object:  StoredProcedure [dbo].[clasificarProveedores]    Script Date: 11/29/2020 3:02:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[clasificarProveedores] @fechaInicio date, @fechaFinal date
AS
DECLARE @ventasPorProveedor TABLE (Proveedor varchar(255), Ventas int)
DECLARE @ordenesPorProveedor TABLE (Proveedor varchar(255), Ordenes int)

insert into @ordenesPorProveedor
select pvd.nombre,
count(op.proveedorId) Ordenes
from proveedor pvd
inner join ordenProveedores op on pvd.id = op.proveedorId
where op.fechaOrden between @fechaInicio and @fechaFinal
group by pvd.nombre

insert into @ventasPorProveedor
select pv.nombre, count(vd.id) Ventas from producto p 
inner join ordenProductos op on op.productoId = p.id
inner join ordenProveedores opv on op.ordenId = opv.id
inner join proveedor pv on pv.id = opv.proveedorId
inner join ventaDetalle vd on vd.productoId = p.id
group by pv.nombre

select p.nombre, max(opp.Ordenes) ordenes, max(vpp.Ventas ) ventas	from proveedor p
inner join @ordenesPorProveedor opp on opp.Proveedor = p.nombre
inner join @ventasPorProveedor vpp on opp.Proveedor = p.nombre
group by p.nombre
order by ordenes desc, ventas desc
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "c"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 148
               Right = 258
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cd"
            Begin Extent = 
               Top = 7
               Left = 306
               Bottom = 170
               Right = 516
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "ab"
            Begin Extent = 
               Top = 7
               Left = 564
               Bottom = 170
               Right = 774
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'clientesFrecuentesPagadoresYDeudores'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'clientesFrecuentesPagadoresYDeudores'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "vd"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 258
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "v"
            Begin Extent = 
               Top = 7
               Left = 306
               Bottom = 148
               Right = 516
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "c"
            Begin Extent = 
               Top = 7
               Left = 564
               Bottom = 148
               Right = 774
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "p"
            Begin Extent = 
               Top = 7
               Left = 822
               Bottom = 148
               Right = 1032
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "i"
            Begin Extent = 
               Top = 7
               Left = 1080
               Bottom = 170
               Right = 1290
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 1440
         Alias = 900
         Table = 1176
         Output ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'obtenerGastosCuentaPersonal'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'= 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'obtenerGastosCuentaPersonal'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'obtenerGastosCuentaPersonal'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "p"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 148
               Right = 242
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "op"
            Begin Extent = 
               Top = 7
               Left = 290
               Bottom = 170
               Right = 487
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "i"
            Begin Extent = 
               Top = 7
               Left = 535
               Bottom = 170
               Right = 729
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'obtenerProductosConPrecio30'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'obtenerProductosConPrecio30'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "p"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 148
               Right = 242
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "op"
            Begin Extent = 
               Top = 7
               Left = 290
               Bottom = 170
               Right = 487
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "i"
            Begin Extent = 
               Top = 7
               Left = 535
               Bottom = 170
               Right = 729
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'obtenerProductosConPrecioDefinidoPorProveedor'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'obtenerProductosConPrecioDefinidoPorProveedor'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "v"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 148
               Right = 258
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "vd"
            Begin Extent = 
               Top = 7
               Left = 306
               Bottom = 170
               Right = 516
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "p"
            Begin Extent = 
               Top = 7
               Left = 564
               Bottom = 148
               Right = 774
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "c"
            Begin Extent = 
               Top = 7
               Left = 822
               Bottom = 126
               Right = 1032
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'obtenerVentasPorCategorias'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'obtenerVentasPorCategorias'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'transaccionesPorDia'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'transaccionesPorDia'
GO
USE [master]
GO
ALTER DATABASE [AMZIExamen1] SET  READ_WRITE 
GO
