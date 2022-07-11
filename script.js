const containerDiv = document.querySelector('#container');

createBoxs(16);

function createBoxs(num){
    num = num**2
    for(let i = 1; i<=num; i++){
        const nextBox = document.createElement("div");

        nextBox.classList.add('box');

        containerDiv.appendChild(nextBox)
    }
}
