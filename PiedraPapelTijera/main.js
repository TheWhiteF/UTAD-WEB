const PIEDRA = 1;
const PAPEL = 2;
const TIJERA = 3;
const LAGARTO = 4; 
const SPOCK = 5;   
const max = 2;
const results = [];
var humanos;
var ronda = 1;

$(document).ready(function () {

    const playAuto = (n) => {
        for (let i = 1; i <= n; i++) {
            const aleat = Math.floor(Math.random() * 5 + 1); 
            results[i] = aleat;
        }
    }

    const playManual = (n) => {
        for (let i = 2; i > max - n; i--) {
            let jugada = "0";
            while (jugada !== "1" && jugada !== "2" && jugada !== "3" && jugada !== "4" && jugada !== "5") {
                jugada = prompt("Jugador " + i + " introduzca: \n 1-Piedra \n 2-Papel \n 3-Tijera \n 4-Lagarto \n 5-Spock");
            }
            results[i] = parseInt(jugada);  
        }
    }

    const reveal = (n) => {
        for (let i = 1; i <= n; i++) {
            if (results[i] === PAPEL) {
                $("#jugador"+i).attr("src", "imagenes/papel.JPG");
            } else if (results[i] === TIJERA) {
                $("#jugador"+i).attr("src", "imagenes/tijera.JPG");
            } else if (results[i] === LAGARTO) { 
                $("#jugador"+i).attr("src", "imagenes/lagarto.JPG");
            } else if (results[i] === SPOCK) { 
                $("#jugador"+i).attr("src", "imagenes/spock.JPG");
            } else {
                $("#jugador"+i).attr("src", "imagenes/roca.JPG");
            }
        }
    }

    const setCounts = (n) => {
        console.log(results[1], results[2]);
        
        if (
            (results[1] === PIEDRA && (results[2] === TIJERA || results[2] === LAGARTO)) ||
            (results[1] === PAPEL && (results[2] === PIEDRA || results[2] === SPOCK)) ||
            (results[1] === TIJERA && (results[2] === PAPEL || results[2] === LAGARTO)) ||
            (results[1] === LAGARTO && (results[2] === PAPEL || results[2] === SPOCK)) ||
            (results[1] === SPOCK && (results[2] === PIEDRA || results[2] === TIJERA))
        ) {
            $("#cont1").html(parseInt($("#cont1").html()) + 1);
        } else if (
            (results[2] === PIEDRA && (results[1] === TIJERA || results[1] === LAGARTO)) ||
            (results[2] === PAPEL && (results[1] === PIEDRA || results[1] === SPOCK)) ||
            (results[2] === TIJERA && (results[1] === PAPEL || results[1] === LAGARTO)) ||
            (results[2] === LAGARTO && (results[1] === PAPEL || results[1] === SPOCK)) ||
            (results[2] === SPOCK && (results[1] === PIEDRA || results[1] === TIJERA))
        ) {
            $("#cont2").html(parseInt($("#cont2").html()) + 1);
        }
    }

    const setWinner = () => {
        val1 = parseInt($("#cont1").html());
        val2= parseInt($("#cont2").html());

        if (val1 > val2) {
            $("h1").html("Ganador el jugador 1");
            $("#j1").css("backgroundColor", "green");
            $("#j2").css("backgroundColor", "red");
        } else if (val1 < val2) {
            $("h1").html("Ganador el jugador 2");
            $("#j2").css("backgroundColor", "green");
            $("#j1").css("backgroundColor", "red");
        } else {
            $("h1").html("Empate");
        }
    }

    $(".hide").hide();

    $("#jugar").click(function() {
      
        humanos = $("#humanos").val();
      
        $(".hide").show();
        $("form").hide();
        $("#jugar").text("Continuar");

        $("h1").html("Ronda "+ ronda++);
      
        playAuto(max - humanos);
        playManual(humanos);
        setTimeout(function (){
            reveal(max);
        }, 1000);
        setCounts();
        
    });

    $("#finalizar").click(function() {
        setWinner();
        $("button").hide();
        setTimeout(function (){
            location.reload();
        }, 10000);
    });  
});
