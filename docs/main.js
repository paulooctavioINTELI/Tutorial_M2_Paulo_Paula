const carreira = document.getElementById('carreira')
const pessoal = document.getElementById('pessoal')
const button = document.getElementsByClassName('info-btn')

var toggle = true

function showPessoal () {
    if (toggle) {
        carreira.style.display = 'none'
        pessoal.style.width = '100%'
        pessoal.style.opacity = '100%'
        toggle = !toggle
    } else {
        carreira.style.display = 'flex'
        pessoal.style.width = '0%'
        pessoal.style.opacity = '0%'
        toggle = !toggle
    }
}