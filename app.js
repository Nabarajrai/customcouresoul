
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");
const img=document.querySelector("img");
const lists=document.querySelectorAll("li");


for(let i=0;i<lists.length;i++){
    lists[i].addEventListener("click",function(){
        lists.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
     });
  
  
    // lists[i].classList.add("active");
    // lists[i].className=lists[i].className.replace("active","");
}
// lists.map((item,i)=>{
    // console.log(item,"item")
    // ,"item".addEventListener("click",function(){
    //     ,"item".classList.toggle("active");
    // })
// })
let count=0;

const images=[
    {id: 1 ,urlSrc:"img/1.jpg"},
    {id: 2 ,urlSrc:"img/2.jpg"},
    {id: 3 ,urlSrc:"img/3.jpg"},
    {id: 4 ,urlSrc:"img/4.jpg"},
    {id: 5 ,urlSrc:"img/5.jpg"},
    {id: 6 ,urlSrc:"img/6.jpg"},
]
function render(type){
if(type=="next"){
    if(count<images.length){
        count++;
        img.setAttribute("src",images[count-1].urlSrc)
    }
    else if(count===images.length){
        // alert("you reached last index")
        count--;
        img.setAttribute("src",images[count-1].urlSrc)
    }
    else return
   
}else if(type=="prev"){
    if(count>1){
        count--;
        img.setAttribute("src",images[count-1].urlSrc)
    }
    else if(count===1 || count===0){
        alert("you reached first index")
        count++;
    }
    else return

}
}


function prevs(){
    render("prev");
}
function nexts(){
    render("next");
}

setInterval(()=>{
    if(count===images.length){
        prevs();
    }
    else{
        // nexts();
    }
},2000)


prev.addEventListener("click",prevs)
next.addEventListener("click",nexts)



