
function Navbar({setCategory, setLanguage}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">BEN News</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <button className="nav-link active" aria-current="page" onClick={()=>setCategory('general')}>General</button>
                <button className="nav-link" onClick={()=>setCategory('technology')}>Technology</button>
                <button className="nav-link" onClick={()=>setCategory('health')}>Health</button>
                <button className="nav-link" onClick={()=>setCategory('business')}>Business</button>
                <button className="nav-link" onClick={()=>setCategory('sports')}>Sports</button>
                <button className="nav-link" onClick={()=>setCategory('entertainment')}>Entertainment</button>
                <span className="nav-link text-dark" > - - - </span>
                <span className="nav-link text-dark" > - - - </span>
                <span className="nav-link text-dark" > - - - </span>
                <span className="nav-link text-dark" > - - - </span>
                <span className="nav-link text-dark" > - - - </span>
                    <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg" alt="English" width="20" height="15"/> English
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                      <li>
                        <a className="dropdown-item" href="#" onClick={()=>setLanguage('en')}>
                          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg" alt="English" width="20" height="15" /> English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={()=>setLanguage('ru')}>
                          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ru.svg" alt="Russian" width="20" height="15"/> Русский
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={()=>setLanguage('ja')}>
                          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/jp.svg" alt="Japan" width="20" height="15"/> 日本語
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={()=>setLanguage('fr')}>
                          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/fr.svg" alt="Français" width="20" height="15"/> Français
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={()=>setLanguage('es')}>
                          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/es.svg" alt="Español" width="20" height="15"/> Español
                        </a>
                      </li>
                    
                      <li>
                        <a className="dropdown-item" href="#" onClick={()=>setLanguage('de')}>
                          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/de.svg" alt="Deutsch" width="20" height="15"/> Deutsch
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={()=>setLanguage('ar')}>
                          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/eg.svg" alt="Egypt" width="20" height="15"/> العربية
                        </a>
                      </li>
                      
                    </ul>
                  </div>
               
                
            </div>
            </div>
        </div>
    </nav>
  )
};

export default Navbar

