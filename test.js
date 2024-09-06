

let btnContainer = document.querySelector(".container1");
let images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pCsH028VovL9WCoxuU1BH1POxJVmR5MKag&usqp=CAU",
            "https://www.how-to-draw-funny-cartoons.com/images/cartoon-motorcycle-7.gif",
            "https://t3.ftcdn.net/jpg/02/68/17/14/360_F_268171433_jsoYDw9vLoDLtCg86CFyhLJ3fKmsVqN5.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/ea/Small_Blue_Car_Animation.png",
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63876/blue-car-clipart-md.png",
            "https://thumbs.dreamstime.com/b/casual-group-standing-young-people-outfit-together-126000367.jpg"]
console.log(images)
console.log(images[3])
// Get all buttons with class="btn" inside the container
let btns = document.querySelectorAll(".bt");
// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log(images[i])
    document.querySelector(".ones").src =images[i];
    
    
  });
}
function alertt(){
  for(let v=0;v<btns.length;v++){
    if(btns[i].className==="bt active"){
      window.alert(`you selected ${i} tickets`);
    }
  }
}