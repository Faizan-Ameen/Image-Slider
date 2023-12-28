let cards = document.querySelectorAll(".card")
// Image index============
let counter = 0;
// Use to slide images===============

cards.forEach(function(slide , index){
    slide.style.left=`${index *100}%`
})
function myfun(){
 cards.forEach(function(curentvalu){
    curentvalu.style.transform=`translateX(-${counter * 100}%)`
 })
}
setInterval(function(){
    if(counter == cards.length){
        counter=0
    }
    counter++;
myfun()
},1000)