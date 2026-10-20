import { createBrowserRouter } from "react-router";
import Favourite from "../pages/Favourite";
import Home from "../pages/Home";
import Games from "../pages/Games";
import MainLayout from "../layout/MainLayout";
import { gameDeatilsLoader, gamesLoader } from "../service/gamesLoader";
import GamesDetails from "../pages/GamesDetails";


export const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        
        children:[
            {
        index:true,
        element:<Home/>,
       loader:gamesLoader,
       hydrateFallbackElement:<p className="text-white absolute top-1/2 left-1/2
       -translate-x-1/2 -translate-y-1/2
       ">Loading....</p>,
      
    },
    {
        path:'favrouite',
        element:<Favourite/>
    },
    {
        path:'games',
        element:<Games/>

    },
    {
        path :'gamesDetails/:id',
        element:<GamesDetails/>,
        loader:gameDeatilsLoader
    }
 
        ]
    }
])