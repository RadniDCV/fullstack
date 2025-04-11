document.addEventListener("DOMContentLoaded", ()=>{
    const links = document.querySelectorAll("nav ul li a[data-dynamic]")

    links.forEach(link =>{
        link.addEventListener("click",(e)=>{
            e.preventDefault();
            const url = link.getAttribute("href")
            loadContent(url);
        })
    
})

function loadContent(url){
    fetch(url)
        .then(response =>{
            if(!response.ok){
                throw new Error("Error al cargar la pagina")
            }
            return response.text();
        })
        .then(html =>{
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html")

            const newOverlayContent = doc.querySelector(".overlay")

            const currentOverlay = document.querySelector(".overlay")

            if (newOverlayContent && currentOverlay){
                currentOverlay.innerHTML = newOverlayContent.innerHTML;
            }else{
                currentOverlay.innerHTML = "<p>Error: No se encontro el contenido.</p>"
            }
        })
            .catch(error =>{
                console.error("Error:", error)
                document.querySelector(".overlay").innerHTML = "<p> Error al cargar el contenido</p>"
            })
        }
    })