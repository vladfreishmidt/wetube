import express from "express";
import morgan from "morgan"; // Logger
import helmet from "helmet"; // Secure your Node js App
import cookieParser from "cookie-parser"; // User sessions
import bodyParser from "body-parser"; // Recieve data from user eg. contact form
import { userRouter } from "./router";

const app = express();


const handleHome = (req, res) => {
    console.log("Hi from my ass!");
    res.send('Hi! my ass 2');
}

const handleProfile = (req, res) => {
    res.send('Your profile!');
}

// Middlewares
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get('/', handleHome);
app.get('/profile', handleProfile);

app.use("/user", userRouter);

export default app;