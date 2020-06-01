import express from "express";
import routes from "../routes";
import {
    upload,
    videoDetail,
    editVideo,
    deleteVideo
} from "../controllers/videoController"

export const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;

