import React, {Component} from 'react';
import './component/css/styles.css'
// import './component/js/scripts.js'
import Header from './component/header'
import Masthead from './component/masthead'
import Portofolio from './component/portofolio'
import AboutSection from './component/AboutSection'
import Contact from './component/Contact'
import Footer from './component/footer'

class App extends Component {
  render(){
    return(
        <div>
        <Header/>
        <Masthead/>
        <Portofolio/>
        <AboutSection/>
        {/* <AboutSec/> */}
        <Contact/>
        <Footer/>
        </div>
    )
      
  }


}

export default App;
