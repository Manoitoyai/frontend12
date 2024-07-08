import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <div class="p-3 mb-2 bg-black text-black">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href=""></a>
    <img src="https://w7.pngwing.com/pngs/608/727/png-transparent-bring-me-the-horizon-logo-thumbnail.png" alt="Bootstrap" width="50" height="44"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Service">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
      <button class="btn btn-outline-success" type="submit">Sigh in</button>
        <button class="btn btn-outline-success" type="submit">Log in</button>
      </form>
    </div>
  </div>
</nav>
<br></br>
<center><img src="https://assets.beartai.com/uploads/2023/11/Bring-Me-The-Horizon-December-2021-promo.jpeg" width="1800" height="700" ></img></center>
<br></br>
<div className="row">
  <div className="col-4 text-center bg-danger p-5">
  <img src="https://upload.wikimedia.org/wikipedia/th/b/bb/BMTH_Sempiternal.png" width="520" height="500"></img>Sempiternal
  </div>
  <div className="col-md-4 text-center bg-danger p-5">
  <img src="https://upload.wikimedia.org/wikipedia/en/0/0a/Bring_Me_the_Horizon_Post_Human_Survival_Horror_Cover_Art_2020.jpg" width="520" height="500"></img>PostHuman: Survival Horror
  </div>
  <div className="col-md-4 text-center bg-danger p-5">
  <img src="https://upload.wikimedia.org/wikipedia/en/7/74/Post_Human_NeX_GEn.png" width="520" height="500"></img>PostHuman: NeX GEn
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className="row">
        <div className="col-12 text-center bg-light p-5">
        Bring me The horizon
        </div>
      </div> 

</div>
    </>
  );
}
