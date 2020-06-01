import express from "express";
import morgan from "morgan"; // Logger
import helmet from "helmet"; // Secure your Node js App
import cookieParser from "cookie-parser"; // User sessions
import bodyParser from "body-parser"; // Recieve data from user eg. contact form
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
const app = express();

app.set("view engine", "pug");

// Middlewares
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

// Routers
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;