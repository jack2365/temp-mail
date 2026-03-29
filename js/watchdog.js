// Runtime watchdog - domain check removed, license flag check only
(function() {
    const LICENSE_SYM = Symbol.for('temp_mail_license');
    let failCount = 0;
    const MAX_FAILS = 2;
    function check() {
        // Only check license flag, not domain
        if (!window.__APP_LICENSE_OK__ || window[LICENSE_SYM] !== 'OK') {
            failCount++;
        } else {
            failCount = 0;
        }
    }
    setTimeout(() => {
        setInterval(check, 4000);
        requestAnimationFrame(function loop(){ check(); requestAnimationFrame(loop); });
    }, 200);
})();
