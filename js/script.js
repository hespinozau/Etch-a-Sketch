//Etch-a-Sketch:
//1. Funcion que genere una red de cuadros(div) hasta de 64 cuadros de lado.
//el tamaño del contenedor no varia, solo varia el tamaño de cada cuadro.
const container= document.querySelector('#container');
const body= document.querySelector('body');
body.style.cssText='display:grid; justify-content: space-evenly';
function grid(numSquaresSide){
    for(let j=0;j<numSquaresSide;j++){

        for(let i=0;i<numSquaresSide;i++){
            const square = document.createElement('div')
                square.classList.add('square')
                container.appendChild(square);
            square.onmouseenter= () => square.style.backgroundColor= 'black';
            
            

            
        }
    }
    
    container.style.cssText=`background-color: yellow;
            border: 2px solid red;
            border-radius: 5px;
            padding: 10px; 
            height: 500px; 
            width: 500px; 
            display: inline-grid; 
            grid-template-columns: repeat(${numSquaresSide},1fr); 
            align-content: space-evenly; 
            grid-template-rows: repeat(${numSquaresSide},1fr)`;
    
    }

grid(64)
//function hoverEtch