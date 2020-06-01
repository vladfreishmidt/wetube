import express from "express";
import routes from "../routes";
import {
    userDetail,
    changePassword,
    editProfile
} from "../controllers/userController"

const userRouter = express.Router();

userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;


