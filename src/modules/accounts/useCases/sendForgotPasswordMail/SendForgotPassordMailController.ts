import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendForgotPassordMailUseCase } from "./SendForgotPassordMailUseCase";

class SendForgotPassordMailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        const sendForgotPasswordMailUseCase = container.resolve(SendForgotPassordMailUseCase);

        await sendForgotPasswordMailUseCase.execute(email)
        return response.send()
    }
}

export { SendForgotPassordMailController }