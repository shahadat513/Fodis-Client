import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home/Home";
import AllFoods from "../pages/AllFoods/AllFoods";
import Gallery from "../pages/Gallery/Gallery";
import LogIn from "../pages/Shared/LogIn";
import SignUp from "../pages/Shared/SignUp";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import MyOrders from "../pages/FoodPurchase/MyOrders";
import AddFood from "../pages/AddFood/AddFood";
import MyFoods from "../pages/AddFood/MyFoods";
import UpdateFood from "../pages/AddFood/UpdateFood";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Page Not Found</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "allFoods",
                element: <AllFoods></AllFoods>
            },
            {
                path: "gallery",
                element: <PrivateRoutes><Gallery></Gallery></PrivateRoutes>
            },
            {
                path: "logIn",
                element: <LogIn></LogIn>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/details/:id",
                element: <FoodDetails></FoodDetails>,
                loader: ({ params }) => fetch(`https://fodis-server.vercel.app/allFood/${params.id}`)

            },
            {
                path: "/foodPurchase/:id",
                element: <PrivateRoutes><FoodPurchase></FoodPurchase></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://fodis-server.vercel.app/allFood/${params.id}`)

            },
            {
                path: "MyOrders",
                element: <PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
                
            },
            {
                path: "addFood",
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
                
            },
            {
                path: "myFood",
                element: <PrivateRoutes><MyFoods></MyFoods></PrivateRoutes>
                
            },
            {
                path: "updateFood/:id",
                element: <PrivateRoutes><UpdateFood></UpdateFood></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://fodis-server.vercel.app/allFood/${params.id}`)
            }
        ]
    },
]);

export default router;
