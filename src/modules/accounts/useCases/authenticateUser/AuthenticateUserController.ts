import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUSerUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async hanlde(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUserUsecase = container.resolve(AuthenticateUSerUseCase);

    const token = await authenticateUserUsecase.execute({
      password,
      email,
    });
    return response.json(token);
  }
}

export { AuthenticateUserController };
