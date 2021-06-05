// import Cabin from './assets/img/portfolio/cabin.png'
// import Cake from './assets/img/portfolio/cake.png'
// import Circus from './assets/img/portfolio/circus.png'
// import Game from './assets/img/portfolio/game.png'
// import Safe from './assets/img/portfolio/safe.png'
// import Submarine from './assets/img/portfolio/submarine.png'
import GridPorto from './Portofolio/GridPortofolio'
import ModalBody from '././Portofolio/PortfolioModal/ModalBody'


const Portofolio = ()=>{
    
    return (
<div>
    <section className="page-section portfolio" id="portfolio">
    <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <GridPorto/>
    </div>
    </section>
{/* <!-- Portfolio Modals--> */}
       <ModalBody/>

</div>

    )

}

export default Portofolio;