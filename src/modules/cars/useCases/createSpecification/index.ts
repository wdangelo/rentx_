import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepositoy";
import { CreateSpecificationController } from "./CreatespecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationsRepository = new SpecificationRepository()

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController };
