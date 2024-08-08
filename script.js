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
//---------------------------END INTERSECTION OBSERVER-----------  //



// window.onload=function(){
// document.getElementById("abc").style.display="block";
// document.getElementById("loader").style.display="none";;

// }


//   --------------------------mouse move ------------------//

var hoverArea=document.getElementById("hoverArea");
var hoverImage=document.getElementById("hoverImage");

hoverArea.addEventListener("mousemove", (e) => {
  var rect = hoverArea.getBoundingClientRect();
  var x = e.clientX - rect.left + 200;
  var y = e.clientY - rect.top + 200;
  console.log(x);
  console.log(y);
  hoverImage.style.left = `${x}px`;
  hoverImage.style.top = `${y}px`;
});

hoverArea.addEventListener("mouseenter", () => {
  hoverImage.style.opacity = "1";
  hoverImage.style.transform = "scale(1)";
});

hoverArea.addEventListener("mouseleave", () => {
  hoverImage.style.opacity = "0";
  hoverImage.style.transform = "scale(0)";
});





var hoverArea1=document.getElementById("hoverArea1");
var hoverImage1=document.getElementById("hoverImage1");

hoverArea1.addEventListener("mousemove", (e) => {
  var rect = hoverArea1.getBoundingClientRect();
  var x = e.clientX - rect.left + 500;
  var y = e.clientY - rect.top + 200;
  console.log(x);
  console.log(y);
  hoverImage1.style.left = `${x}px`;
  hoverImage1.style.top = `${y}px`;
});

hoverArea1.addEventListener("mouseenter", () => {
  hoverImage1.style.opacity = "1";
  hoverImage1.style.transform = "scale(1)";
});

hoverArea1.addEventListener("mouseleave", () => {
  hoverImage1.style.opacity = "0";
  hoverImage1.style.transform = "scale(0)";
});

var hoverArea2=document.getElementById("hoverArea2");
var hoverImage2=document.getElementById("hoverImage2");

hoverArea2.addEventListener("mousemove", (e) => {
  var rect = hoverArea2.getBoundingClientRect();
  var x = e.clientX - rect.left + 800;
  var y = e.clientY - rect.top + 200;
  console.log(x);
  console.log(y);
  hoverImage2.style.left = `${x}px`;
  hoverImage2.style.top = `${y}px`;
});

hoverArea2.addEventListener("mouseenter", () => {
  hoverImage2.style.opacity = "1";
  hoverImage2.style.transform = "scale(1)";
});

hoverArea2.addEventListener("mouseleave", () => {
  hoverImage2.style.opacity = "0";
  hoverImage2.style.transform = "scale(0)";
});

// video playbutton //
var videobtn=document.getElementById("videobtn")
videobtn.addEventListener("click" , ()=>{
    var video=document.getElementById("video");
          video.play();
          videobtn.style.display="none";

})
var video=document.getElementById("video")
video.addEventListener("click", ()=>{
  var video=document.getElementById("video");
  video.pause();
  videobtn.style.display="block";

});