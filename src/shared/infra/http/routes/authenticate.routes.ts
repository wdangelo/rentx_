import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokerController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokerController();

authenticateRoutes.post("/sessions", authenticateUserController.hanlde);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticateRoutes };
