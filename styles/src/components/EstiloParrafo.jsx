import { useState } from "react"
const EstilosParrafo = () => {
const [estilos, setEstilos] = useState({
backgroundColor: 'indigo',
color: 'white'
});
const cambiarColor = (pColor) => {
const estilosNew = { ...estilos };
estilosNew.backgroundColor = pColor;
setEstilos(estilosNew);
}
const cambiaColorTexto = (ev) => {
const estilosNew = { ...estilos };
estilosNew.color = ev.target.value;
setEstilos(estilosNew);
}
const cambiarSizeTexto = (event) => {
const estilosNew = { ...estilos };
estilosNew.fontSize = event.target.value + 'px';
setEstilos(estilosNew);
}
return (
<div>
<div className="botones">
<button onClick={() => cambiarColor('red')}>Rojo</button>
<button onClick={() => cambiarColor('indigo')}>Indigo</button>
<button onClick={() => cambiarColor('goldenrod')}>Golden</button>
</div> <div>
<input type="text" value={estilos.color} onInput={(event) => cambiaColorTexto(event)} />
</div>
<div>
<input type="range" onChange={(event) => cambiarSizeTexto(event)}
min="10" max="100" step="1" />
</div>
<p style={estilos}>Lorem ipsum dolor sit amet, consectet
ur adipisicing elit. Earum, deleniti.</p>
</div>);
}
export default EstilosParrafo;