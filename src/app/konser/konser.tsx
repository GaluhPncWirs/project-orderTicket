import RootContainer from "../../layout/rootContainer";
import "./style.scss";

export default function Konser() {
  return (
    <RootContainer>
      <div className="containerConcert">
        <div className="containerConcert__title">
          <h1>Expire Konser</h1>
        </div>
        <div className="containerConcert__contentConcert">
          <ul className="containerConcert__contentConcert__sidebar">
            <li>Filter</li>
            <li>Kota</li>
            <li>Tanggal</li>
            <li>Genre</li>
            <li>Harga</li>
          </ul>
          <div className="containerConcert__contentConcert__informConcert">
            <img
              src="/images/concertPage/heroImgConcert.webp"
              alt="Hero Section"
            />
            <div className="containerConcert__contentConcert__informConcert__nameConcert">
              <div>
                <h2>Nama Konser</h2>
                <h4>Nama Artis</h4>
                <span />
                <div>
                  <img src="/images/concertPage/date.png" alt="Date" />
                  <h5>Tanggal & Waktu</h5>
                </div>
                <div>
                  <img src="/images/concertPage/venue.png" alt="Venue" />
                  <h5>Nama Venue</h5>
                </div>
              </div>
              <img src="/images/concertPage/location.jpg" alt="Location" />
            </div>
            <span />
            <div className="containerConcert__contentConcert__informConcert__descConcert">
              <h3>Deskripsi Konser</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                qui, nostrum accusantium magnam aperiam quam iusto voluptates
                debitis tenetur quasi excepturi adipisci tempora, consectetur
                sunt ex odit animi quidem harum.
              </p>
            </div>
            <span />
            <div className="containerConcert__contentConcert__informConcert__lineUpConcert">
              <h3>Line Up Penyanyi</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                qui, nostrum accusantium magnam aperiam quam iusto voluptates
                debitis tenetur quasi excepturi adipisci tempora
              </p>
            </div>
            <span />
            <div className="containerConcert__contentConcert__informConcert__termsAndConditions">
              <h3>Syarat Dan Ketentuan</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                qui, nostrum accusantium magnam aperiam quam iusto voluptates
                debitis tenetur quasi excepturi adipisci tempora
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootContainer>
  );
}
