 import { Link, useLoaderData } from "react-router-dom";
import "../Homen/Global.css"
export default function Homen (){
    return(
        <section className="content">
            <h1>
                Pejaras Beer
            </h1>
            <div className="Links">
                <Link to="/" >Inicio</Link>
                <Link to="/">Itens</Link>
            </div>
        </section>
    )
}