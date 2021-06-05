import ModalTitel from './ModalTitel'

const ModalKonten =({judul,srcImg,children})=>{
    return <div className="container">
            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <ModalTitel judul={judul}/>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src={srcImg} alt="..." />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    {children}
                                    <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>

    </div>
}

export default ModalKonten;
