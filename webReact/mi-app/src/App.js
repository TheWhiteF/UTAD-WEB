import './App.css';
import TeamMember from './components/TeamMember';
import data from './data/data.json';


/*
<TeamMember 
            name="Borja Montoro Cavero" 
            position="Director del programa Experto en Diseño de Personajes" 
            description="Diseñador con más de 25 años de experiencia en la industria, trabajó siete de ellos como..." 
            image="Borja-Montoro" />
<TeamMember 
            name="David Míguez Blanco" 
            position="Director del Máster en Rigging y CFX. Profesor de Rigging" 
            description="Tras licenciarse en Historia por la Universidad de Santiago de Compostela, David cursa el Máster en ..." 
            image="david-miguez_1" />
<TeamMember 
            name="Eduardo Fernández Carrión" 
            position="Profesor de Probabilidad y Estadísticas, Geomertría Computacional" 
            description="Ingeniero Informático y Matemático. Doctor en Métodos Estadísticos-Matemáticos para ..." 
            image="eduardo-fernandez-carrion_1" />
*/

function App() {
  return (
    <div className='App'>
        <div className='main-container'>
          <h1>Profesores internacionales de primer nivel</h1>
          {data.map((element, index) => (
          <TeamMember 
            name = {element.name}
            position = {element.position}
            description = {element.description}
            image = {element.image} />
          ))}
        </div>
    </div>
  );
}

export default App;