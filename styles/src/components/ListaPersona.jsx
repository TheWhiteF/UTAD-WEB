import { useState } from "react";
import ListItem from "./ListItem";
const ListaPersona = () => {
    const [personas, setPersonas] = useState([
    { nombre: 'Pedro', apellidos: 'Rodríguez', email: 'pedro@mail.com' },
    { nombre: 'Rosa', apellidos: 'Gómez', email: 'rosa@mail.com' },
    { nombre: 'Lorenzo', apellidos: 'López', email: 'lorenzo@mail.com' },
    { nombre: 'Lucía', apellidos: 'García', email: 'lucia@mail.com' }
    ]);

    const borrarContacto = (index) => {
        const personasCp = [...personas];
        personasCp.splice(index, 1);
        setPersonas(personasCp);
    }
    const modificarNombre = (event, index) => {
        const persona = { ...personas[index] };
        persona.nombre = event.target.value;
        const personasNew = [
        ...personas
        ];
        personasNew[index] = persona;
        setPersonas(personasNew);
    }
    return <div className="contactos">

        {personas.map((persona, index) => {
        const data = { persona, index, modificarNombre, borrarContacto };
        return <ListItem {...data} />
        })}
    </div>
}
export default ListaPersona;