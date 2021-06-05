import Cabin from '../../assets/img/portfolio/cabin.png'
import Cake from '../../assets/img/portfolio/cake.png'
import Circus from '../../assets/img/portfolio/circus.png'
import Game from '../../assets/img/portfolio/game.png'
import Safe from '../../assets/img/portfolio/safe.png'
import Submarine from '../../assets/img/portfolio/submarine.png'
import ModalKonten from './ModalKonten'

const ModalBody =()=>{

    const ModalData = [
        {id:'portfolioModal1',
        judulText:'Log Cabin', 
        image:Cabin,
        konten: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        {id:'portfolioModal2',
        judulText:'Tasty Cake', 
        image:Cake,
        konten: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        {id:'portfolioModal3',
        judulText:'Circus Tent', 
        image:Circus,
        konten: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        {id:'portfolioModal4',
        judulText:'Controller', 
        image:Game,
        konten: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        {id:'portfolioModal5',
        judulText:'Locked Safe', 
        image:Safe,
        konten: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        {id:'portfolioModal6',
        judulText:'Submarine', 
        image:Submarine,
        konten: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        
    ]

    return <div>
        {ModalData.map((ModalData)=>{
            return  <div className="portfolio-modal modal fade" id={ModalData.id} tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <ModalKonten judul={ModalData.judulText} srcImg={ModalData.image}>
                        <p className="mb-4">
                            {ModalData.konten}
                        </p>

                        </ModalKonten>
                    </div>
                </div>
            </div>
            </div>
        })}
          

    </div>
}

export default ModalBody