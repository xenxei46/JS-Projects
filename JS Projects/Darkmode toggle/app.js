alert('Dark Mode Exercise')
const background = document.querySelector('body');
const btn = document.querySelectorAll('button');


btn[0].addEventListener('click', function() {
     background.classList.add('dark');
})

btn[1].addEventListener('click', function() {
     background.classList.add('light');
})

