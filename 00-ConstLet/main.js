let variable1 = 100;
console.log(variable1);

variable1 = 'Hola mundo';
console.log(variable1);

/*
* Las variables de tipo let pueden cambiar su valor durante la ejecución del programa, lo cual puede ser indeseado.
*/



//////////////// Forzando error de asignación variables de tipo const
const variable2 = 200;
console.log(variable2);

/* 
variable2 = 'Test';
console.log(variable2); 
*/

//////////////// Forzando error de asignación variables de tipo const

let miVariable2;

for (let i = 0; i < 10; i++) {
    const miVariable = i;
    console.log(miVariable);
    const miVariable2 = i;
    console.log('miVariable2', miVariable2);
} // Obs: No se puede declarar la variable const fuera del ciclo for, en cambio la variable de tipo let si se puede

/*
* Por lo tanto se recomienda siempre utilizar const para definir variables, las cuales no podrán cambiar en el tiempo de ejecución del programa.
*/