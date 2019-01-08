import { CourseModel, LessonModel } from "../model/model";
import { CourseDetail } from "../shared/model/course-detail";
import Bluebird from 'bluebird';
import { createCourseDetail } from "../shared/model/createCourseDetail";

export function findCourseDetails(courseId: number): Bluebird<CourseDetail> {

    return CourseModel.findById(courseId, {
        include: [
            {
                model: LessonModel
            }
        ]
    })
        .then(createCourseDetail)
}