const containerDiv = document.querySelector('#container');
const tileButton = document.querySelector('#tileButton');

tileButton.addEventListener("click", createBoxs);

function createBoxs(){
    if(document.querySelector('.box')){
        const delBoxs = document.getElementsByClassName('box');
        for(let i = delBoxs.length - 1; i>=0; i--){delBoxs[i].remove();}
    }

    num = prompt('How Many?');
    if (num < 100){  
        realNum = num;
        num = num**2;
        for(let i = 1; i<=num; i++){
            const nextBox = document.createElement("div");
            nextBox.classList.add('box');

            boxPadding = (960 / realNum);
            // nextBox.style.padding = boxPadding + "px";
            
            vmaxCalc =boxPadding + 'px ';
            vmaxVar = vmaxCalc.repeat(realNum);
            console.log(vmaxVar);

            containerDiv.style.gridTemplateColumns = vmaxVar;
            containerDiv.style.gridTemplateRows = vmaxVar;
            console.log(boxPadding);
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