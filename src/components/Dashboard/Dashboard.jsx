
import { Link } from "react-router-dom"
import "./Global.css"

export default function Dashboard(){

        
    
    
    return(
        <div className="containerDashboard">
            <h1>Dashboard</h1>
                <div className="Dashboard-Geral">
                    <div className="Dashboard">
                        <h2>diversidade de Itens</h2>
                        <p>2</p> 
                    </div>
                    <div className="Dashboard">
                        <h2>invetário total</h2>
                        <p>40</p>
                    </div>
                    <div className="Dashboard">
                        <h2>Itens recentes</h2>
                        <p>2</p>
                    </div>
                    <div className="Dashboard">
                        <h2>itens acabando</h2>
                        <p>1</p>
                        <Link></Link>
                    </div>
                </div> 
                <footer>
                    <p></p>
                </footer>
        </div>
    )
}