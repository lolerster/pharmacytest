class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        
            <header id="header" class="header">

                <div class="logo-container">
                    <div classs="header-top">
                        <a class = "logo" href=""index.html title="Andrew's Pharmacy">
                            <img src="images/pharmasave_logo.png" width=30%>
                        </a>
                    </div>
                </div>

                <div class="navigation">  

                    <div class="dropdown">
                        <button class="dropbtn">DROP-DOWN 1</button>
                        <div class="dropdown-content">
                            <a href="...">Link 1.1</a>
                            <a href="...">Link 1.2</a>
                            <a href="...">Link 1.3</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Prescriptions</button>
                        <div class="dropdown-content">
                            <a href="https://ecare.pharmasave.com/">New & Refills</a>
                            <a href="https://ecare.pharmasave.com/TransferRx/Guest/Profile?skipPharmacyToStep=False">Transfer</a>
                        </div>
                    </div>

                    <div class="dropdown">
                    <button class="dropbtn">Services</button>
                    <div class="dropdown-content">
                        <a href="...">Compound Medication</a>
                        <a href="...">Free Deliveries</a>
                        <a href="...">Home Healthcare</a>
                        <a href="...">Medication Return Program</a>
                        <a href="...">Counselling & Consultation</a>
                    </div>
                </div>

                    <div class="navigation-link">
                        <button class="dropbtn" onclick="window.location.href='...';">About Us</button>
                    </div>

                    <div class="navigation-link">
                        <button class="dropbtn" onclick="window.location.href='...';">Contact Us</button>
                    </div>
                </div>           
            </header>
        `;
    }
}

customElements.define('header-component', Header);