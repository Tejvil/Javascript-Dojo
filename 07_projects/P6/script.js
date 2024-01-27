// generarte a random colour

const randomcolor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i=0; i <6; i++){
        color += hex[Math.floor(Math.random ()*16)]
    }
    return color;
};
let intervalId;

const startchangingcolor = function () {
    intervalId = setInterval(changeBgColor, 1000);

    function changeBgColor() {
        document.body.style.backgroundColor = randomcolor();
    }
};

const stopchangingcolor = function () {
    clearInterval(intervalId);
    intervalId = null;  
}

document.querySelector('#start').addEventListener('click',startchangingcolor)
document.querySelector('#stop').addEventListener('click',stopchangingcolor)






