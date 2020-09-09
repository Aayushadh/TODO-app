var addButton=document.getElementById('add-button');


addButton.addEventListener("click",function()
{
    var listBlock=document.getElementById('list-block');
    var inputField=document.getElementById('inputfield');
    var activity=inputField.value;

     // if input is not null 
    if(activity != "")
    {
    inputField.value="";
    var div=document.createElement('div');
    div.classList.add('item');
    var span=document.createElement('span');
    span.classList.add('item-text');
    var removeButton=document.createElement('button');
    removeButton.classList.add('removeButton');
    var lineth=document.createElement('button');
    lineth.classList.add('cross');
    var aww=document.createElement('i');
    aww.classList.add('fas');
    aww.classList.add('fa-check');
    lineth.appendChild(aww);
    var text=document.createTextNode(activity);
    aww=document.createElement('i');
    aww.classList.add('fas');
    aww.classList.add('fa-times-circle');
    removeButton.appendChild(aww);
    span.appendChild(text);
    div.appendChild(lineth);
    div.appendChild(span);
    div.appendChild(removeButton);
   
    listBlock.appendChild(div);


     // activationg functionaly of delete button
    var cancel=document.getElementsByClassName('removeButton');

    for(var i=0;i<cancel.length;i++)
    {
        cancel[i].onclick=function()
        {
            var bappu=this.parentElement;
            bappu.style.display="none";
        }
    }





    // activationg functionaly of cross button
    var cross=document.getElementsByClassName('cross');

    for(var i=0;i<cross.length;i++)
    {
        cross[i].onclick=function()
        {
             var texti=this.nextSibling;
             if(texti.style.textDecoration != "line-through")
             texti.style.textDecoration="line-through";
             else
             texti.style.textDecoration="none";

        }
    }
    }


    // if input is null don't add that task 
else
{
    alert('You can\'t keep it blank');
}



});



var input=document.getElementById('inputfield');
input.addEventListener('keyup',function(event)
{
    if(event.keyCode===13){
    
        event.preventDefault();
        document.getElementById("add-button").click();


}
});