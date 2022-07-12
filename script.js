const containerDiv = document.querySelector('#container');
const containerDivCSS = document.getElementById('container')

createBoxs(prompt('Enter a number!'));

const allBoxs = document.querySelectorAll('.box');

allBoxs.forEach(box => box.addEventListener('mouseover', ()=>{
    box.classList.add('boxhover');
}))

function createBoxs(num){
    newWidth = num * 40;
    containerDivCSS.style.width = newWidth + 'px';
    num = num**2;
    for(let i = 1; i<=num; i++){
        const nextBox = document.createElement("div");

        nextBox.classList.add('box');

        containerDiv.appendChild(nextBox)
    }
}
