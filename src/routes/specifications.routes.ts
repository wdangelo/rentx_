import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreatespecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle)

export { specificationRoutes }