//console.log("Estructura de datos");

//ARRAYS
//const no va a cambiar
//let si, mejor que var
let listaCompra = ["pan","leche","fruta","pescado"];

let cantidades=[3,10,5,2];

let registroEntradas = [true,true,true,false,false];

//OBJETOS

/*
let cliente = {
    nombre: "Ivan",
    direccion: "C/ejemplo",
    ciudad: "Market",
    factura: 2300,
    facturasPendientes: true
}
*/

//COMBINACIONES

//ARREGLO DE OBJETOS

let arreglo = [{},{},{}];

//camelcase
const topTresJugadoresTenis = [{
    ranking:1,
    nombre: "Djokvic",
    puntos:200,
    pais: "Serbia",
},{
    ranking:2,
    nombre: "Yakamura",
    puntos:300,
    pais: "Japon",
},{
    ranking:3,
    nombre: "Pablo",
    puntos:100,
    pais: "Colombia",
}]

//objeto con arreglos

let Djokovic = {
    ranking : 1,
    puntos: 300,
    pais: "Serbia",
    GrandSlams:17,
    Activo:true,
    estaTemporadaResults:{
        wins:["Australian OPen"," Cincinatti","Rome","Dubai"],
        finals:["Ronald Garros"],
        quarterFinals: ["Vienna"]
    },
    nickName: ["Nole","Pinza"]
}

console.log(Djokovic)

//ACCESO A ARRAYS
const empleados = ["Jose Perez","Maria Sanchez","Juan Martinez","Juan Carlos"];

console.log(empleados);

const juan = empleados[2];

console.log(juan);

//ACCESO ARRAYS ANIDADOS

const empleadosGenero = [["Maria","Pepe"],["Jose","Juan"]];

console.log(empleadosGenero[1][0]);
console.log(empleadosGenero[0][1]);

let cliente = {
    nombre: "Ivan",
    direccion: "C/ejemplo",
    ciudad: "Market",
    factura: 2300,
    facturasPendientes: true,
    transportistas:["Maria","Pepe","Jose","Juan"]
}
console.log(cliente.transportistas[3]);


//cuarto premio de Djkovic

console.log(Djokovic.estaTemporadaResults.wins[3]);