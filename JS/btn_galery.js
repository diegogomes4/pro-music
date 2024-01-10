const galery = [
    "galery/img1.jpg",
    "galery/img2.jpg",
    "galery/img3.jpg",
    "galery/img4.jpg",
    "galery/img5.jpg",
    "galery/img6.jpg"]

let currentIndex = 0
//let voltarIndex = 6


let galeryElement = document.getElementById('image')
let buttonElement = document.getElementById('buttonA')
let voltarElement = document.getElementById('buttonV')



buttonElement.addEventListener('click', function () {
    currentIndex++
    if (currentIndex >= galery.length) {
        currentIndex = 0
    }
    galeryElement.src = galery[currentIndex]
    console.log(currentIndex)
})


voltarElement.addEventListener('click', function () {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = galery.length -1
    }
    galeryElement.src = galery[currentIndex]
    console.log(currentIndex)

})


