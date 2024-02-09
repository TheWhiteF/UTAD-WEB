const express = require("express");
const app = express();

const{infoCursos} = require("./cursos.js");

require("dotenv").config();

app.get('/', (req, res)=>{

    res.send('Hello World' )


})

const port = process.env.PORT || 3000;

app.listen (port, () => {
    console .log('Servidor iniciado en el puerto' , port);

});


app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion)); // sends a JSON string

    

});

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
	
    const lenguaje = req.params.lenguaje;
	const data = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

	if (req.query.ordenar === 'vistas') {

        //Orden DESC, si lo queremos ASC, sería (a.vistas, b.vistas)
        
        res.send(JSON.stringify(data.sort((a, b) => a.vistas - b.vistas )));
        
    } else {
        res.send(JSON.stringify(data));
        
    }

	if(data.length === 0) {
		
		return res.status(404).send("No se encontró" + lenguaje);
		
	}

    
	
	res.send(JSON.stringify(data));
	
});

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const data = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    if (data.length === 0) {
        res.status(404).send('No encontrado');
    }

   

    res.send(JSON.stringify(data));


});


app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas)); // sends a JSON string
});

app.get('/api/cursos/matematicas/:tema', (req, res) => {
	
    const tema = req.params.tema;
	const data = infoCursos.matematicas.filter(curso => curso.tema === tema);
	
	if(data.length === 0) {
		
		return res.status(404).send("No se encontró" + tema);
		
	}
	
	res.send(JSON.stringify(data));
	
});
