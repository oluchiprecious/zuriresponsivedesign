const navLinks = document.getElementById('nav-links')
const hamburger = document.getElementById('hamburger')
const cancel = document.getElementById('cancel')

hamburger.addEventListener('click', () =>{
    navLinks.style.display = 'flex'
    })
    
cancel.addEventListener('click', () => {
    navLinks.style.display = ''
})