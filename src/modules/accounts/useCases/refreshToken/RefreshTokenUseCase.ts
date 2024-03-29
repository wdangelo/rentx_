import auth from "@config/auth";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

interface IPayload {
    sub: string;
    email: string;
}

interface ITokenResponse {
  token: string;
  refresh_token: string;
}

@injectable()
class RefreshtokenUseCase {
    constructor(
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) {}
    async execute(token: string): Promise<ITokenResponse> {
      const { email, sub } = verify(token, auth.sercret_refresh_token) as IPayload;

      const user_id = sub

      const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(
        user_id,
         token
         );

      if(!userToken) {
        throw new AppError("Refresh Token does not exists!")
      }

      await this.usersTokensRepository.deleteById(userToken.id)

      const expires_date = this.dateProvider.addDays(auth.expires_refresh_token_days)

      const refresh_token = sign({ email }, auth.sercret_refresh_token, {
        subject: sub,
        expiresIn: auth.expires_in_refresh_token
      });
      
      await this.usersTokensRepository.create({
        expires_date,
        refresh_token,
        user_id
      })

      const newtoken = sign({}, auth.secret_token, {
        subject: user_id,
        expiresIn: auth.expires_in_token,
      });
      return {
        refresh_token,
        token: newtoken
      }

    }
}

export { RefreshtokenUseCase }