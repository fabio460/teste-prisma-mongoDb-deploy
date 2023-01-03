import { typeRoutes } from "../../types";
import homeRouter from "./home-routes";
import postRouter from "./post-routes";
import userRouter from "./user-routes";

export const routes:typeRoutes[] = [
    {endpoint:'/',routes:homeRouter},
    {endpoint:'/post',routes:postRouter},
    {endpoint:'/user',routes:userRouter},
]