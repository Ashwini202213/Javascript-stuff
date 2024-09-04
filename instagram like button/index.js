// Ashwini@accenture2024


var con=document.querySelector('.container')

var heart_icon2=document.querySelector('.heart_icon')
var heart_icon=document.querySelector('.container > i')
let check=0;

con.addEventListener('dblclick',function(){
heart_icon.style.transform='translate(-50%,-50%) scale(1)'
// heart_icon2.style.color='red'
// console.log('Hello dblclick');

setTimeout(function(){
    heart_icon.style.transform='translate(-50%,-50%) scale(0)'
},1000)

})


heart_icon2.addEventListener('dblclick',function(){
    if(check==0){
        heart_icon2.style.color='red'
        check=1
    }
    else{
        heart_icon2.style.color='black'
        check=0
    }
})


heart_icon2.addEventListener('click',function(){
    if(check==1){
        heart_icon2.style.color='black'
        check=0
    }
}
)
