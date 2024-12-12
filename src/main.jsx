import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import MainPong from "./Sites/Pong/MainPong.jsx";
import MenuPong from "./Sites/Pong/Pages/MenuPong.jsx";
import MatchSolo from "./Sites/Pong/Pages/MatchSolo.jsx";
import MainLadderLoL from "./Sites/LadderLoL/MainLadderLoL.jsx";
import Profil from "./Sites/LadderLoL/page/Profil.jsx";


const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/pong",
        element: <MainPong />,
        children: [
            {
                path: '/pong',
                element: <MenuPong/>,
            },
            {
                path: '/pong/solo',
                element: <MatchSolo/>,
            }
        ]
    },
    {
        path: "/ladder-lol",
        element: <MainLadderLoL />,
    },
    {
        path: "/ladder-lol/profil/:puuid",
        element: <Profil />,
        loader: async ({ params }) => {
            return params.puuid;
        }
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
