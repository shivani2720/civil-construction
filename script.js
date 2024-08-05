// --------------START SCRIPT FOR NAVIGATION BAR----------------------------//
            var nav=document.getElementById("nav");
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=()=>{
                if(xhr.readyState==4 && xhr.status==200){
                    var data=xhr.responseText;
                  nav.innerHTML=data;
                }
            }
            xhr.open("GET","nav.html", true);
            xhr.send();
// --------------END SCRIPT FOR NAVIGATION BAR----------------------------//
// --------------START SCRIPT FOR FOOTER SECTION ----------------------------//
var footer=document.getElementById("footer");
var xhrFooter=new XMLHttpRequest();
xhrFooter.onreadystatechange=()=>{
    if(xhrFooter.readyState==4 && xhrFooter.status==200){
        var data=xhrFooter.responseText;
      footer.innerHTML=data;
    }
}
xhrFooter.open("GET","fotter.html", true);
xhrFooter.send();

// --------------END SCRIPT FOR FOOTER SECTION ----------------------------//
       
/* ---------------------------INTERSECTION OBSERVER-----------  */
var about= document.querySelectorAll(".about1");

about.forEach(text =>{

    var observer=new IntersectionObserver(element =>{
            element.forEach(es =>{

              if(es.isIntersecting){
                    text.classList.add("new-about");
              }
              else{
                        text.classList.remove("new-about");
              }
            })

    })

    observer.observe(text);
})
/* ---------------------------END INTERSECTION OBSERVER-----------  */



window.onload=function(){
document.getElementById("abc").style.display="block";
document.getElementById("loader").style.display="none";;

}