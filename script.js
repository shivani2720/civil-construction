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
       
