import _ from 'lodash';
import { onError } from "./onError";
import { onSuccess } from "./onSuccess";
import { Request, Response } from 'express';
import { createLesson } from "../queries/createLesson";
import { databaseErrorHandler } from './databaseError';

export function apiCreateLesson(req: Request, res: Response) {

    createLesson(req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch(_.partial(onError, res, "Could not create lesson"));

}


