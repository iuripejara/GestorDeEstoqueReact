import Button from "../../components/Button/Button"
import "../ItensDashboard/Global.css"

export default function ItensDashboard(){
    return(
        <div className="container">
            <div className="item">
                <div className="topo">
                    <h3>Itens Recentes</h3>
                    <h3>Ação</h3>
                </div>
                <div className="Lista">
                    <p>Cerveja</p>
                    <Button>Ver</Button>
                </div>
            </div>
            <div className="item">
                <div className="topo">
                    <h3>Itens en falta</h3>
                    <h3>Ação</h3>
                </div>
                <div className="Lista">
                    <p>Cerveja</p>
                    <Button>Ver</Button>
                </div>
            </div>
        </div>
    )
}