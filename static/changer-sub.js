let sub = document.getElementById("subscriber");

if (localStorage.getItem('colorSub') === 'gray' && localStorage.getItem('textSub') === 'Вы подписаны') {
    sub.style.color = localStorage.getItem('colorSub');
    sub.innerHTML = localStorage.getItem('textSub');
}

sub.addEventListener("click", function () {
    localStorage.setItem('colorSub', 'gray');
    localStorage.setItem('textSub', 'Вы подписаны');
    this.style.color = localStorage.getItem('colorSub');
    this.innerHTML = localStorage.getItem('textSub');
});


