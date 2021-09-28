import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){}
    
    execute({ name, description}: IRequest): void {
        const caetogryAlreadyExists = this.categoriesRepository.findByName(name);

        if (caetogryAlreadyExists) {
            throw new Error("Category already exists!");
        }
    
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
