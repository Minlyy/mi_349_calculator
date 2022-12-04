
let buttons = document.querySelectorAll('.button');

for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', Click);
}

let number = 0;

function Click(event)
{
    let display = document.querySelector('.display');
    if(event.target.innerHTML == "C")
    {
        display.innerHTML = "";
    }
    else if(event.target.innerHTML == "←")
    {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
    else if(event.target.innerHTML == "=")
    {
        try{
            display.innerText = eval(display.innerText);
        }
        catch{
            display.innerHTML = "Error";
        }


    }
    else
    {
        display.innerHTML += event.target.innerHTML;
    }
}