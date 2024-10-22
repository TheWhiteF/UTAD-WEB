const { useState } = require("react")

function CondicionalTernario(){

    const [mostrar, setMostrar] = useState(true);

    const handleClick = () => {
        
        setMostrar(!mostrar);
    }

    return <div>
        <button onClick={handleClick}>Mostrar/Ocultar</button>
        <h2>Título</h2>
        {
            mostrar ?
                <p>Contenido de la página</p>
                : null
        }
    </div>;
}
export default CondicionalTernario;