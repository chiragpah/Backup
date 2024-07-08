var txt1;
var calc;
function enter(num){
    var txt=document.getElementById("one").value;
    txt=txt+num;
    document.getElementById('one').value=txt;
}
function oprt(selOptr){
    calc=selOptr;
    txt1=document.getElementById('one').value;
    document.getElementById('one').value="";
}
function fetchres(){
    var txt2=document.getElementById('one').value;
    var a;
    if(calc ==='+')
    {
        a=Number(txt1)+Number(txt2);
    }
    if(calc ==='-')
    {
        a=Number(txt1)-Number(txt2);
    }
    if(calc ==='*')
    {
        a=Number(txt1)*Number(txt2);
    }
    if(calc ==='/')
    {
        a=Number(txt1)/Number(txt2);
    }
    document.getElementById('one').value=a;
}
function clears(){
    document.getElementById('one').value="";
    txt1="";
    calc="";
}