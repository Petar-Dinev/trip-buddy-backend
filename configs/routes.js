import authController from "../controllers/authController.js";
import homeController from "../controllers/homeController.js";

export default function routesConfig(app) {
    app.use('/auth', authController);
}