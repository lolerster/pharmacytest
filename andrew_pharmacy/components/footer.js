class Footer extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>FOOTER STUFF HERE</p>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);