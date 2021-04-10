console.log('Ramadhan page')
const calendarData = document.getElementById('calendarData')
const cityOptions = document.getElementById('cityOptions')



const loadRamadhanCalendarFromApi = async(city = "warsaw") => {
    calendarData.innerHTML = ``
    try {
        const response = await axios.get(`http://api.aladhan.com/v1/hijriCalendarByCity?city=${city}&country=Poland&month=09&year=1442&&method=99&methodSettings=12,null,12&tune=0,-1,0,0,0,0,0,0,0`)
        const rawData = response.data.data
        for (let data of rawData) {
            const { date, timings } = data
            const tRow = document.createElement('tr')
            tRow.innerHTML =
                `
                        <td>${date.gregorian.day}/${date.gregorian.month.en}</td>
                        <th>${timings.Fajr.slice(0, 5)}</td>
                        <td>${timings.Dhuhr.slice(0, 5)}</td>
                        <th>${timings.Asr.slice(0, 5)}</td>
                        <td>${timings.Maghrib.slice(0, 5)}</td>
                        <td>${timings.Isha.slice(0, 5)}</td>
                 `
            calendarData.appendChild(tRow)
        }
    } catch (err) {
        console.log(err)
    }
}
window.onload = loadRamadhanCalendarFromApi()
cityOptions.addEventListener('change', (e) => {
    loadRamadhanCalendarFromApi(cityOptions.value)
    console.log(cityOptions.value)
})

document.getElementById('home').classList.remove('active')
document.getElementById('asmaulhusna').classList.remove('active')
document.getElementById('masjid').classList.remove('active')
document.getElementById('ramadhan').classList.add('active')