const elements = document.getElementById("dodger")
element.addEventlistener('keydown', (event)=>{
  console.log(event)
if  (event.which === 37) {
  //"180px"
  let previousLeft = elementevent.style.left 
  //180
  let previousLeftNumber = parseInt(previousLeft.replace("px,"), 10)
  console.log(previousLeftNumber)
}
})