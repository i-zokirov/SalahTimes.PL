const DOMElement = document.getElementById('datafromAPI')
const cityOptions = document.getElementById('cityOptions')

const loadDataFromAPI = async(city = "warsaw") => {
    try {
        const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Poland&method=99&methodSettings=12,null,12&tune=0,-1,0,0,0,0,0,0,0`)
        const timings = response.data.data.timings
        const date = response.data.data.date
        const metaData = response.data.data.meta
        console.log(date)
        renderDataToDOM(timings, date, metaData)
    } catch (error) {
        console.log(error)
    }
}

window.onload = loadDataFromAPI()

cityOptions.addEventListener('change', (e) => {
    loadDataFromAPI(cityOptions.value)
})

const renderDataToDOM = (timings, date, meta) => {

    DOMElement.innerHTML =
        `
        <div class="col-sm-6">
              <div class="pry_card tm-color-primary">
                    <div class="card_right">
                        <div class="card-left" style="background-color: #0cc;">
                            <h2><i class="far fa-calendar-alt"></i></h2>

                        </div>
                        <div class="card-right">
                            <h5>${date.gregorian.weekday.en}, ${date.gregorian.day} ${date.gregorian.month.en} ${date.gregorian.year}</h5>                            
                            <h6>${date.hijri.weekday.en}, ${date.hijri.day} ${date.hijri.month.en} ${date.hijri.year}</h6>
                        </div>
                    </div>
                </div>

                <div class="pry_card tm-color-primary">
                    <div class="card_right">
                        <div class="card-left" style="background-color: #eec766;">
                            <h2> <img src="/img/sunrise.png" width="60px" alt="Fajr"> </h2>

                        </div>
                        <div class="card-right">
                            <h4>Fajr: ${timings.Fajr}</h4>          
                            <h6><br><span>Sunrise: ${timings.Sunrise}</span><img src="/img/sunrise_x24.png" alt="">
                           </h6>
                        </div>
                    </div>
                </div>

                <div class="pry_card tm-color-primary">
                    <div class="card_right">
                        <div class="card-left" style="background-color: #FFDB00;">
                            <h2> <img src="/img/sun3.png" width="60px" alt="Dhuhr"> </h2>

                        </div>
                        <div class="card-right">
                            <h4>Dhuhr: ${timings.Dhuhr}</h4>                     
                        </div>
                    </div>
                </div>

                </div>

                <div class="col-sm-6">

                <div class="pry_card tm-color-primary">
                    <div class="card_right">
                        <div class="card-left" style="background-color: #EE9666;">
                            <h2> <img src="/img/sunset.png" width="60px" alt="Asr"> </h2>

                        </div>
                        <div class="card-right">
                            <h4>Asr: ${timings.Asr}</h4>                    
                            <h6>
                            <br><span>Sunset: ${timings.Sunset}</span><img src="/img/sunset_x24.png" alt=""></</h6>
                        </div>
                    </div>
                </div>

                <div class="pry_card tm-color-primary">
                    <div class="card_right">
                        <div class="card-left" style="background-color: #0CC;">
                            <h2> <img src="/img/moonrise.png" width="60px" alt="Maghrib"> </h2>

                        </div>
                        <div class="card-right">
                            <h4>Maghrib: ${timings.Maghrib}</h4>
                        </div>
                    </div>
                </div>

                <div class="pry_card tm-color-primary">
                    <div class="card_right">
                        <div class="card-left" style="background-color: #8d8d8d;">
                            <h2> <img src="/img/night.png" width="60px" alt="Isha"> </h2>
                        </div>
                        <div class="card-right">
                            <h4>Isha: ${timings.Isha}</h4>                        
                        </div>
                    </div>
                </div>

                </div>
                
                <h6 class="text-center tm-color-primary">${meta.method.name} || Timezone: ${meta.timezone}</h6>
`
}

document.getElementById('ramadhan').classList.remove('active')
document.getElementById('asmaulhusna').classList.remove('active')
document.getElementById('home').classList.add('active')