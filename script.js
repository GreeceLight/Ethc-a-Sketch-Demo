const containerDiv = document.querySelector('#container');

createBoxs(prompt('Enter a number!'));

const allBoxs = document.querySelectorAll('.box');
allBoxs.forEach(box => box.addEventListener('mouseover', ()=>{
    box.classList.add('boxhover');
}))

function createBoxs(num){
    realNum = num;
    num = num**2;
    for(let i = 1; i<=num; i++){
        const nextBox = document.createElement("div");

        nextBox.classList.add('box');
        nextBox.style.padding = (960 / realNum)/2 + "px";

        containerDiv.appendChild(nextBox)
    }
}
