const SubHead = ()=>{
    const subHeadData = [
        {id:1, ket:"Portofolio",href:"#portfolio"},
        {id:2, ket:"About",href:"#about"},
        {id:3, ket:"Contact",href:"#contact"},

    ]

    return <ul className="navbar-nav ms-auto">
            {subHeadData.length>0 && subHeadData.map((subHeadData)=>{
                return <li key={subHeadData.id} className="nav-item mx-0 mx-lg-1">
                    <a href={subHeadData.href} className="nav-link py-3 px-0 px-lg-3 rounded">
                        {subHeadData.ket}
                    </a>
                </li>  
            })}
    </ul>
}

export default SubHead;