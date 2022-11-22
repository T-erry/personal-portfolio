let navbar = document.querySelector("#navbar").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click", function(){
        element.forEach(nav => nav.classlist.remove("active"))
        this.classList.add("active");
    });
});

