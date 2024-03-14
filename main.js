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