function subscribeOnButton() {
    window._peq.push(['subscriber-status', function (res) {
        if (res.statuscode === 1) {
            alert("Теперь вы подписаны");
            console.log(res)
        } else if (res.statuscode === 2) {
            alert("Вы уже подписаны")
        } else {
            alert("Что-то пошло не так")
        }
    }]);
}





