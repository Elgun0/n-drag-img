const dragarea = document.querySelector("#dragimg .drag-content")
dragarea.addEventListener("dragover", function (e) {
    e.preventDefault()
    dragarea.classList.add("active")
})

dragarea.addEventListener("dragleave", function (e) {
    dragarea.classList.remove("active")
})

dragarea.addEventListener("drop", function (e) {
    e.preventDefault()
    dragarea.classList.remove("active")
    Fillimg(e.dataTransfer.files)
})

function Fillimg(files){
for(let image of files){
    if(image.type.match("image*")){
        const tr=document.createElement("tr")
        
    }
}
}