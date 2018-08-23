const elements = document.getElementById("dodger")

element.addEventlistener('keydown', (event)=>{
  console.log(event)
if(event,which ===37){

  //"180px"
  let previousLeft = element.style.left
  
  //180
  let previousLeftNumber = parseInt(previousLeft.replace("px,"), 10)
  if (previousLeftNumber>0) {
  let newLeftNumber = (previousLeftNumber - 15) + "px"
  element.style.left = newLeftNumber
  }
}
})

function moveDodgerRight(event) {
  document.addEventlistener("keydown", (event) => {
  if (event.which === 39) {
  let previousRight = element.style.left
  
  //180
  let previousRightNumber = parseInt(previousRight.replace("px,"), 10)
  if (previousRightNumber > 360) {
  let newRightNumber = (previousRightNumber + 1) + "px"
  element.style.left = newRightNumber
  }
}

})
}
document.addEventlistener('DOMContentLoaded', )
    
