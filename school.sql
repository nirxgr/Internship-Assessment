-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 06, 2025 at 07:38 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `Students`
--

CREATE TABLE `Students` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `classNumber` varchar(255) NOT NULL,
  `section` varchar(255) NOT NULL,
  `rollNumber` int(11) NOT NULL,
  `contactDetails` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Students`
--

INSERT INTO `Students` (`id`, `name`, `classNumber`, `section`, `rollNumber`, `contactDetails`, `createdAt`, `updatedAt`) VALUES
(1, 'Bikash Shrestha', '1', 'A', 1, '9801000001', '2025-09-06 07:44:49', '2025-09-06 07:44:49'),
(2, 'Sita Gurung', '1', 'A', 2, '9801000002', '2025-09-06 07:45:20', '2025-09-06 07:45:20'),
(3, 'Ram Thapa', '1', 'B', 3, '9801000003', '2025-09-06 07:45:27', '2025-09-06 07:45:27'),
(4, 'Mina Magar', '2', 'A', 4, '9801000004', '2025-09-06 07:45:36', '2025-09-06 07:45:36'),
(5, 'Suman Lama', '2', 'B', 5, '9801000005', '2025-09-06 07:45:43', '2025-09-06 07:45:43'),
(6, 'Anita Karki', '3', 'A', 6, '9801000006', '2025-09-06 07:45:53', '2025-09-06 07:45:53'),
(7, 'Ramesh KC', '3', 'B', 7, '9801000007', '2025-09-06 07:46:06', '2025-09-06 07:46:06'),
(8, 'Pramila Rai', '3', 'A', 8, '9801000008', '2025-09-06 07:46:14', '2025-09-06 07:46:14'),
(9, 'Binod Adhikari', '2', 'B', 9, '9801000009', '2025-09-06 07:46:26', '2025-09-06 07:46:26'),
(10, 'Suraj Chaudhary', '1', 'A', 10, '9801000001', '2025-09-06 16:52:14', '2025-09-06 16:53:12');

-- --------------------------------------------------------

--
-- Table structure for table `Teachers`
--

CREATE TABLE `Teachers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `contactDetails` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `subjects` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`subjects`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Teachers`
--

INSERT INTO `Teachers` (`id`, `name`, `contactDetails`, `createdAt`, `updatedAt`, `subjects`) VALUES
(1, 'Shresha Raj Bhandari', '9801234567', '2025-09-06 06:38:29', '2025-09-06 17:00:34', '[{\"subject\":\"Social\",\"classes\":[\"1A\",\"2B\"]},{\"subject\":\"Science\",\"classes\":[\"3A\"]}]'),
(2, 'Sushma Thapa', '9811000002', '2025-09-06 07:52:36', '2025-09-06 07:52:36', '[{\"subject\":\"English\",\"classes\":[\"1A\",\"3B\"]},{\"subject\":\"Nepali\",\"classes\":[\"2A\",\"1B\"]}]'),
(3, 'Rajan Magar', '9811000003', '2025-09-06 07:52:46', '2025-09-06 07:52:46', '[{\"subject\":\"Science\",\"classes\":[\"1B\",\"2B\"]},{\"subject\":\"Math\",\"classes\":[\"3A\"]}]'),
(4, 'Anjali Rai', '9811000004', '2025-09-06 07:52:52', '2025-09-06 07:52:52', '[{\"subject\":\"Social Studies\",\"classes\":[\"3A\",\"1A\"]}]'),
(5, 'Binay Shrestha', '9811000005', '2025-09-06 07:52:58', '2025-09-06 17:02:45', '[{\"subject\":\"English\",\"classes\":[\"2A\",\"3B\",\"1B\"]}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Students`
--
ALTER TABLE `Students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Teachers`
--
ALTER TABLE `Teachers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Students`
--
ALTER TABLE `Students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Teachers`
--
ALTER TABLE `Teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
