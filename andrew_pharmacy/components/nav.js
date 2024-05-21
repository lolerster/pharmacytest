class Navigation extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
            <nav id="nav" class="nav">  
                <ul class="navbar">
                <li class="dropdown">
                    <a href='index.html'>Home</a>
                </li>
        
                <li class="dropdown">
                    <a href="#prescriptions">Prescriptions</a>
                    <ul class="dropdown-content">
                    <li><a href="https://ecare.pharmasave.com/" target="_blank">New & Refills</a></li>
                    <li><a href="https://ecare.pharmasave.com/TransferRx/Guest/Profile?skipPharmacyToStep=False" target="_blank">Transfer</a></li>
                    </ul>
                </li>
        
                <li class="dropdown">
                    <a href="#services">Services</a>
                    <ul class="dropdown-content">
                    <li><a href="compound.html">Compounded Medication</a></li>
                    <li><a href="deliveries.html">Free Deliveries</a></li>
                    <li><a href="home-healthcare.html">Home Healthcare</a></li>
                    <li><a href="med-return.html">Medication Return Program</a></li>
                    <li><a href="counselling.html">Counselling & Consultation</a></li>
                    <li><a href="review.html">Medication Review</a></li>
                    </ul>
                </li>
        
                <li class="dropdown">
                    <a href="#about">About Us</a>
                    <ul class="dropdown-content">
                    <li><a href="team.html">Our Team</a></li>
                    <li><a href="location.html">Location & Hours</a></li>
                    </ul>
                </li>
        
                <li class="dropdown">
                    <a href='contact.html'>Contact Us</a>
                <li>
                </ul>
            </nav>
            `;        
    }
}

customElements.define('navigation-component', Navigation);