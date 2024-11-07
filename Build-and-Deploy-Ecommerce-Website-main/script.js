// Script for navigation bar
const bar = document.getElementById('bar')
const close = document.getElementById('close');;
const nav = document.getElementById('navbar');

if (bar) {   //if anyone clck on the bar that means they are activating bar variable it means an event will be happening
    bar.addEventListener('click', () =>{   //and here the event listener will be click
        nav.classList.add('active');     // and now we have to add, create this active class in our  stylsheet
    })
}

//this time we have to pass our close variable and this time if anyone click on our close button then I don't want to add  i want to remove 
// the active button so remove

if (close) {       
    close.addEventListener('click', () =>{ 
        nav.classList.remove('active');     
    })
}