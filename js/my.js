function changeImage(idImage) {
    let idImageClick = idImage.slice(6, 7)
    let srcImageCurrent = document.getElementById(idImage).src;
    let nameImage = srcImageCurrent.slice(41, 46);
    if (nameImage === 'funny') {
        document.getElementById(idImage).src = 'images/monkey_part' + idImageClick + 'x1.jpg';
    } else if (nameImage === 'panda') {
        document.getElementById(idImage).src = 'images/funny-cat1_part' + idImageClick + 'x1.jpg';
    } else {
        document.getElementById(idImage).src = 'images/panda_swap_part' + idImageClick + 'x1.jpg';
    }
    checkWin();
}

function checkWin() {
    let nameImage1 = document.getElementById("image-1").src.slice(41, 46);
    let nameImage2 = document.getElementById("image-2").src.slice(41, 46);
    let nameImage3 = document.getElementById("image-3").src.slice(41, 46);
    let nameImage4 = document.getElementById("image-4").src.slice(41, 46);
    let nameImage5 = document.getElementById("image-5").src.slice(41, 46);

    if (nameImage1 == nameImage2
        && nameImage2 == nameImage3
        && nameImage3 == nameImage4
        && nameImage4 == nameImage5) {
        document.getElementById("container").style.border = "2px solid red";
    } else {
        document.getElementById("container").style.border = "none";
    }

}
