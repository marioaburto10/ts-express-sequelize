import ORM from 'Sequelize';
import { Sequelize, LoggingOptions } from 'Sequelize';
import { initCourseModel } from './initCourseModel';
require('dotenv').config()

const dbURL: string = `postgres://postgres:${process.env.DB_PW}@localhost:5432/complete-typescript-course`;

const options: LoggingOptions = { benchmark: true, logging: console.log }

const sequelize: Sequelize = new ORM(dbURL, options);

export const CourseModel = initCourseModel(sequelize);