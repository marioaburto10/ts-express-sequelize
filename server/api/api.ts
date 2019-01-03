import { Application } from 'express';
import { apiGetAllCourses } from './apiGetAllCourses';
import { apiGetCourseDetails } from './apiGetCourseDetails';

export function initRestApi(app: Application) {
    app.route('/api/courses').get(apiGetAllCourses);
    app.route('/api/courses/:id').get(apiGetCourseDetails);
}