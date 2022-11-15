function PreRender(){
  
  ctx = Canvas.getContext("2d");
  
  player ={
    CX: 20,
    CY: 20,
    mx: 0,
    my: 0,
   speed: 0,
   tamañoWidth: tamañoW/Math.PI-200,
   tamañoHeigth: tamañoH/Math.PI-100
    
  }
   
   bola ={
     CX: tamañoW,
     CY: tamañoH,
     mx: 0,
     my: 0,
     speed: 0,
    gradosInico: 0,
    gradosFinal: (Math.PI/180)*180,
    radio: 50
    

  }
  console.log("Tamaño "+bola.radio)
  
  Render()
  
}


function Render(){
  //Frame por segundo
  //frameInicio = performance.now()
  ctx.clearRect(0,0,tamañoW,tamañoH)
 
  ctx.fillRect(20, 20, player.tamañoWidth,player.tamañoHeigth)
  
  ctx.beginPath()
  ctx.strokeStyle = "orange";
  ctx.arc(500,500,bola.radio,bola.gradosInico,bola.gradosFinal,true)
  ctx.stroke()
  
 //frameFinal = performance.now()
 //console.log(1000/(frameFinal-frameInicio));
  window.requestAnimationFrame(Render)
}
