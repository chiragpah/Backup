let btnContainer=document.getElementsByClassName("highlight");
for(let i=0;i<btnContainer.length;i++)
{
    btnContainer.addEventListener("click",function(){
        let c=document.getElementsByClassName("active");
        c[0].className=c[0].className.replace("active");
        this.className+= "active";
    })
}