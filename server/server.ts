
import express from 'express';
import { Application } from 'express';
import { initRestApi } from "./api/api";
import { apiErrorHandler } from './api/apiErrorHandler';

const app: Application = express();

initRestApi(app);

app.use(apiErrorHandler)

app.listen(8080, () => console.log('Server is running on Port: 8080'))