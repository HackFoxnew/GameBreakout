d = document;

tamañoW = innerWidth
tamañoH = innerHeight




function Init(){
 Canvas = d.getElementById("Canvas");
 Canvas.width = tamañoW;
 Canvas.height = tamañoH;
 
 PreRender()
}

addEventListener("resize",function Resize(){
  
  
//Ajustando ventana  
 tamañoW = innerWidth;
 tamañoH = innerHeight;
 Canvas.width = tamañoW;
 Canvas.height = tamañoH;
 
 
  
})
