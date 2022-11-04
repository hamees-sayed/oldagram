const like1 = document.querySelector('.heart1')
const like2 = document.querySelector('.heart2')
const like3 = document.querySelector('.heart3')
const likeDisplayVan = document.querySelector('.likeDisplayVan')
const likeDisplayCourbet = document.querySelector('.likeDisplayCourbet')
const likeDisplayDucreux = document.querySelector('.likeDisplayDucreux')

let vangoghLikes = 492
let courbetLikes = 502
let ducreuxLikes = 137

like1.addEventListener('click', () => {
    vangoghLikes++
    likeDisplayVan.textContent = vangoghLikes
})

like2.addEventListener('click', () => {
    courbetLikes++
    likeDisplayCourbet.textContent = courbetLikes
})

like3.addEventListener('click', () => {
    ducreuxLikes++
    likeDisplayDucreux.textContent = ducreuxLikes
})