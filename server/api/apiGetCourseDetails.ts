import { Request, Response } from 'express';
import { onSuccess } from './onSuccess';
import { onError } from './onError';
import { findCourseDetails } from '../queries/findCourseDetails';
import _ from 'lodash';

export function apiGetCourseDetails(req: Request, res: Response) {

    const courseId = parseInt(req.params.id);

    findCourseDetails(courseId)
        // .then(() => { throw new Error('Error Ocured in the server') })
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, `Could not find course details for course with id ${courseId}`));

}