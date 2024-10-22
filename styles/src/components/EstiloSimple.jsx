import { useState } from "react";
    const EstiloSimple = () => {
    const [mostrar, setMostrar] = useState(true);

        const handleClick = () => {
            setMostrar(!mostrar);
        }
        let bStyle = { backgroundColor: 'red' };
        const contenidoExtra = (
        <div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        )
        if (mostrar) {
            bStyle.backgroundColor = 'green';
        }
        return <div>
        <button onClick={handleClick} style={bStyle}>
        Pulsa para mostrar
        </button>
        {mostrar && contenidoExtra}
        </div>
}
export default EstiloSimple;