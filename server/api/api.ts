import { Application } from 'express';
import { findAllCourses } from "../queries/findAllCourses";
import { apiGetAllCourses } from './apiGetAllCourses';

export function initRestApi(app: Application) {
    app.route('/api/courses').get(apiGetAllCourses);
}