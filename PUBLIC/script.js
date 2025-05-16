function add(a,b)
{
   var  sum=a+b;
   return sum;
}
document.getElementById("print").innerHTML=add(14,4);
function message()
{
    const input=document.getElementById("nameInput");
    window.alert("hello "+document.getElementById("nameInput").value);
}