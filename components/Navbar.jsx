

export default function Navbar () {
  return (
    <nav class="navbar navbar-expand-lg bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Jake Bailey
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#personal-profile">Personal Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <span class="navbar-text me-4">
          BSc(Hons) Software Engineering Student at the University of Portsmouth
        </span>
        <a class="me-3 nav-item" href="https://www.linkedin.com/in/jaketbailey/" target="_blank">
              <img alt="LinkedIn" src="/images/linkedin.webp" height="25px" width="25px" class="nav-link"/>
        </a>

        <a class="me-3 nav-item" href="https://www.github.com/jaketbailey/" target="_blank">
            <img alt="GitHub" src="/images/github.webp" height="25px" width="25px" class="nav-link"/>
        </a>
      </div>
    </div><br/>
  </nav>
  )
}