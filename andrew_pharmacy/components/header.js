class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header id="header" class="header">
                <div class="logo-container">
                    <div classs="header-top">
                        <a class = "logo" href="index.html" title="Andrew's Pharmacy">
                            <img src="images/pharmasave_logo.png" width=20%>
                        </a>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('header-component', Header);