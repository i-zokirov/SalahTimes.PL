const firstPart = document.getElementById('firstPart')
const secondPart = document.getElementById('secondPart')
const loadAsmaFromAPI = async() => {

    try {
        const response = await axios.get(`http://api.aladhan.com/asmaAlHusna`)
        const asmah = response.data.data
        renderAsmahToDOM(asmah)
    } catch (e) {
        console.log(e)
    }


}

const renderAsmahToDOM = (asmah) => {
    for (let i = 0; i < 50; i++) {
        const div = document.createElement('div')
        div.innerHTML =
            ` 
            
            <div class="asma-card">
                <div class="asma text-center">
                    <h4>${asmah[i].name} - ${asmah[i].transliteration}</h4>
                    <h6>${asmah[i].en.meaning}</h6>
                    <h6>${asmah[i].number}</h6>
                </div>
            </div>    
            `
        div.classList.add('pry_card', 'tm-color-primary')
        firstPart.appendChild(div)
    }

    for (let i = 50; i < 99; i++) {
        const div = document.createElement('div')
        div.innerHTML =
            ` 
            <div class="asma-card">
                <div class="asma text-center">
                    <h4>${asmah[i].name} - ${asmah[i].transliteration}</h4>
                    <h6>${asmah[i].en.meaning}</h6>
                    <h6>${asmah[i].number}</h6>
                </div>
            </div>    
            `
        div.classList.add('pry_card', 'tm-color-primary')
        secondPart.appendChild(div)
    }
}

window.onload = loadAsmaFromAPI()

document.getElementById('home').classList.remove('active')
document.getElementById('ramadhan').classList.remove('active')
document.getElementById('asmaulhusna').classList.add('active')