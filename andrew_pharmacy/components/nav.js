class Navigation extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <nav id="nav" class="nav">  

            <div class="navigation-link">
                <button class="dropbtn" onclick="window.location.href='index.html';">Home</button>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Prescriptions</button>
                <div class="dropdown-content">
                    <a href="https://ecare.pharmasave.com/" target="_blank">New & Refills</a>
                    <a href="https://ecare.pharmasave.com/TransferRx/Guest/Profile?skipPharmacyToStep=False" target="_blank">Transfer</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Services</button>
                <div class="dropdown-content">
                    <a href="compound.html">Compounded Medication</a>
                    <a href="deliveries.html">Free Deliveries</a>
                    <a href="home-healthcare.html">Home Healthcare</a>
                    <a href="med-return.html">Medication Return Program</a>
                    <a href="counselling.html">Counselling & Consultation</a>
                    <a href="review.html">Medication Review</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">About Us</button>
                <div class="dropdown-content">
                    <a href="team.html">Our Team</a>
                    <a href="location.html">Location & Hours</a>
                </div>
            </div>

            <div class="navigation-link">
                <button class="dropbtn" onclick="window.location.href='contact.html';">Contact Us</button>
            </div>
        </nav>
        `;        
    }
}

customElements.define('navigation-component', Navigation);