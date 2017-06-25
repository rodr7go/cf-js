// var nombre;

// nombre = 'Rodrigo';

// var edad = '26';
// var precio = 12.5;

// alert('hola mundo');
// console.log('hola mundo :)');
// document.querySelector('body').innerHTML = 'Hola mundo :))';

/*
Operadores Aritmeticos
Division = /
Multiplicacion = *
Suma = +
Resta = -
Modulo = %
*/

// var edad = 26;
// edad++;
// var punto_flotantes = 12.5;
// var resultado = edad + punto_flotantes;

// console.log(es_par(1));

// function es_par(numero) {
// 	if (numero % 2 == 0){
// 		return true;
// 	}
// 	return false;
// }

// console.log(Math.pow(2, 3));

// var nombre = 'Rodrigo';
// var cadena = 'hola';

// console.log(nombre.indexOf('Rodrigo'));

// if (nombre.indexOf('Rodrigo') != -1){
// 	console.log('eres el tutor');
// }else{
// 	console.log('no eres el tutor');
// }

// nombre = nombre.replace('o','a')
// console.log(nombre.slice(0,3));
// console.log(nombre.toUpperCase());
// console.log(nombre.toLowerCase());

// var numero_uno = 23;
// var numero_dos = "23";

// if (numero_uno < numero_dos) {
// 	console.log('Entre al bloque');
// }

// if (numero_uno === numero_dos) {
// 	console.log('algo');
// }

// var cont = 0;

// while (cont < 10) {
// 	cont++;
// 	if(cont % 2 == 0){
// 		console.log(cont);
// 	}
// }
// var a = ['hola', 'mundo'];
// for (var i = 0; i < a.length; i++) {
// 	console.log(a[i]);
// }


// var number = 0;
// var text = 'texto';
// var bool = false;
// var func = function(){

// }
// console.log(typeof number, typeof text, typeof bool, typeof func);


// var max = 100;
// var min = 1;
// var numero_secreto = Math.random() * (max-min) + 1;
// numero_secreto = parseInt(numero_secreto);
// console.log(numero_secreto);

// var mensaje = 'ingresa un numero para adivinar el numero magico';

// while(true){
// 	var numero_usuario = prompt(mensaje, '0');
// 	numero_usuario = parseInt(numero_usuario);

// 	if (numero_usuario === numero_secreto){
// 		alert('ganaste, adivinaste el numero secreto');
// 		break;
// 	}
// 	else if (numero_usuario === 0){
// 		break;
// 	}
// 	else if (numero_usuario > numero_secreto){
// 		mensaje = 'lo sentimos el numero que ingresaste es mayor al numero magico';
// 	}
// 	else if (numero_usuario < numero_secreto){
// 		mensaje = 'lo sentimos el numero que ingresaste es menor al numero magico';
// 	}
// }



// var div = document.getElementById('mi-div');
// var div = document.getElementsByClassName('mi-clase');
// var div = document.getElementsByTagName('div');
// var div = document.querySelector('.mi-clase');

// function $(selector){
// 	return document.querySelector(selector);
// }

// var div = $('.mi-clase');
// console.log(div);
// div.classList.add('mi-clase');

// function clicks(){
// 	alert('hola');
// }
// function otro_click(){
// 	alert('esto es del div');
// }

// $('#btn').addEventListener('click', clicks, false);
// $('#div').addEventListener('click', otro_click, true);



// var arreglo = [20, 10, 5];
// arreglo.push(7); // agrega el valor al final del array
// arreglo.unshift(8);// lo agrega al inicio del array
// arreglo.shift();//retira el primer elemento del array
// arreglo.pop();//elimina el ultimo elemento del arreglo
// console.log(arreglo[0]);
// console.log(arreglo);
// console.log(arreglo.length)

// for (var i = 0; i < arreglo.length; i++) {
// 	console.log(arreglo[i]);
// }

// function suma(a,b){
// 	return a+b; 
// }

// var resultado = suma(1,1);

// console.log(resultado);

// function ordenacion(a, b){
// 	return a -b;
// }

// var arreglo = [2,5,1,7,10,20];
// arreglo.sort(ordenacion);
// arreglo.reverse();

// var arreglo = 'a,b,c,2'.split(',');
// arreglo = arreglo.join('');

// console.log(arreglo);

//var numeros = [10,2,3,5,9,20,22,8];

// var numeros_pares = [];

// for (var i = numeros.length; i >= 0; i--){
// 	var numero = numeros[i];
// 	if (numero % 2 == 0){
// 		numeros_pares.push(numero);
// 	}
// }

// var numeros_pares = numeros.filter(function(numero){
// 	return numero % 2 == 0;
// });
// console.log(numeros_pares);


// var numeros = [1,5,6,8,20];
// var cuadrados = [];
// for (var i = numeros.length - 1; i >= 0; i--){
// 	var numero = numeros[i];
// 	cuadrados.push(Math.pow(numero, 2))
// }

// var cuadrados = numeros.map(function(numero){
// 	return numero * numero;
// });
// console.log(cuadrados);

// var numeros = [2,4,6,8];

// numeros.forEach(function(elemento, index, arreglo){
// 	console.log(elemento, index, arreglo);
// 	arreglo[index] = Math.pow(elemento, 2);

// });

// console.log(numeros);

// var letras = ['h', 'o', 'l', 'a', ':)'];

// var palabra = letras.reduce(function(val_ant_ret, val_actual, index, arreglo){
// 	return val_ant_ret + val_actual;
// });
// console.log(palabra);

// var numeros = [20,15,20,15];
// var resultado = numeros.reduce(function(val_ant_ret, val_actual, index, arreglo){
// 	return val_ant_ret + val_actual;
// });
// console.log(resultado);
//
// var suma = 0;
// for(var i = 0; i < numeros.length; i++){
// 	suma += numeros[i];
// }
// console.log(suma);

// Template string ------------------------------>

// var template = `Hola
//  	esto es un salto de linea y tabulacion
//  mundo :)`;
// console.log(template);

// var nombre = 'Rodrigo';
// var saludo = `hola ${nombre} buen dia`;
// function nombre(){
//     return 2+3;
// };
// // var saludo = `hola ${nombre()} buen dia`;
// var saludo = `hola ${'codigo ' + 'Rodrigo'} buen dia`;
//
// console.log(saludo);

// Arrow Functions ------------------------------>

// var numeros = [1,2,3,4,5];

// var elevado_2 = numeros.map(function(n){
// 	return n*n;
// });
// var elevado_2 = numeros.map( (n)=> n*n );
// console.log(elevado_2);

// function Tutor(){
// 	this.nombre = 'Rodrigo';
//
//
// 	setTimeout(()=> {
// 		this.nombre =  'Codigo facilito';
// 	},500)
// }
//
// var tutor = new Tutor();
// console.log(tutor.nombre);
//
// setTimeout(function(){
// 	console.log(tutor.nombre);
// }, 1000);


// Clases ES6

// class Tutor{
// 	constructor(nombre, last_name){
// 		this.nombre = nombre;
// 		this.last_name = last_name;
// 	}
//
// 	fullname(){
// 		return this.nombre + ' ' + this.last_name;
// 	}
// }
//
// var tutor = new Tutor('Ezequiel', 'lopez');
// console.log(tutor.fullname());


// Let --------------------------------------->
// let -> var
// init();
// function init(){
// 	if(true){
//         var nombre = 'Rodrigo';
//     }
//     console.log(nombre);
// }
