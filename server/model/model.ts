import ORM from 'Sequelize';
import { Sequelize, LoggingOptions } from 'Sequelize';
import { initCourseModel } from './initCourseModel';
import { initLessonModel } from './initLessonModel';
require('dotenv').config()

const dbURL: string = `postgres://postgres:${process.env.DB_PW}@localhost:5432/complete-typescript-course`;

const options: LoggingOptions = { benchmark: true, logging: console.log }

const sequelize: Sequelize = new ORM(dbURL, options);

export const CourseModel = initCourseModel(sequelize);
export const LessonModel = initLessonModel(sequelize);

// Setting relationships between both models
CourseModel.hasMany(LessonModel, { foreignKey: 'courseId' });
LessonModel.belongsTo(CourseModel, { foreignKey: 'courseId' }); 