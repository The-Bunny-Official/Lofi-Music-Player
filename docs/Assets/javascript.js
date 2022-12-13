let sun = "fa fa-sun-o"
let moon = "fa fa-moon-o"

$(document).ready(function(){
    $(".dmt i").addClass(moon);
    $("*").addClass("light-mode");
})

$(".dmt").click(function(){
    $("*").toggleClass("light-mode");
    $("*").toggleClass("dark-mode");
    $(".dmt i").toggleClass(sun);
    $(".dmt i").toggleClass(moon);
}); 

function stop(){
    alert("Stopped");
}