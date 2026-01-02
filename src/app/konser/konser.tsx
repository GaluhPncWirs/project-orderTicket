import Button from "../../components/button/content";
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
            <div className="containerConcert__contentConcert__sidebar__filter">
              <h3>Filter</h3>
              <img src="/images/concertPage/filter.png" alt="Kota" />
            </div>
            <li>
              <div className="textList">
                <img src="/images/concertPage/city.png" alt="Kota" />
                <h4>Kota</h4>
              </div>
              <div className="arrow">
                <div />
                <div />
              </div>
            </li>
            <li>
              <div className="textList">
                <img src="/images/concertPage/date.png" alt="Kota" />
                <h4>Tanggal</h4>
              </div>

              <div className="arrow">
                <div />
                <div />
              </div>
            </li>
            <li>
              <div className="textList">
                <img src="/images/concertPage/genre.png" alt="Kota" />
                <h4>Genre</h4>
              </div>
              <div className="arrow">
                <div />
                <div />
              </div>
            </li>
            <li>
              <div className="textList">
                <img src="/images/concertPage/price.png" alt="Kota" />
                <h4>Harga</h4>
              </div>
              <div className="arrow">
                <div />
                <div />
              </div>
            </li>
            <span />
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
            <span />
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
