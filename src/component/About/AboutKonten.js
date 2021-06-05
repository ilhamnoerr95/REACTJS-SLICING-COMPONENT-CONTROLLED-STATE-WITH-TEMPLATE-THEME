import AboutTitle from './AboutTitle'

const AboutKonten =({textTitle,children})=>{
    return <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">
        {/* <!-- About Section Heading--> */}
        <AboutTitle textTitle={textTitle}/>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        {/* <!-- About Section Content--> */}
        <div className="row">
                    {children}
        </div>
        {/* <!-- About Section Button--> */}
        <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                <i className="fas fa-download me-2"></i>
                Free Download!
            </a>
        </div>
    </div>
</section>      
}

export default AboutKonten;