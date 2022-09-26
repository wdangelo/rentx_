import { ResetPasswordUserController } from "@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";
import { SendForgotPassordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPassordMailController";
import { Router } from "express"

const paswordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPassordMailController();
const resetPasswordUserController = new ResetPasswordUserController();

paswordRoutes.post("/forgot", sendForgotPasswordMailController.handle)
paswordRoutes.post("/reset", resetPasswordUserController.handle)

export{ paswordRoutes }