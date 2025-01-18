var istatus = document.querySelector("h5")
var addfriend = document.querySelector("#add")
var value = 0
addfriend.addEventListener("click", function(){
    if(value == 0){
         istatus.innerHTML = "Friends"
         istatus.style.color = "green"
         addfriend.innerHTML = "Remove Friend"
         value = 1
    } 
    else{
           istatus.innerHTML = "Stranger"
           istatus.style.color = "red"
         addfriend.innerHTML = "Add Friend"

           value = 0
        }

})
