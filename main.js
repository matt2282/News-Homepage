window.addEventListener('resize', function() {
    var nav = document.querySelector('nav');
    if (window.innerWidth > 770) {
        nav.style.display = 'none';
    } 
});