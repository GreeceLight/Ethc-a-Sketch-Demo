const containerDiv = document.querySelector('#container');
const tileButton = document.querySelector('#tileButton');

tileButton.addEventListener("click", createBoxs);

function createBoxs(){
    if(document.querySelector('.box')){
        const delBoxs = document.getElementsByClassName('box');
        for(let i = delBoxs.length - 1; i>=0; i--){delBoxs[i].remove();}
    }

    num = prompt('How Many?');
    if (num <= 100){  
        realNum = num;
        num = num**2;
        vmaxCalc =960 / realNum + 'px ';
        gridVmax = vmaxCalc.repeat(realNum);

        for(let i = 1; i<=num; i++){
            const nextBox = document.createElement("div");
            nextBox.classList.add('box');
            
            containerDiv.style.gridTemplateColumns = gridVmax;
            containerDiv.style.gridTemplateRows = gridVmax;

            containerDiv.appendChild(nextBox)
        }
        makeHoverEvent();
    }
}

function getRandInt(){
    return ((Math.floor(Math.random() * (255 - 1 + 1) + 1)).toString());
}

function makeHoverEvent(){
    const allBoxs = document.querySelectorAll('.box');
    allBoxs.forEach(box => box.addEventListener('mouseover', ()=>{
    box.classList.add('boxhover');
    box.style.backgroundColor = `rgb(${getRandInt()}, ${getRandInt()}, ${getRandInt()})`;
}))
}