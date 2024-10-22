import { useState } from "react"

const CondicionalAutoejecutada = () => {
    const [mostrar, setMostrar] = useState(true);
    const toggleMostrar = () => {
        setMostrar(!mostrar);
    }
    return <div>
        <button onClick={toggleMostrar}>Mostrar/Ocultar</button>
        <h1>Título</h1>
        {(() => {
            if (mostrar) {
                return <p>Contenido</p>;
        }
        })()}
    </div>
}
export default CondicionalAutoejecutada;