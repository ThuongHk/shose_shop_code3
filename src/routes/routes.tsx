import Home from "../pages/home/Home";
import Detail from '../pages/detail/Detail'



export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/:id', component: Detail},
]