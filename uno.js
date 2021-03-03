/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/

function mostrar()
{
    var nombreproducto;
    var tipoProducto;
    var precioproducto;
    var cantidadDeunidades;
    var tipoDeinflamable;
    var marca;

    var acumCantAlcohol = 0;
    var acumCantIac = 0;
    var acumCantIacMenor = 0;
    var acumCantQuat = 0;

    var acumignífugo = 0;
    var acumcombustible = 0;
    var acumexplosivo = 0;

    var contadorAlcohol = 0;
    var contadorIac = 0;
    var contCantIacmenor = 0;
    var contadorQuat = 0;

    var contadorignífugo = 0;
    var contadorcombustible = 0;
    var contadorexplosivo = 0;

    var infMayorUnidadCompra;

    
    for( i = 0; i < 5; i++ ){
        
        nombreproducto = prompt("ingrese un nombre del producto: "); 
        tipoProducto = prompt('ingrese nombre de producto: "alcohol" "iac" "quat" ');
        while(!(tipoProducto == "alcohol" || "iac" || "quat") ){
            tipoProducto = prompt('ingrese nombre de producto valido por favor: "alcohol" "iac" "quat" ');
        }

        precioproducto = parseFloat(prompt("ingrese un precio entre: $100 - $300 "));
        while(!(precioproducto > 100 && precioproducto < 300) ){
            precioproducto = parseFloat(prompt("ingrese un precio valido entre: $100 - $300 "));
        }

        cantidadDeunidades = parseInt(prompt("ingrese la cantidad de unidades: de 1 hasta 1000"));
        while(!(cantidadDeunidades > 0 && cantidadDeunidades < 1000 )){
            cantidadDeunidades = parseInt(prompt("ingrese la cantidad de unidades valida por favor: de 1 hasta 1000"));

        }

        tipoDeinflamable = prompt('ingrese tipo de inflamable: "ignífugo", "combustible", "explosivo"');
        while(!(tipoDeinflamable > 0 && tipoDeinflamable < 1000 )){
            tipoDeinflamable = prompt('ingrese tipo de inflamable valido por favor: "ignífugo", "combustible", "explosivo" ');
        
            marca = prompt('ingrese una marca');
        }
        
        
        switch(tipoProducto){
            case "alcohol":
            acumCantAlcohol += cantidadDeunidades;
            contadorAlcohol++;
                break;
            case "iac":
            acumCantIac += cantidadDeunidades;
            contadorIac++;
            if(precioproducto <= 200 ){
                acumCantIacMenor = precioproducto;
                contCantIacmenor++;
            }
                break;
            case "quat":
            acumCantQuat += cantidadDeunidades;
            contadorQuat++;
                break;
        }

        switch(tipoDeinflamable){
            case "ignífugo":
                acumignífugo += cantidadDeunidades;
                contadorignífugo++;
                break;
            case "combustible":
                acumcombustible += cantidadDeunidades;
                contadorcombustible++;
                break;
            case "explosivo":
                acumexplosivo += cantidadDeunidades;
                contadorexplosivo++;
                break;
        }

    }


    /*A*/promedio = (acumCantAlcohol + acumCantIac + acumCantQuat) / cantidadDeunidades;
    
    /*B*/if( (acumignífugo > acumcombustible) && (acumignífugo > acumexplosivo) ){
        infMayorUnidadCompra = acumignífugo;
    }
    else if( ( acumcombustible > acumignífugo ) && (acumcombustible > acumexplosivo) ){
        infMayorUnidadCompra = acumcombustible;
    }
    else if( ( acumexplosivo > acumignífugo ) && (acumexplosivo > acumcombustible ) ){
        infMayorUnidadCompra = acumexplosivo;
    }
 
    /*C*/alert(acumCantIac);
    
    /*D*/if(){

    }
    
}