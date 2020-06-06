const headerTag= document.querySelector("header")
const blobGroups = document.querySelectorAll("g.blob")
const sectionTags = document.querySelectorAll("section")
const arrowTag = document.querySelector("img.arrow")
const easing = (x) =>{
    return x*x*x
}

console.log("hand coded by @siljawalenius")

const fadeHeader = () =>{
    const pixels = window.pageYOffset
    headerTag.style.opacity = 1 - easing(pixels/(window.innerHeight /2))
    arrowTag.style.opacity = 1 - easing(pixels/(window.innerHeight /3))
}


const checkBlobs = () =>{
    const pixels = window.pageYOffset
    blobGroups.forEach((blob,index) =>{
        const currentSection = sectionTags[index]
        if(pixels > (currentSection.offsetTop - 300)){
            blob.classList.add("in-view")
        } else{
            blob.classList.remove("in-view")
        }
    })

}

window.addEventListener("scroll", () => {
    fadeHeader()
    checkBlobs()
})