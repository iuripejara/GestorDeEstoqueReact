import { Link } from "react-router-dom";
import "../Button/Global.css";

export default function Button(props) {
    return (
        <Link to="/ver">
            <button>{props.children || 'Ver'}</button> {/* Usando children para personalizar texto */}
        </Link>
    );
}
