const header = document.querySelector('header')
header.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
    <div class="container" id="header-container">
        <div class="navbar-header">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="index.html"><img src="images/logo.png" class="logo" alt=""></a>
        </div>

        <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" id="header-nav">
                <li class="nav-item" data-name="/index.html"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item" data-name="/shop.html"><a class="nav-link" href="shop.html">Products</a></li>
                <li class="nav-item" data-name="/about.html"><a class="nav-link" href="about.html">About Us</a></li>
                <li class="nav-item" data-name="/contact-us.html"><a class="nav-link" href="contact-us.html">Contact Us</a></li>
            </ul>
        </div>

        <div id="header-welcome">

        </div>
    </div>
</nav>
`

if (window.localStorage.getItem('user')) {
    if (window.localStorage.getItem('isAdmin') === '1') {
        displayAdminhMenu()
    }
    
    displayLogoutMenu()
    displayWelcomeMessage()
    displayCartItem()
} else {
    displayLoginMenu()
    displayRegistrationMenu()
}

activeHeaderItem()

function displayLogoutMenu() {
    const headerNav = document.getElementById('header-nav')
    const navItem = document.createElement("li");
    navItem.classList.add('nav-item')
    navItem.innerHTML = `
        <a class="nav-link">Logout</a>
    `
    navItem.addEventListener('click', logout);
    headerNav.appendChild(navItem)
}

function displayLoginMenu() {
    const headerNav = document.getElementById('header-nav')
    const navItem = document.createElement("li");
    navItem.classList.add('nav-item')
    navItem.setAttribute('data-name', '/login.html')
    navItem.innerHTML = `
        <a class="nav-link" href="login.html">Login</a>
    `
    headerNav.appendChild(navItem)
}

function displayRegistrationMenu() {
    const headerNav = document.getElementById('header-nav')
    const navItem = document.createElement("li");
    navItem.classList.add('nav-item')
    navItem.setAttribute('data-name', '/register.html')
    navItem.innerHTML = `
        <a class="nav-link" href="register.html">Register</a>
    `
    headerNav.appendChild(navItem)
}

function displayAdminhMenu() {
    const headerNav = document.getElementById('header-nav')
    const navItem = document.createElement("li");
    navItem.classList.add('nav-item')
    navItem.setAttribute('data-name', '/admin.html')
    navItem.innerHTML = `
        <a class="nav-link" href="admin.html">Administration</a>
    `
    headerNav.appendChild(navItem)
}

function displayWelcomeMessage() {
    const headerWelcome = document.getElementById('header-welcome')
    headerWelcome.innerHTML = `
    <p>Welcome <strong>${window.localStorage.getItem("user")}</strong></p>
    `
}

function displayCartItem() {
    const headerContainer = document.getElementById('header-container')
    const cartItem = document.createElement("div");
    cartItem.classList.add('attr-nav')
    cartItem.innerHTML = `
        <ul>
            <li class="side-menu">
                <a href="/cart.html">
                    <i class="fa fa-shopping-bag"></i>
                    <span class="badge">3</span>
                    <p>My Cart</p>
                </a>
            </li>
        </ul>
    `
    headerContainer.appendChild(cartItem)  
}

function logout() {
    window.localStorage.clear();
    window.location.href = "/index.html"
}

function activeHeaderItem() {
    if (window.location.pathname == '/') {
        document.querySelector('.nav-item[data-name="/index.html"]').classList.add("active");
        return;
    }
    
    document.querySelector(`.nav-item[data-name="${window.location.pathname}"]`).classList.add("active");
}