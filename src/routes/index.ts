import { typeRoutes } from "../../types";
import postRouter from "./post-routes";
import userRouter from "./user-routes";

export const routes:typeRoutes[] = [
    {endpoint:'/post',routes:postRouter},
    {endpoint:'/user',routes:userRouter},
]