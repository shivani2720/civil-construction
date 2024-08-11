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



//   --------------------------mouse move event for service section ------------------//


if(window.outerWidth > 992) {
  console.log(window.outerWidth);


function setupHoverEffects(hoverAreaId, hoverImageId, offsetXPercent, offsetYPercent) {
  var hoverArea = document.getElementById(hoverAreaId);
  var hoverImage = document.getElementById(hoverImageId);

  hoverArea.addEventListener("mousemove", (e) => {
    var rect = hoverArea.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    // Calculate the position as a percentage of the hover area size
    var hoverAreaWidth = hoverArea.offsetWidth;
    var hoverAreaHeight = hoverArea.offsetHeight;

    var offsetX = (offsetXPercent / 100) * hoverAreaWidth;
    var offsetY = (offsetYPercent / 100) * hoverAreaHeight;

    hoverImage.style.left = `${x + offsetX}px`;
    hoverImage.style.top = `${y + offsetY}px`;
  });

  hoverArea.addEventListener("mouseenter", () => {
    hoverImage.style.opacity = "1";
    hoverImage.style.transform = "scale(1)";
  });

  hoverArea.addEventListener("mouseleave", () => {
    hoverImage.style.opacity = "0";
    hoverImage.style.transform = "scale(0)";
  });
}


setupHoverEffects("hoverArea", "hoverImage", 40, 66); // 20% offsets
setupHoverEffects("hoverArea1", "hoverImage1", 150, 66);
setupHoverEffects("hoverArea2", "hoverImage2", 260, 66);
setupHoverEffects("hoverArea3", "hoverImage3", 40, 176);
setupHoverEffects("hoverArea4", "hoverImage4", 150, 176);
setupHoverEffects("hoverArea5", "hoverImage5", 260, 176);
setupHoverEffects("hoverArea6", "hoverImage6", 95, 286);
setupHoverEffects("hoverArea7", "hoverImage7", 205, 286);


}



// --------------------video playbutton------------------------ //
var videobtn=document.getElementById("videobtn")
videobtn.addEventListener("click" , ()=>{
    var video=document.getElementById("video");
          video.play();
          videobtn.style.display="none";

})
var video=document.getElementById("video");
video.addEventListener("click", ()=>{
  var video=document.getElementById("video");
  video.pause();
  videobtn.style.display="block";

});

// --------------------------- offcanvas---------------------------//
var abc = document.getElementById("abc");
var boddy = document.getElementById("body");
function bar(){
  const offcanvassId=document.getElementById("offcanvass-Id");
  offcanvassId.style.left="0%";
  offcanvassId.classList.add("offcanvassanimate");
 
  abc.style.filter="blur(1px)";


 
}
function closea(){
  const offcanvassId=document.getElementById("offcanvass-Id");
  var closea=document.querySelectorAll(".closea");
  offcanvassId.style.left="-100%";
  abc.style.filter="blur(0px)";
  offcanvassId.classList.remove("offcanvassanimate");


}


function mobilebar(){
  const offcanvassId=document.getElementById("offcanvassMobile");

  offcanvassId.style.right="0%";
}

function mobilebarClose(){
  const offcanvassId=document.getElementById("offcanvassMobile");

  offcanvassId.style.right="-100%";
}





// ----------------scroll button here------------//

var scroll=document.querySelector(".scroll");
window.addEventListener("scroll", ()=>{

if(window.pageYOffset > 300){
scroll.style.opacity="1";
}else{
  scroll.style.opacity="0";

}
  
})
scroll.addEventListener("click", ()=>{
window.scrollTo({
  top:0,
  behaviour:"smooth"
})
})
