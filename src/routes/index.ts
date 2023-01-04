import { typeRoutes } from "../../types";
import homeRouter from "./home-routes";
import postRouter from "./post-routes";
import transactionRouter from "./transaction-route";
import userRouter from "./user-routes";
import usersRouter from "./users-route";

export const routes:typeRoutes[] = [
    {endpoint:'/',routes:homeRouter},
    {endpoint:'/post',routes:postRouter},
    {endpoint:'/user',routes:userRouter},
    {endpoint:'/users',routes:usersRouter},
    {endpoint:'/transactios',routes:transactionRouter},
]