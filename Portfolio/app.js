let arrBtns=Array.from(document.querySelectorAll(".control"));
let arrSections=Array.from(document.querySelectorAll(".section"))
let idOfSection=arrSections.map((e)=>{
return e.getAttribute("id")

})
arrBtns.forEach((ele)=>{
ele.addEventListener("click",()=>{
addActiveBtn(ele)
addSectionActive(ele.getAttribute("data-id"))
})
})

function addActiveBtn(element){
    removeActiveBtn()
element.classList.add("active-btn")
}
function removeActiveBtn(){
arrBtns.forEach((ele)=>{
    
ele.classList.remove("active-btn")

})
}
function removeSectionActive(){
for(let i=0;i<arrSections.length;i++){
    arrSections[i].classList.remove("active")
    console.log(arrSections[i])
}}

function addSectionActive(btnId){
    removeSectionActive()
    for(let i=0;i<arrSections.length;i++){
        if(btnId===arrSections[i].getAttribute("id")){
            arrSections[i].classList.add("active")
           
        }

    }
 


}