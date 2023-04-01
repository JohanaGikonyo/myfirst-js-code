
        
    function hallo(){
    if(false){
        var date=Date();  
        document.getElementById('demo').innerHTML=Date();
        
    }
    else{
        var time=new Date().getHours()
        var greeting;
        {
            if(time<12){
                greeting="Good Morning"
            }
            else if(time<16){
                greeting="Good Afternoon"

            }
            else{
                greeting="Good Evenning"
            }
        }
        
        document.getElementById('demo').innerHTML=greeting+"! Hope you are doing good this great "+greeting+" on "+ Date();
        console.log("Welcome here to our Website Page");
        
        
    }
}
function hallos(){
    var drop=document.getElementById('dro');
    if(drop.style.display=='none'){
       drop.style.display='block';
    }
    else{
        drop.style.display='none';
    }
}


function age(a, b){
    if(true){
    return a*b;
}
else{
    return a/b;
}
}
document.getElementById("demo1").innerHTML="The owner of this page is current cerebrating his "+age(4, 5)+ "th anniversary.";

function like(){
   var likes=0;
   document.getElementById("demo2").innerHTML=likes+1 +" likes";
    
}
function likes(){
   var likes=0;
   document.getElementById("demo3").innerHTML=likes +" dislikes";
    
}
function guese(){
var age=20;
var guese=prompt("Enter your guese of his age: ");
guese=parseInt(guese);
if(guese===age){
    document.getElementById("demo4").innerHTML="Your guese is write! Congratulations!";
}
else{
    document.getElementById("demo4").innerHTML="Oops! try again next time.";
}
}
var times=new Date().getFullYear();
document.getElementById("demo5").innerHTML="Welcome back, this is year "+times+" on "+Date();

function image(){
    document.getElementById("img").src="./image/pngegg (47).png";
}

function validate(){
    let x=document.forms["myform"] ["Password"].value;
    if(isNaN(x) || x>1000000|| x<1000){
        alert("Wrong Password! Please retry again! It is either your password is not a number or is greater than 100000")
    }
    else{
        alert("The password is correct.Proceed to the next steps? Press ok")
    }
}