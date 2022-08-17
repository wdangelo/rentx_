import { inject, injectable } from "tsyringe";
import { v4 as uuidV4 } from "uuid";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";

@injectable()
class SendForgotPassordMailUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider,
        @inject("EtherialMailProvider")
        private mailProvider: IMailProvider
    ) {}

    async execute(email: string): Promise<void> {
        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            throw new AppError("User does not exists!")
        }

        const token = uuidV4();

        const expires_date = this.dateProvider.addHours(3)

        await this.usersTokensRepository.create({
            refresh_token: token,
            user_id: user.id,
            expires_date
        });

        await this.mailProvider.sendMail(
            email,
            "Recuperar senha Rentx",
            `Link para recuperar a senha: ${ token }`
        )

    }
}

export { SendForgotPassordMailUseCase }