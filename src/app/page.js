import Image from "next/image";
import styles from "./page.module.css";
import './/globals.css';
import Script from "next/script";
import Link from "next/link";

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
              <li class="nav-item">
        <a href="/signup" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">Signup</a>
        </li>&nbsp;
        <li class="nav-item">
        <a href="/signin" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">Signin</a>
        </li>&nbsp;
            </div>
          </div>
        </nav>
        <br></br>
        <center>
          <font size="6" color="white">
            BMTH : Bring Me The Horizon
          </font>
          <br></br>
          <br></br>
          <br></br>
          <img
            src="https://i.pinimg.com/originals/8d/65/bd/8d65bdd68c6992bab895cd5cfdc8b510.gif"
            width="1200"
            height="600"
          ></img>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <font size="6" color="white">
          ALbum
        </font>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-4 text-center p-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/th/b/bb/BMTH_Sempiternal.png"
              width="350"
              height="320"
            ></img>
             <br></br>
            <font size="5" color="white">Sempiternal</font>
          </div>
          <div className="col-md-4 text-center p-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/0a/Bring_Me_the_Horizon_Post_Human_Survival_Horror_Cover_Art_2020.jpg"
              width="350"
              height="320"
            ></img>
             <br></br>
            <font size="5" color="white">PostHuman: Survival Horror </font>
          </div>
          <div className="col-md-4 text-center  p-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/74/Post_Human_NeX_GEn.png"
              width="350"
              height="320"
            ></img>
             <br></br>
            <font size="5" color="white">PostHuman: NeX GEn </font>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-12 text-center bg-white p-5">
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
