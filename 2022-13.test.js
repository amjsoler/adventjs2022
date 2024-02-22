import {test, expect} from 'vitest'

const getFilesToBackup = (lastBackup, changes) => {
    //Ordeno el array de cambios por id
    changes.sort((a, b) => a[0] - b[0])

    //Filtro los cambios que son posteriores al último backup
    changes = changes.filter(change => change[1] > lastBackup)

    //Mapeo el array de cambios para quedarme solo con los ids
    return [...new Set(changes.map(change => change[0]))]
}

const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

test('getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]', () => {
    expect(getFilesToBackup(lastBackup, changes)).toEqual([ 1, 3 ])
})

test('getFilesToBackup(1546300600, changes) // => [ 1, 2, 3 ]', () => {
    expect(getFilesToBackup(1546300600, changes)).toEqual([ 1, 2, 3 ])
})

test('getFilesToBackup(1556300600, changes) // => []', () => {
    expect(getFilesToBackup(1556300600, changes)).toEqual([])
})

test('getFilesToBackup(1556300600, []) // => []', () => {
    expect(getFilesToBackup(1556300600, [])).toEqual([])
})
