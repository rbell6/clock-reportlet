
class ClockReportlet extends HTMLDivElement {
    constructor(...args) {
        const self = super(...args);

        setInterval(() => {
            const date = new Date();
            self.textContent = date.toDateString() + ' ' + date.toTimeString();
        }, 1000);

        return self;
    }
}

window.customElements.define('clock-reportlet', ClockReportlet, { extends: 'div' });
