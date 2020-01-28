import {Request, Response} from "express";
import {Course} from "../models/course.model";

export class CourseController {
    public list(req: Request, res: Response) {
        Course.findAll<Course>({})
            .then((nodes: Array<Course>) => res.json(nodes))
            .catch((err: Error) => res.status(500).json(err));
    }
}
