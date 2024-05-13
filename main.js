
const btnFilter = document.querySelector('.icon-filter')

btnFilter.addEventListener('click', () => {
    const containerFilter = document.querySelector('.container-filters')

    containerFilter.classList.toggle('active')
})

const btnCloseFilter = document.querySelector('.close-filter')
btnCloseFilter.addEventListener('click', () => {
    const containerFilter = document.querySelector('.container-filters')

    containerFilter.classList.toggle('active')
})

// ***********************
// Desaclaracion de objeto
// ***********************
window.Miobjeto={
    Lista:[] //DEFINIR VARIABLES DE OBJECT
}
document.addEventListener("DOMContentLoaded", function() {
    window.Miobjeto.add()
});
