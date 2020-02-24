use db20190826;
-- MySQL dump 10.13  Distrib 5.7.24, for Win64 (x86_64)
--
-- Host: localhost    Database: db2nd
-- ------------------------------------------------------
-- Server version	5.7.24-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `all_pay_list`
--

DROP TABLE IF EXISTS `all_pay_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `all_pay_list` (
  `sequence_num` varchar(20) NOT NULL COMMENT '流水号',
  `channel_id` int(3) NOT NULL COMMENT '0:银联 1:微信 2:支付宝',
  `stu_id` int(20) NOT NULL,
  `pay_status` int(4) NOT NULL COMMENT '0:取消 1:已支付 2:未支付 3:支付中',
  `bill_amount` decimal(13,2) NOT NULL COMMENT '交易金额',
  `bill_id` varchar(40) NOT NULL COMMENT '订单编号',
  PRIMARY KEY (`sequence_num`),
  KEY `FK_ID2` (`stu_id`),
  KEY `FK_ID1` (`bill_id`),
  CONSTRAINT `FK_ID1` FOREIGN KEY (`bill_id`) REFERENCES `bill_info` (`bill_id`),
  CONSTRAINT `FK_ID2` FOREIGN KEY (`stu_id`) REFERENCES `user_info` (`stu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `all_pay_list`
--

LOCK TABLES `all_pay_list` WRITE;
/*!40000 ALTER TABLE `all_pay_list` DISABLE KEYS */;
INSERT INTO `all_pay_list` VALUES ('12345678',1,12345678,1,200.00,'12345678');
/*!40000 ALTER TABLE `all_pay_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill_info`
--

DROP TABLE IF EXISTS `bill_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bill_info` (
  `bill_id` varchar(40) NOT NULL COMMENT '订单编号',
  `bill_amount` decimal(13,2) NOT NULL COMMENT '交易金额',
  `creat_time` datetime NOT NULL COMMENT '交易时间',
  `stu_id` int(20) NOT NULL COMMENT '交易学生学号',
  `pay_status` int(4) NOT NULL COMMENT '0:取消 1:已支付 2:未支付 3:支付中',
  `bill_fail_reason` varchar(64) DEFAULT NULL COMMENT '交易失败原因',
  `channel_id` int(3) NOT NULL COMMENT '0:银联 1:微信 2:支付宝',
  PRIMARY KEY (`bill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill_info`
--

LOCK TABLES `bill_info` WRITE;
/*!40000 ALTER TABLE `bill_info` DISABLE KEYS */;
INSERT INTO `bill_info` VALUES ('12345678',200.00,'2019-04-12 00:00:00',12345678,1,NULL,1);
/*!40000 ALTER TABLE `bill_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clear_info`
--

DROP TABLE IF EXISTS `clear_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clear_info` (
  `clear_id` int(11) NOT NULL COMMENT '清算编号',
  `stock_id` int(11) NOT NULL COMMENT '采购单编号',
  `deposit_amount` decimal(13,2) NOT NULL COMMENT '该采购单定金金额',
  `deposit_status` int(1) NOT NULL COMMENT '定金金额状态，1:已支付 2:未支付',
  `remain_amount` decimal(13,2) NOT NULL COMMENT '该采购单尾款金额',
  `remain_status` int(1) NOT NULL COMMENT '尾款金额状态，1:已支付 2:未支付',
  `deposit_paytime` datetime NOT NULL COMMENT '定金支付时间',
  `remain_paytime` datetime NOT NULL COMMENT '尾款支付时间（期限）',
  PRIMARY KEY (`clear_id`),
  KEY `stock_id` (`stock_id`),
  CONSTRAINT `clear_info_ibfk_1` FOREIGN KEY (`stock_id`) REFERENCES `stock_list` (`stock_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clear_info`
--

LOCK TABLES `clear_info` WRITE;
/*!40000 ALTER TABLE `clear_info` DISABLE KEYS */;
INSERT INTO `clear_info` VALUES (12345678,12345678,40.00,1,0.00,0,'2019-04-12 00:00:00','2019-04-13 00:00:00');
/*!40000 ALTER TABLE `clear_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corp_info`
--

DROP TABLE IF EXISTS `corp_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `corp_info` (
  `corp_id` char(5) NOT NULL,
  `corp_name` varchar(60) NOT NULL COMMENT '商户名称',
  `corp_bank_account` varchar(64) NOT NULL COMMENT '商户银行卡账号',
  `corp_account_contact1` varchar(20) NOT NULL COMMENT '商户对账联系人1',
  `corp_account_contact1_phone` varchar(20) NOT NULL COMMENT '商户对账联系人1电话',
  `corp_account_contact1_email` varchar(40) NOT NULL COMMENT '商户对账联系人1邮箱',
  `corp_account_contact1_remark` varchar(50) NOT NULL COMMENT '商户对账联系人1备注',
  `set_account_type` int(5) NOT NULL,
  `backable` int(3) NOT NULL COMMENT '0:不支持 1:支持 2:待定',
  `corp_type` varchar(30) NOT NULL,
  `corp_address` varchar(64) NOT NULL,
  `group_id` int(10) NOT NULL,
  `status` int(1) NOT NULL COMMENT '0:启用 1:禁用',
  PRIMARY KEY (`corp_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `corp_info_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `group_info` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corp_info`
--

LOCK TABLES `corp_info` WRITE;
/*!40000 ALTER TABLE `corp_info` DISABLE KEYS */;
INSERT INTO `corp_info` VALUES ('12345','MaYiJingFu','622345162512433147','LiuShuxuan','13616275818','1246780635@qq.com','Caiwuzongjian',1,0,'jinrong','Donghuan Street',12345678,0);
/*!40000 ALTER TABLE `corp_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_info`
--

DROP TABLE IF EXISTS `group_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_info` (
  `group_id` int(10) NOT NULL COMMENT '集团编号',
  `group_name` varchar(60) NOT NULL COMMENT '集团名称',
  `remark` varchar(50) NOT NULL COMMENT '备注',
  `status` int(1) NOT NULL COMMENT '0:启用 1:禁用',
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_info`
--

LOCK TABLES `group_info` WRITE;
/*!40000 ALTER TABLE `group_info` DISABLE KEYS */;
INSERT INTO `group_info` VALUES (12345678,'Tencent','nothing',0);
/*!40000 ALTER TABLE `group_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_list`
--

DROP TABLE IF EXISTS `product_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_list` (
  `product_id` int(11) NOT NULL COMMENT '商品编号',
  `product_name` varchar(30) NOT NULL COMMENT '商品名称，最多15字',
  `product_unit_price` decimal(13,2) NOT NULL COMMENT '商品单价',
  `corp_id` char(5) NOT NULL COMMENT '商户代码',
  `product_status` int(2) NOT NULL COMMENT '0:下架 1:供应中',
  `attribute1` varchar(20) DEFAULT NULL,
  `attribute2` varchar(20) DEFAULT NULL,
  `attribute3` varchar(20) DEFAULT NULL,
  `remark` varchar(50) DEFAULT NULL COMMENT '商品备注',
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_list`
--

LOCK TABLES `product_list` WRITE;
/*!40000 ALTER TABLE `product_list` DISABLE KEYS */;
INSERT INTO `product_list` VALUES (1,'数科院院服1',20.00,'12345',1,'男','XXL',NULL,'测试产品'),(2,'数科院院服2',20.00,'12345',1,'男','XXXL',NULL,NULL);
/*!40000 ALTER TABLE `product_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_list`
--

DROP TABLE IF EXISTS `stock_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock_list` (
  `stock_id` int(11) NOT NULL COMMENT '采购编号',
  `stock_amount` decimal(13,2) NOT NULL COMMENT '该采购单中，以供应商为区分的采购金额',
  `corp_id` char(5) NOT NULL COMMENT '该采购单所包含的供应商id',
  `corp_name` varchar(60) NOT NULL COMMENT '供应商名称',
  `group_id` int(10) NOT NULL COMMENT '供应商所属集团编号',
  PRIMARY KEY (`stock_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_list`
--

LOCK TABLES `stock_list` WRITE;
/*!40000 ALTER TABLE `stock_list` DISABLE KEYS */;
INSERT INTO `stock_list` VALUES (12345678,40.00,'12345','ALI01',12345678);
/*!40000 ALTER TABLE `stock_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_bill_info`
--

DROP TABLE IF EXISTS `sub_bill_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sub_bill_info` (
  `sub_bill_id` varchar(40) NOT NULL COMMENT '子订单编号',
  `bill_id` varchar(40) NOT NULL COMMENT '归属父订单编号',
  `product_id` int(11) NOT NULL COMMENT '商品编号',
  `product_amount` decimal(13,2) NOT NULL COMMENT '商品金额',
  `crop_id` char(5) NOT NULL COMMENT '商户代码',
  PRIMARY KEY (`sub_bill_id`),
  KEY `bill_id` (`bill_id`),
  CONSTRAINT `sub_bill_info_ibfk_1` FOREIGN KEY (`bill_id`) REFERENCES `bill_info` (`bill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_bill_info`
--

LOCK TABLES `sub_bill_info` WRITE;
/*!40000 ALTER TABLE `sub_bill_info` DISABLE KEYS */;
INSERT INTO `sub_bill_info` VALUES ('11111111','12345678',1,1.00,'12345');
/*!40000 ALTER TABLE `sub_bill_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_stock_list`
--

DROP TABLE IF EXISTS `sub_stock_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sub_stock_list` (
  `sub_stock_id` int(11) NOT NULL COMMENT '子采购编号（关于父采购清单下某供应商的采购清单）',
  `stock_id` int(11) NOT NULL COMMENT '所属父采购单编号',
  `product_id` int(11) NOT NULL COMMENT '商品编号',
  `stock_amount` decimal(13,2) NOT NULL COMMENT '该商品总额',
  `quantity` int(11) NOT NULL COMMENT '该商品数量',
  PRIMARY KEY (`sub_stock_id`),
  KEY `FK_ID` (`stock_id`),
  CONSTRAINT `FK_ID` FOREIGN KEY (`stock_id`) REFERENCES `stock_list` (`stock_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_stock_list`
--

LOCK TABLES `sub_stock_list` WRITE;
/*!40000 ALTER TABLE `sub_stock_list` DISABLE KEYS */;
INSERT INTO `sub_stock_list` VALUES (11111111,12345678,1,20.00,1),(22222222,12345678,2,20.00,1);
/*!40000 ALTER TABLE `sub_stock_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_info` (
  `stu_id` int(20) NOT NULL,
  `collage` varchar(40) NOT NULL,
  `stu_name` varchar(20) NOT NULL,
  `department` varchar(20) NOT NULL,
  `major` varchar(30) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `grade` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `password` varchar(20),
  PRIMARY KEY (`stu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (12345678,'苏州大学','zhaocheng','Math department','Information and compute science','女','Grade Three','在读','ce888suo');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-15 12:49:44
