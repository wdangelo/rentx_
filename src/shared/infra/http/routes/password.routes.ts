import { SendForgotPassordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPassordMailController";
import { Router } from "express"

const paswordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPassordMailController();

paswordRoutes.post("/forgot", sendForgotPasswordMailController.handle)

export{ paswordRoutes }