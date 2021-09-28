import {Request, Response} from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor(private inportCategoryUseCase: ImportCategoryUseCase) {}
    handle(request: Request, response: Response):Response {
        const { file } = request;

        this.inportCategoryUseCase.execute(file)
        
        return response.send()
    }
}

export { ImportCategoryController }