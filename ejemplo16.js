//sentencia for
function contadorA(cadena,letra){
	for (var i = 0,contA=0;i<cadena.length;i++) {//permanencia
		if (cadena[i]===letra) {//accion
            contA++;
		}
}

return contA;
}
var cad="mariamo";
var letra="m";
console.log("la cantidad de: "+letra+" , es:"+ contadorA(cad,letra));
//console.log("la cantidad de letras es:"+ contadorA(letra));