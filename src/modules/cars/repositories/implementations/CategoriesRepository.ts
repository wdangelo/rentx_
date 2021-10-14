import { Category } from "../../entities/Category"
import {ICategoriesRepository ,ICategoryDTO } from "../ICategoriesRepository";
import { getRepository, Repository } from "typeorm";



class CategoryRepository  implements ICategoriesRepository {

    private repository: Repository<Category>;

    constructor () {
        this.repository = getRepository(Category);
    }


    async create({ description, name }: ICategoryDTO ): Promise<void> {

        const category = this.repository.create({
            name, 
            description
        })
    
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export {CategoryRepository} ;