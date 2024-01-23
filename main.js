const links = document.getElementsByTagName("a");

const previewWidth = 200;
const previewHeight = 200;
const previewOpacity = 95;


Array.from(links).forEach(link => {
    const iframe = document.createElement("iframe");
    const url = link.href;
    iframe.src = url;
    iframe.style.display = "none";

    iframe.addEventListener("load", function() {
        if(iframe.contentDocument.body){
            iframe.style.position = "absolute";
            iframe.style.width = previewWidth + "px";
            iframe.style.height = previewHeight + "px";
            iframe.style.opacity = previewOpacity + "%";
    
            iframe.contentDocument.body.style.zoom = "25%";
            iframe.contentDocument.body.style.overflow = "hidden";

            iframe.style.display = "block";
        } else {
            iframe.remove();
        }

    });

    link.addEventListener("mouseover", function(e) {
        iframe.style.left = e.pageX + 1 + "px";
        iframe.style.top = e.pageY + 1 + "px";
        document.body.appendChild(iframe);
    });

    link.addEventListener("mouseout", function() {
        setTimeout(function() {
            iframe.remove();
        }, 200);
    });
});
