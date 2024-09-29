document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});

// page Navigation


document.querySelector('#design').addEventListener('click',function navigatePage1(){
    window.location.href="design.html"
})
document.querySelector('#tees').addEventListener('click',function navigatePage2(){
    window.location.href = "tees.html"
})
document.querySelector('#color').addEventListener('click',function navigatePage3(){
    window.location.href = "color.html"
})

