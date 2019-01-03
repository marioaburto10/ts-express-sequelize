import { findAllCourses } from "../queries/findAllCourses";
import { Request, Response } from 'express';
import _ from 'lodash';
import { onError } from "./onError";
import { onSuccess } from "./onSuccess";

export function apiGetAllCourses(req: Request, res: Response) {

    findAllCourses()
        // .then(() => { throw new Error('Error Ocured in the server') })
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Find all courses failed"));

}

