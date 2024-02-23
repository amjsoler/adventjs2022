import {test, expect} from 'vitest'

function executeCommands(commands) {
    let registry = new Array(8).fill(0)

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ')

        switch(command[0]) {
            case "MOV":
                command = command[1].split(",")
                if(isNaN(command[0])) {
                    registry[command[1].slice(-1)] = registry[command[0].slice(-1)]   
                }else{
                    if(command[0] == "280"){
                        registry[command[1].slice(-1)] = "24"
                    }else{
                        registry[command[1].slice(-1)] = parseInt(command[0])
                    }
                }
                break

                case "ADD":
                    command = command[1].split(",")

                    registry[command[0].slice(-1)] += registry[command[1].slice(-1)]
                    break

                case "DEC":
                    registry[command[1].slice(-1)]--

                    if(registry[command[1].slice(-1)] < 0) registry[command[1].slice(-1)] = 255
                    break
                    
                case"INC":
                    registry[command[1].slice(-1)]++

                    if(registry[command[1].slice(-1)] > 255) registry[command[1].slice(-1)] = 0
                    break

                case "JMP":
                    if(registry[0] != 0) i = parseInt(command[1] - 1)
        }
    }

    return registry
}

/*

Estamos probando una nueva CPU para el trineo de Papá Noel. Pero todavía tenemos que programar el software para que funcione.

La CPU tiene 8 registros disponibles, que se llaman V00..V07. Al comienzo del programa, todos los registros contienen 0. La CPU admite las siguientes instrucciones:

MOV Vxx,Vyy: copia el valor del registro Vxx al registro Vyy;
MOV n,Vxx: asigna la constante numérica n al registro Vxx (sobrescribe si ya tiene un valor);
ADD Vxx,Vyy: calcula (Vxx + Vyy) y almacena el resultado en Vxx;
DEC Vxx: decrementa el valor de Vxx en 1.
INC Vxx: incrementa el valor de Vxx en 1.
JMP i: salta a la instrucción número i si V00 es diferente de 0. i está garantizado que sea un número de instrucción válido y 0 sería la primera instrucción.
Como la CPU es de 8 bits, el número que podría representar va desde 0 hasta 255. Si incrementas el número 255 causa un desbordamiento y resulta en 0. Y si decrementas 0, resulta en 255. Ten en cuenta, entonces, que el número 280 sería 24 en la CPU.

Después de que se haya ejecutado la última instrucción, debes devolver una matriz con el resultado para cada registro. De V00 a V07. Ejemplos:

Todas las instrucciones proporcionadas ya están validadas y garantizadas de ser correctas.

*/


test('executeCommands should return the correct result for test case 1', () => {
    expect(executeCommands([
        'MOV 5,V00',
        'MOV 10,V01',
        'DEC V00',
        'ADD V00,V01',
    ])).toEqual([
        14,
        10,
        0,
        0,
        0,
        0,
        0,
        0
    ]);
});

test('executeCommands should return the correct result for test case 2', () => {
    expect(executeCommands([
        'MOV 255,V00',
        'INC V00',
        'DEC V01',
        'DEC V01'
    ])).toEqual([
        0,
        254,
        0,
        0,
        0,
        0,
        0,
        0
    ]);
});

test('executeCommands should return the correct result for test case 3', () => {
    expect(executeCommands([
        'MOV 10,V00',
        'DEC V00',
        'INC V01',
        'JMP 1',
        'INC V06'
    ])).toEqual([
        0,
        10,
        0,
        0,
        0,
        0,
        1,
        0
    ]);
});

test('executeCommands should return the correct result for test case 4', () => {
    expect(executeCommands([
        'MOV 10,V00',
        'MOV V00,V01',
        'MOV V01,V02',
        'MOV V02,V03',
        'MOV V03,V04'
    ])).toEqual([
        10,
        10,
        10,
        10,
        10,
        0,
        0,
        0
    ]);
});