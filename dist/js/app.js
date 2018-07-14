// Check if first page...
if (!sessionStorage.getItem('initial')) {
    sessionStorage.setItem('initial', true)
    window.addEventListener('scroll', e => {
        // Show navbar on scroll
        if (window.scrollY >= 100) {
            document.getElementById('navbar').classList.add('active')
        }
    })
} else {
    document.getElementById('navbar').classList.add('active')
}

// Show mobile menu
document.getElementById('burger').addEventListener('click', e => {
    document.getElementById('mobile-menu').classList.toggle('open')
    // Toggle subprojects dropdown
    document.getElementById('subprojects-trigger').addEventListener('click', e => {
        document.getElementById('subprojects-dropdown').classList.toggle('open')
    })
})
