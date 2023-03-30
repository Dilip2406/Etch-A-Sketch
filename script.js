const div=document.createElement('div');
document.body.appendChild(div);
div.classList.add("main");
div.textContent="Etch-A-Sketch";

const div1=document.createElement('div');
div1.classList.add("button");
const button1=document.createElement('button');
const button2=document.createElement('button');
const button3=document.createElement('button');

div1.appendChild(button1);
div1.appendChild(button2);
div1.appendChild(button3);
button1.classList.add("btn");
button1.textContent="Clear";
button2.classList.add("btn");
button2.textContent="Grid size";
button3.classList.add("btn");
button3.textContent="Color";


document.body.appendChild(div1);

const div2=document.createElement('div');
document.body.appendChild(div2);
div2.classList.add("container");

let gridSize=16;
createDiv(gridSize=16)

button2.addEventListener('click',function(){ 
    gridSize=prompt("Enter the number of div(<100):");
    if (gridSize>=100)
    {
        document.location.reload();
    }
    createDiv(gridSize);
})

function createDiv(gridSize)
{
    div2.innerHTML="";
    
    for(let i=1;i<=gridSize*gridSize;i++)
    {
        const cell=document.createElement('div');
        cell.classList.add('cell');
        div2.appendChild(cell);
        cell.setAttribute('id',`${i}`);
        cell.setAttribute('onmouseover','changeColor(this)')
        
        cell.style.cssText = "flex-basis: calc((100%/" + gridSize + ") - 0.000000001%)";

    }
}

let COLOR="grey";

button1.addEventListener('click',()=>{
    div2.innerHTML="";
    createDiv(gridSize=16);
})

button3.addEventListener('click',()=>{
    let RED=Math.round(Math.random()*255);
    let GREEN=Math.round(Math.random()*255);
    let BLUE=Math.round(Math.random()*255);

    COLOR=`rgb(${RED},${GREEN},${BLUE})`;
    console.log(COLOR);
    

})

function changeColor(x){
    x.style.backgroundColor=`${COLOR}`;
}







