const menu = document.getElementsByClassName("menu");
const active_tab = btnFilterType.getElementsByClassName("active-tab");
for (let i = 0; i < active_tab.length; i++) {
    active_tab[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}