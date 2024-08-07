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



window.onload=function(){
document.getElementById("abc").style.display="block";
document.getElementById("loader").style.display="none";;

}


//   --------------------------mouse move ------------------//
var serviceHover=document.getElementById("mouse1");
  var serviceImg=document.getElementById("service1");

serviceHover.addEventListener("mousemove" ,(e)=>{
 var x=e.clientX-160;
 var y=e.clientY-160;
  console.log(x);
  console.log(y);
  serviceImg.style.top=`${y}px`;
  serviceImg.style.left=`${x}px`;
})

serviceHover.addEventListener("mouseenter" ,()=>{
  serviceImg.style.opacity="1";
  serviceImg.style.transform="scale(1)"
})

serviceHover.addEventListener("mouseout" ,()=>{
  serviceImg.style.opacity="0";
  serviceImg.style.transform="scale(0)"

})

var serviceHover2=document.getElementById("mouse2");
  var serviceImg2=document.getElementById("service2");

serviceHover2.addEventListener("mousemove" ,(e)=>{
 var x=e.clientX-160;
 var y=e.clientY-160;
  console.log(x);
  console.log(y);
  serviceImg2.style.top=`${y}px`;
  serviceImg2.style.left=`${x}px`;
})

serviceHover2.addEventListener("mouseenter" ,()=>{
  serviceImg2.style.opacity="1";
  serviceImg2.style.transform="scale(1)"
})

serviceHover2.addEventListener("mouseout" ,()=>{
  serviceImg2.style.opacity="0";
  serviceImg2.style.transform="scale(0)"

})

// var serviceHover=document.getElementById("mouse3");
//   var serviceImg=document.getElementById("service3");

// serviceHover.addEventListener("mousemove" ,(e)=>{
//  var x=e.clientX-160;
//  var y=e.clientY-160;
//   console.log(x);
//   console.log(y);
//   serviceImg.style.top=`${y}px`;
//   serviceImg.style.left=`${x}px`;
// })

// serviceHover.addEventListener("mouseenter" ,()=>{
//   serviceImg.style.opacity="1";
//   serviceImg.style.transform="scale(1)"
// })

// serviceHover.addEventListener("mouseout" ,()=>{
//   serviceImg.style.opacity="0";
//   serviceImg.style.transform="scale(0)"

// })

// var serviceHover=document.getElementById("mouse4");
//   var serviceImg=document.getElementById("service4");

// serviceHover.addEventListener("mousemove" ,(e)=>{
//  var x=e.clientX-160;
//  var y=e.clientY-160;
//   console.log(x);
//   console.log(y);
//   serviceImg.style.top=`${y}px`;
//   serviceImg.style.left=`${x}px`;
// })

// serviceHover.addEventListener("mouseenter" ,()=>{
//   serviceImg.style.opacity="1";
//   serviceImg.style.transform="scale(1)"
// })

// serviceHover.addEventListener("mouseout" ,()=>{
//   serviceImg.style.opacity="0";
//   serviceImg.style.transform="scale(0)"

// })

// var serviceHover=document.getElementById("mouse5");
//   var serviceImg=document.getElementById("service5");

// serviceHover.addEventListener("mousemove" ,(e)=>{
//  var x=e.clientX-160;
//  var y=e.clientY-160;
//   console.log(x);
//   console.log(y);
//   serviceImg.style.top=`${y}px`;
//   serviceImg.style.left=`${x}px`;
// })

// serviceHover.addEventListener("mouseenter" ,()=>{
//   serviceImg.style.opacity="1";
//   serviceImg.style.transform="scale(1)"
// })

// serviceHover.addEventListener("mouseout" ,()=>{
//   serviceImg.style.opacity="0";
//   serviceImg.style.transform="scale(0)"

// })

// var serviceHover=document.getElementById("mouse6");
//   var serviceImg=document.getElementById("service6");

// serviceHover.addEventListener("mousemove" ,(e)=>{
//  var x=e.clientX-160;
//  var y=e.clientY-160;
//   console.log(x);
//   console.log(y);
//   serviceImg.style.top=`${y}px`;
//   serviceImg.style.left=`${x}px`;
// })

// serviceHover.addEventListener("mouseenter" ,()=>{
//   serviceImg.style.opacity="1";
//   serviceImg.style.transform="scale(1)"
// })

// serviceHover.addEventListener("mouseout" ,()=>{
//   serviceImg.style.opacity="0";
//   serviceImg.style.transform="scale(0)"

// })

// var serviceHover=document.getElementById("mouse7");
//   var serviceImg=document.getElementById("service7");

// serviceHover.addEventListener("mousemove" ,(e)=>{
//  var x=e.clientX-160;
//  var y=e.clientY-160;
//   console.log(x);
//   console.log(y);
//   serviceImg.style.top=`${y}px`;
//   serviceImg.style.left=`${x}px`;
// })

// serviceHover.addEventListener("mouseenter" ,()=>{
//   serviceImg.style.opacity="1";
//   serviceImg.style.transform="scale(1)"
// })

// serviceHover.addEventListener("mouseout" ,()=>{
//   serviceImg.style.opacity="0";
//   serviceImg.style.transform="scale(0)"

// })

// var serviceHover=document.getElementById("mouse8");
//   var serviceImg=document.getElementById("service8");

// serviceHover.addEventListener("mousemove" ,(e)=>{
//  var x=e.clientX-160;
//  var y=e.clientY-160;
//   console.log(x);
//   console.log(y);
//   serviceImg.style.top=`${y}px`;
//   serviceImg.style.left=`${x}px`;
// })

// serviceHover.addEventListener("mouseenter" ,()=>{
//   serviceImg.style.opacity="1";
//   serviceImg.style.transform="scale(1)"
// })

// serviceHover.addEventListener("mouseout" ,()=>{
//   serviceImg.style.opacity="0";
//   serviceImg.style.transform="scale(0)"

// })



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