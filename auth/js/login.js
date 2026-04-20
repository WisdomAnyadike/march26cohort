function openSignupForm() {
    document.getElementById("signup-wrapper").style.width = "100%";
    document.getElementById("signup-wrapper").style.height = "100%";
    document.getElementById("signup-wrapper").style.borderRadius = "0";
    document.getElementById("signup-wrapper").style.right = "0";
    document.getElementById("signup-wrapper").style.top = "1rem";
    document.getElementById("signup-form").style.visibility = "visible";
    document.getElementById("signup-form").style.transitionDelay = ".5s";
    document.getElementById("signup-icon").style.display = "none";
    // document.getElementById("close-icon").style.display = "block";
    
}

function openLoginForm() {
    document.getElementById("signup-wrapper").style.width = "120px";
    document.getElementById("signup-wrapper").style.height = "120px";
    document.getElementById("signup-wrapper").style.borderRadius = "50%";
    document.getElementById("signup-wrapper").style.right = "-40px";
    document.getElementById("signup-wrapper").style.top = "-40px";
    document.getElementById("signup-form").style.visibility = "hidden";
    document.getElementById("signup-form").style.transitionDelay = "0s";
    document.getElementById("signup-icon").style.display = "block";
    // document.getElementById("close-icon").style.display = "none";
}