-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2020 at 07:42 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_demo`
--

CREATE TABLE `tbl_demo` (
  `id` int(11) NOT NULL,
  `title` varchar(225) NOT NULL,
  `description` text NOT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_demo`
--

INSERT INTO `tbl_demo` (`id`, `title`, `description`, `isActive`, `createdAt`) VALUES
(1, 'lingaraj Sir..', 'sjdshjkdshsd jkshdkjsd sdjhsdk dskjsir', 1, '2020-04-23 05:33:29'),
(2, 'Subhadipta Nayak', 'here we goooooooooooooooooo', 1, '2020-04-23 05:36:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_demo`
--
ALTER TABLE `tbl_demo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_demo`
--
ALTER TABLE `tbl_demo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
