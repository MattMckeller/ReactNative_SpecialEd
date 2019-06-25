-- MySQL Script generated by MySQL Workbench
-- Wed Apr 24 20:16:35 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Schools`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Schools` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `state` VARCHAR(255) NOT NULL,
  `zip` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Grades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Grades` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `grade` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Students` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `middleInitial` VARCHAR(255) NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `studentId` VARCHAR(255) NOT NULL,
  `birthDate` DATE NULL,
  `gender` VARCHAR(45) NULL,
  `gradeId` BIGINT(20) UNSIGNED NOT NULL,
  `schoolId` BIGINT(20) UNSIGNED NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_student_grade_idx` (`gradeId` ASC) VISIBLE,
  INDEX `fk_student_school_idx` (`schoolId` ASC) VISIBLE,
  CONSTRAINT `fk_student_grade`
    FOREIGN KEY (`gradeId`)
    REFERENCES `mydb`.`Grades` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_student_school`
    FOREIGN KEY (`schoolId`)
    REFERENCES `mydb`.`Schools` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`AwsUserAccount`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`AwsUserAccount` (
  `id` VARCHAR(255) NOT NULL,
  `emailAddress` VARCHAR(255) NOT NULL,
  `phoneNumber` VARCHAR(255) NOT NULL,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Notes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Notes` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `note` TEXT NOT NULL,
  `date` DATE NOT NULL,
  `minutes` INT NOT NULL,
  `studentId` BIGINT(20) UNSIGNED NOT NULL,
  `userAccountId` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_notes_students_idx` (`studentId` ASC) VISIBLE,
  INDEX `fk_note_user_account_idx` (`userAccountId` ASC) VISIBLE,
  CONSTRAINT `fk_note_student`
    FOREIGN KEY (`studentId`)
    REFERENCES `mydb`.`Students` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_note_user_account`
    FOREIGN KEY (`userAccountId`)
    REFERENCES `mydb`.`AwsUserAccount` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Goals`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Goals` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `goalNumber` INT NOT NULL,
  `goal` TEXT NOT NULL,
  `studentId` BIGINT(20) UNSIGNED NOT NULL,
  `userAccountId` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_goals_students_idx` (`studentId` ASC) VISIBLE,
  INDEX `fk_goal_user_account_idx` (`userAccountId` ASC) VISIBLE,
  CONSTRAINT `fk_goal_student`
    FOREIGN KEY (`studentId`)
    REFERENCES `mydb`.`Students` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_goal_user_account`
    FOREIGN KEY (`userAccountId`)
    REFERENCES `mydb`.`AwsUserAccount` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Attendance_Codes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Attendance_Codes` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`School_Years`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`School_Years` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `startDate` DATE NOT NULL,
  `endDate` DATE NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Roles` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Attendance_Records`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Attendance_Records` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `date` DATETIME NOT NULL,
  `attendanceCodeId` BIGINT(20) UNSIGNED NOT NULL,
  `studentId` BIGINT(20) UNSIGNED NOT NULL,
  `userAcountId` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_attendance_record_attendance_code_idx` (`attendanceCodeId` ASC) VISIBLE,
  INDEX `fk_attendance_record_student_idx` (`studentId` ASC) VISIBLE,
  INDEX `fk_attendance_record_user_account_idx` (`userAcountId` ASC) VISIBLE,
  CONSTRAINT `fk_attendance_record_attendance_code`
    FOREIGN KEY (`attendanceCodeId`)
    REFERENCES `mydb`.`Attendance_Codes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_attendance_record_student`
    FOREIGN KEY (`studentId`)
    REFERENCES `mydb`.`Students` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_attendance_record_user_account`
    FOREIGN KEY (`userAcountId`)
    REFERENCES `mydb`.`AwsUserAccount` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`_Schools_UserAccounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`_Schools_UserAccounts` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userAccountId` VARCHAR(255) NOT NULL,
  `schoolId` BIGINT(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_schools_teachers_idx` (`schoolId` ASC) VISIBLE,
  INDEX `fk_user_account_schools_idx` (`userAccountId` ASC) VISIBLE,
  CONSTRAINT `fk_schools_user_account`
    FOREIGN KEY (`schoolId`)
    REFERENCES `mydb`.`Schools` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_account_schools`
    FOREIGN KEY (`userAccountId`)
    REFERENCES `mydb`.`AwsUserAccount` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`_UserAccount_Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`_UserAccount_Roles` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userAccountId` VARCHAR(255) NOT NULL,
  `roleId` BIGINT(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_account_role_idx` (`userAccountId` ASC) VISIBLE,
  INDEX `fk_role_user_account_idx` (`roleId` ASC) VISIBLE,
  CONSTRAINT `fk_user_account_role`
    FOREIGN KEY (`userAccountId`)
    REFERENCES `mydb`.`AwsUserAccount` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_user_account`
    FOREIGN KEY (`roleId`)
    REFERENCES `mydb`.`Roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`_Notes_Goals`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`_Notes_Goals` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `noteId` BIGINT(20) UNSIGNED NOT NULL,
  `goalId` BIGINT(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_note_goal_idx` (`noteId` ASC) VISIBLE,
  INDEX `fk_goal_note_idx` (`goalId` ASC) VISIBLE,
  CONSTRAINT `fk_note_goal`
    FOREIGN KEY (`noteId`)
    REFERENCES `mydb`.`Notes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_goal_note`
    FOREIGN KEY (`goalId`)
    REFERENCES `mydb`.`Goals` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
