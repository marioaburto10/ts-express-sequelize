import { CourseModel, LessonModel } from "../model/model";

export function findCourseDetails(courseId: number) {

    return CourseModel.findById(courseId, {
        include: [
            {
                model: LessonModel
            }
        ]
    });
}