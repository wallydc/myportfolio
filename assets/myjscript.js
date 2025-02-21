
document.addEventListener('touchstart', handleTouch, { passive: true });

function handleTouch(event) {
    console.log('Touch event detected');
}

const goTopBtn = document.getElementById("goTopBtn");

// Show/Hide Button on Scroll
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goTopBtn.classList.add("show");
    } else {
        goTopBtn.classList.remove("show");
    }
};

// Scroll to Top Smoothly
goTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};