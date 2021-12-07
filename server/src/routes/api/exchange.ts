import express from "express";
import { ExchangeController } from "../../controllers/exchange";
import { Auth } from "../../middlewares/auth";

const router = express.Router();
const exchangeController = new ExchangeController();

router.post("/create", Auth.authenticate, exchangeController.Create);
router.post("/refresh", Auth.authenticate, exchangeController.RefreshSymbols);

export default router;
