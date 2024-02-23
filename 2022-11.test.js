import {test, expect} from 'vitest'

function getCompleted(timeElapsed, totalTime) {
    const [h1, m1, s1] = timeElapsed.split(':')
    const [h2, m2, s2] = totalTime.split(':')
    let elapsed = h1 * 3600 + m1 * 60 + s1
    let total = h2 * 3600 + m2 * 60 + s2

    if(elapsed==0) return '0/1'
    if(elapsed==total) return '1/1'

    for(let i=elapsed; i>0;i-- )   {
        if(elapsed%i==0 && total%i==0) {
            elapsed=elapsed/i
            total=total/i

            break
        }
    }
    
    return elapsed.toString() + '/' + total.toString();
}

test('getCompleted debería devolver la fracción de completado correcta', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toBe('1/3');
});

test('getCompleted debería devolver la fracción de completado correcta', () => {
    expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2');
});

test('getCompleted debería devolver la fracción de completado correcta', () => {
    expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1');
});

test('getCompleted debería devolver la fracción de completado correcta', () => {
    expect(getCompleted('00:10:00', '01:00:00')).toBe('1/6');
});

test('getCompleted debería devolver la fracción de completado correcta', () => {
    expect(getCompleted('01:10:10', '03:30:30')).toBe('1/3');
});

test('getCompleted debería devolver la fracción de completado correcta', () => {
    expect(getCompleted('03:30:30', '05:50:50')).toBe('3/5');
});

test('getCompleted debería devolver "0/1" si el tiempo transcurrido es 0', () => {
    expect(getCompleted('00:00:00', '01:00:00')).toBe('0/1');
});

test('getCompleted debería devolver "0/1" si el tiempo transcurrido es 0', () => {
    expect(getCompleted('00:00:00', '02:00:00')).toBe('0/1');
});

test('getCompleted debería devolver "0/1" si el tiempo transcurrido es 0', () => {
    expect(getCompleted('00:00:00', '03:00:00')).toBe('0/1');
});

test('getCompleted debería devolver "1/1" si el tiempo transcurrido es igual al tiempo total', () => {
    expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1');
});

test('getCompleted debería devolver "1/1" si el tiempo transcurrido es igual al tiempo total', () => {
    expect(getCompleted('02:00:00', '02:00:00')).toBe('1/1');
});

test('getCompleted debería devolver "1/1" si el tiempo transcurrido es igual al tiempo total', () => {
    expect(getCompleted('03:00:00', '03:00:00')).toBe('1/1');
});

test('getCompleted debería devolver "1/2" si el tiempo transcurrido es la mitad del tiempo total', () => {
    expect(getCompleted('01:00:00', '02:00:00')).toBe('1/2');
});

test('getCompleted debería devolver "1/2" si el tiempo transcurrido es la mitad del tiempo total', () => {
    expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2');
});

test('getCompleted debería devolver "1/2" si el tiempo transcurrido es la mitad del tiempo total', () => {
    expect(getCompleted('03:00:00', '06:00:00')).toBe('1/2');
});
