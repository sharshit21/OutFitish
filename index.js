// Get the modal
var modal = document.getElementById('logingirl');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        navlogin.style.display = "none";
    }
}