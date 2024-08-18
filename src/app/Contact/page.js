export default function Home() {
  return (
    <>
      <div class="p-3 mb-2 bg-black text-black">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href=""></a>
            <img
              src="https://w7.pngwing.com/pngs/608/727/png-transparent-bring-me-the-horizon-logo-thumbnail.png"
              alt="Bootstrap"
              width="50"
              height="44"
            ></img>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/About">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Service">
                    Service
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Contact">
                    Contact
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <button class="btn btn-outline-success" type="submit">
                  Sigh in
                </button>
                <button class="btn btn-outline-success" type="submit">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </nav>
        <br></br>
        <center>
          <font size="6" color="white">
            Contact
          </font>
          <br></br>
          <br></br>
          <br></br>
          <img
            src="https://64.media.tumblr.com/079e56c39d46b949206b821ab5624f44/tumblr_nukiiqBYcw1u20f3mo1_500.gif"
            width="1100"
            height="600"
          ></img>
        </center>
        <br></br>
        <br></br>
        <center>
          <font size="5" color="white">
            E-Mail : 67319010004@cmtc.ac.th
          </font>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-12 text-center bg-light p-5">
            <font size="4">
              Bring me The horizon
              <br></br>
              สามารถติดต่อได้หลายช่องทางดังนี้
              <br></br>
              FB:Undeep
              <br></br>
              LIne:Undeep
              <br></br>
              Tel:012 345 6789
            </font>
          </div>
        </div>
      </div>
    </>
  );
}
