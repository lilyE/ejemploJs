//sentencia while-for
function contadorA(cadena){
	var contA=0;//inicializacion
	var i=0;
	while(i<cadena.length){//permanencia
	//if(cadena[i]==="a"){//accion
		//if(cadena[i].toLowerCase()=="a"){//minusculas
     if(cadena[i].toUpperCase()=="A"){//mayusculas
     contA++;
	}
	i++;//incremento
	}
	return contA;
}
var cad="Anastacia";
console.log("la cantidad de a, es:"+ contadorA(cad));