import {test, expect} from 'vitest'

const countHours = (year, holidays) => {
    const totalHours = holidays.filter(holiday => {
        const [month, day] = holiday.split('/')
        const holidayDate = new Date(year, month - 1, day)
        return holidayDate.getDay() !== 0 && holidayDate.getDay() !== 6
    }).length * 2

    return totalHours
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
test('countHours should return the correct total hours', () => {
    const year = 2022
    const holidays = ['01/06', '04/01', '12/25']
    const result = countHours(year, holidays)
    expect(result).toBe(4)
})