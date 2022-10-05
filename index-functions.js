document.querySelectorAll("button").forEach(item => { item.addEventListener("click",function( ){}) })


$("button").click(function () { console.log("teste")});


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")} , 100);
    
}
