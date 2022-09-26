import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

interface IRequest {
    token: string;
    password: string;
}

@injectable()
class ResetPasswordUserUseCase {
    constructor(
        @inject("UsersTokensRepository")
        private usersTokenRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}
    async execute({ token, password }: IRequest): Promise<void> {
        const userToken = await this.usersTokenRepository.findByRefreshToen(token)

        if(!userToken) {
             throw new AppError("Token invalid!")
        }

        if(this.dateProvider.compareIfBefore(userToken.expires_date, this.dateProvider.DateNow())) {
            throw new AppError("Token expired!")
        }

        const user = await this.usersRepository.findById(userToken.user_id)

        user.password = await hash(password, 8)

        await this.usersRepository.create(user)

        await this.usersTokenRepository.deleteById(userToken.id)
    }
}

export{ ResetPasswordUserUseCase };