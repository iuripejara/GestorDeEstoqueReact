import Dashboard from "../Dashboard/Dashboard";
import Homen from "../../pages/Homen/Homen";
import ItensDashboard from "../ItensDashboard/ItensDashboard";

export default function RootLayout (){
    return (
        <>
            <header>
                <Homen/>
            </header>
            <main>
                <Dashboard/>
                <ItensDashboard/>
            </main>
        </>
    )
}