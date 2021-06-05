import Cabin from '../assets/img/portfolio/cabin.png'
import Cake from '../assets/img/portfolio/cake.png'
import Circus from '../assets/img/portfolio/circus.png'
import Game from '../assets/img/portfolio/game.png'
import Safe from '../assets/img/portfolio/safe.png'
import Submarine from '../assets/img/portfolio/submarine.png'

const GridPorto = ()=>{
    const dataImages = [
        {image: Cabin,dataTarget:'#portfolioModal1'},
        {image: Cake,dataTarget:'#portfolioModal2'},
        {image: Circus,dataTarget:'#portfolioModal3'},
        {image: Game,dataTarget:'#portoflioModal4'},
        {image: Safe,dataTarget:'#portofoioModal5'},
        {image: Submarine,dataTarget:'#portfolioModal6'}
    ]

    return <div className="row justify-content-center">
        {dataImages.map((dataImages)=>{
            return <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={dataImages.dataTarget}>
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={dataImages.image} alt="..." />
                </div>  
            </div>
        })}     
    </div>
    
  
}

export default GridPorto;