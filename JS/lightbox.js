const imagenes = document.querySelectorAll(".img-galeria")
const imagenesLight = document.querySelector(".agregar-imagen")
const contenedorLinght = document.querySelector(".imagen-light")
const hamburguer2 = document.querySelector(".hamburguer");

//console.log(imagenes)
//console.log(imagenesLight)
//console.log(contenedorLinght) 

imagenes.forEach(imagen =>{
    imagen.addEventListener("click",()=>{
        //alert("Accion null")
        aparecerImagen(imagen.getAttribute("src"))
       
    })
})
contenedorLinght.addEventListener("click",(e)=>{ 
      if(e.target !== imagenesLight){
        contenedorLinght.classList.toggle("show")
        imagenesLight.classList.toggle("showImage")  
        hamburguer2.style.opacity = "1"
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLinght.classList.toggle("show")
    imagenesLight.classList.toggle("showImage")
    hamburguer2.style.opacity = "0"
}