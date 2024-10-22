import { useState } from "react";

const CondicionalVariables = () => {

        const [mostrar, setMostrar] = useState(true);

        const toggleMostrar = () => {
           setMostrar(!mostrar);
    }

    let contenido = null;
    if (mostrar) {
        contenido = <div>
        <p>Contenido</p>
    </div>;
    }
    return <div>
        <button onClick={toggleMostrar}>Mostrar/Ocultar</button>
        <p>Título</p>
        {contenido}
    </div>
}
export default CondicionalVariables;