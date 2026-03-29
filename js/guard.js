// Domain Restriction Guard (layer 1) - removed
(function() {
    window.__APP_LICENSE_OK__ = true;
    window[Symbol.for('temp_mail_license')] = 'OK';
    Object.defineProperty(window, '__APP_LIC_TS__', { value: Date.now(), writable: false, configurable: false });
})();
