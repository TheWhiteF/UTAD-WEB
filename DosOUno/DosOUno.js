const CERO = 0;
const UNO = 1;
const DOS = 2;
const max = 3;
const results = [];
var humanos;
var partida;
var ronda = 1;
var totalRondas; // Variable para el número total de rondas

$(document).ready(function () {

    const playAuto = (n) => {
        for (let i = 1; i <= n; i++) {
            const aleat = Math.floor(Math.random() * 2 + 1);
            results[i] = aleat;
        }
    }

    const playManual = (n) => {
        for (let i = 3; i > max - n; i--) {
            let jugada = "0";
            while (jugada !== "1" && jugada !== "2") {
                jugada = prompt("Jugador " + i + " introduzca: 1 o 2");
            }
            results[i] = parseInt(jugada);
        }
    }

    const reveal = (n) => {
        for (let i = 1; i <= n; i++) {
            if (results[i] === UNO) {
                $("#jugador" + i).attr("src", "imagenes/uno.PNG");
            } else if (results[i] === DOS) {
                $("#jugador" + i).attr("src", "imagenes/dos.PNG");
            }
        }
    }

    const setCounts = (n) => {
        console.log(results[1], results[2], results[3]);

        for (let i = 1; i <= n; i++) {
            for (let j = i + 1; j <= n; j++) {
                if (
                    (results[i] === UNO && (results[j] === DOS || results[j] == DOS)) ||
                    (results[i] === DOS && (results[j] === UNO || results[j] == UNO))
                ) {
                    $("#cont" + i).html(parseInt($("#cont" + i).html()) + 1);
                } else if (
                    (results[j] === UNO && (results[i] === DOS || results[i] == DOS)) ||
                    (results[j] === DOS && (results[i] === UNO || results[i] == UNO))
                ) {
                    $("#cont" + j).html(parseInt($("#cont" + j).html()) + 1);
                }
            }
        }
 }

    const setWinner = () => {
        val1 = parseInt($("#cont1").html());
        val2 = parseInt($("#cont2").html());
        val3 = parseInt($("#cont3").html());


        if (val1 > val2 && val3) {
            $("h1").html("Ganador el jugador 1");
            $("#j1").css("backgroundColor", "green");
            $("#j2").css("backgroundColor", "red");
            $("#j3").css("backgroundColor", "red");
        } else if (val2 > val1 && val3) {
            $("h1").html("Ganador el jugador 2");
            $("#j2").css("backgroundColor", "green");
            $("#j1").css("backgroundColor", "red");
            $("#j3").css("backgroundColor", "red");
        } else if (val3 > val2 && val1) {
            $("h1").html("Ganador el jugador 3");
            $("#j2").css("backgroundColor", "red");
            $("#j1").css("backgroundColor", "red");
            $("#j3").css("backgroundColor", "green");
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
