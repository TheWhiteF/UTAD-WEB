const ListItem = ({ persona, index, modificarNombre, borrarContacto }) => {
    return <div key={index} className="contacto">
        <p>{persona.nombre} {persona.apellidos}</p>
        <p>{persona.email}</p>
        <input type="text" value={persona.nombre} onChange={(e) => modificarNombre(e, index)} />
        <button onClick={(e) => borrarContacto(index)}>Borrar</button>
    </div>
}
export default ListItem;