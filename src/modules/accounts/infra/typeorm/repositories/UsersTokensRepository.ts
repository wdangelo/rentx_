import { getRepository, Repository } from "typeorm";
import { ICreateUserTokenDTO } from "../../../dtos/ICreateUserTokenDTO";
import { IUsersTokensRepository } from "../../../repositories/IUsersTokensRepository";
import { UserTokens } from "../entities/UserTokens";

class UsersTokenRepository implements IUsersTokensRepository {
    private repository: Repository<UserTokens>;

    constructor() {
        this.repository = getRepository(UserTokens)
    }

    async create({ expires_date, refresh_token, user_id }: ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = this.repository.create({
            expires_date,
            refresh_token,
            user_id
        })

        await this.repository.save(userToken)

        return userToken
    }

    async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
        const usersTokens =  await this.repository.findOne({ user_id, refresh_token })
        return usersTokens
    }

    async deleteById(id: string): Promise<void> {
       await this.repository.delete(id)
    }
    
    async findByRefreshToen(refresh_token: string): Promise<UserTokens> {
        const userToken = await this.repository.findOne({ refresh_token })
        return userToken
    }

}

export { UsersTokenRepository }