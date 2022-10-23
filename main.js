var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sideMenu = document.getElementById("sidemenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-300px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx5n3guzbyCjgfBm223qD_4gtCtgsasRa24gDDD-B8pB7R7oeKuSq0Tb0jUS4xNYvOD5g/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);

            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})