const elements = document.getElementById("dodger")
element.addEventlistener('keydown', (event)=>{
  console.log(event)
if  (event.which === 37) {
  event.style.backgroundColor = "yellow"
}
})