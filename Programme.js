let i=document.getElementsById("questions1").getElementsByTagName("li");


i.addEventListener("mouseover",function(event){
    event.target.style.color="red";
    event.nextSibling.style.display="block";

    setTimeout(function(){
        event.target.style.color="";
    },500);
},false);