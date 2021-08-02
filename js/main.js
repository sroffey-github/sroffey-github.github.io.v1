function mobileNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        document.getElementById('logo').style.display = 'none';
        document.getElementById('right').style.cssFloat = 'left';
        x.className += " responsive";
    } else {
        document.getElementById('logo').style.display = 'block';
        document.getElementById('right').style.cssFloat = 'right';
        x.className = "topnav";
    }
}