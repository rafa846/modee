const body = document.body
const button = document.getElementById('btn')
const gambar1 = document.getElementById('gambar-terang')
const gambar2 = document.getElementById('gelap')

gambar2.style.display = "none"
button.addEventListener("click", function () {

    if (body.style.backgroundColor == "black") {
        body.style.backgroundColor = "white";
        button.style.backgroundColor = "black"
        gambar2.style.display = "none"
        gambar1.style.display = "block"
        // gambar1.style.position = "relative"
        gambar1.style.left = "0px"
        button.style.boxShadow = "2px 2px 5px black "


    } else {
        body.style.backgroundColor = "black"
        gambar2.style.display = "block"
        // gambar2.style.position = "relative"
        gambar2.style.left = "30px"
        gambar1.style.display = "none"
        button.style.boxShadow = "2px 2px 5px white "
        button.style.backgroundColor = "white"
    }


});




