import { Application } from 'express';
import { apiGetAllCourses } from './apiGetAllCourses';
import { apiGetCourseDetails } from './apiGetCourseDetails';
import { apiCreateLesson } from './apiCreateLesson';

export function initRestApi(app: Application) {
    app.route('/api/courses').get(apiGetAllCourses);
    app.route('/api/courses/:id').get(apiGetCourseDetails);
    app.route('/api/lesson').post(apiCreateLesson);
}