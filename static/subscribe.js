let sub = document.getElementById("subscriber");
let statusSub = false;

function subscribeOnButton() {
    window._peq.push(['subscriber-status', function (res) {
        if (res.statuscode === 1) {
            statusSub = true;
            alert("Теперь вы подписаны");
            console.log(res)
        } else if (res.statuscode === 2) {
            statusSub = true;
            alert("Вы уже подписаны");
        } else {
            alert("Что-то пошло не так");
        }
    }]);
}

if (localStorage.getItem('colorSub') === 'gray' && localStorage.getItem('textSub') === 'Вы подписаны') {
    sub.style.color = localStorage.getItem('colorSub');
    sub.innerHTML = localStorage.getItem('textSub');
}

sub.addEventListener("click", function () {
    if (statusSub === false) {
        localStorage.removeItem('colorSub');
        localStorage.removeItem('textSub');
    } else {
        localStorage.setItem('colorSub', 'gray');
        localStorage.setItem('textSub', 'Вы подписаны');
        this.style.color = localStorage.getItem('colorSub');
        this.innerHTML = localStorage.getItem('textSub');
    }
});