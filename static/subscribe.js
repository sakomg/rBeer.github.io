function subscribeOnButton() {
    window._peq.push (['subscribe', 'segment_name', function (res) {
        if (res.statuscode === 1)
        {
            console.log (res);
        }
    } ]);
}