import { createBrowserRouter } from "react-router-dom";
import Homen from "./pages/Homen/Homen";
import RootLayout from "./components/RootLayout/RootLayout";
import Ver from "./pages/Ver/Ver";
import Itens from "./pages/Itens/Itens"; // Importando o componente Itens

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Homen/>,  
            },
            {
                path: "ver",
                element: <Ver/>
            },
            {
                path: "itens",  // Adicionando a rota para "Itens"
                element: <Itens />,  
            },
        ]
    }
]);

export default router;
