import Button from "../../components/button/content";
import Sidebar from "../../components/sidebar/content";
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
          <Sidebar />
          <div className="containerConcert__contentConcert__informConcert">
            <img
              src="/images/concertPage/heroImgConcert.webp"
              alt="Hero Section"
            />
            <div className="containerConcert__contentConcert__informConcert__nameConcert">
              <div>
                <h2>Nama Konser</h2>
                <h4>Nama Artis</h4>
                <span className="horizontalLine" />
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
            <span className="horizontalLine" />
            <div className="containerConcert__contentConcert__informConcert__descConcert">
              <h3>Deskripsi Konser</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                qui, nostrum accusantium magnam aperiam quam iusto voluptates
                debitis tenetur quasi excepturi adipisci tempora, consectetur
                sunt ex odit animi quidem harum.
              </p>
            </div>
            <span className="horizontalLine" />
            <div className="containerConcert__contentConcert__informConcert__lineUpConcert">
              <h3>Line Up Penyanyi</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                qui, nostrum accusantium magnam aperiam quam iusto voluptates
                debitis tenetur quasi excepturi adipisci tempora
              </p>
            </div>
            <span className="horizontalLine" />
            <div className="containerConcert__contentConcert__informConcert__termsAndConditions">
              <h3>Syarat Dan Ketentuan</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                qui, nostrum accusantium magnam aperiam quam iusto voluptates
                debitis tenetur quasi excepturi adipisci tempora
              </p>
            </div>
            <span className="horizontalLine" />
          </div>
        </div>
        <div className="containerConcert__btnChosenTicket">
          <Button
            btnTitle="Pilih Tiket"
            btnType="button"
            handleClick={() => false}
          />
        </div>
      </div>
    </RootContainer>
  );
}
