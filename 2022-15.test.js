import {test, expect} from 'vitest'

function decorateTree (base) {
   base = base.replaceAll(" ", "")
   if(base.length === 1) return base
   else{
      let nuevaFila = ""

      for(let i = 0; i < base.length-1; i++){
         if(base[i] === base[i+1]){
            nuevaFila += base[i]
         }
         else if(base[i] === 'P' && base[i+1] === 'B'){
         nuevaFila += 'R'
         }

         else if(base[i] === 'B' && base[i+1] === 'P'){
            nuevaFila += 'R'
         }

         else if(base[i] === 'R' && base[i+1] === 'P'){
            nuevaFila += 'B'
         }

         else if(base[i] === 'P' && base[i+1] === 'R'){
            nuevaFila += 'B'
         }

         else if(base[i] === 'B' && base[i+1] === 'R'){
            nuevaFila += 'P'
         }

         else if(base[i] === 'R' && base[i+1] === 'B'){
            nuevaFila += 'P'
         }
      }

      return [...decorateTree(nuevaFila), base.split("").join(" ")]
   }
}

test('decorateTree should return the correct tree decoration', () => {
   expect(decorateTree('B P R P')).toEqual([
      'R',
      'P B',
      'R B B',
      'B P R P'
   ]);
   expect(decorateTree('B B')).toEqual(['B', 'B B']);
});
