import AboutKonten from './About/AboutKonten'
import DataBout from './About/dataBout'

const AboutSection = ()=>{
    let text = "About"
    
    return <AboutKonten textTitle={text}>
            <div className="col-lg-4 ms-auto">
                <p className="lead">{DataBout[0].left}</p>
            </div>
            <div className="col-lg-4 me-auto">
                <p className="lead">{DataBout[0].right}</p>
            </div>
    </AboutKonten>
}

export default AboutSection;