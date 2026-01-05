import Button from "../../components/button/content";
import Sidebar from "../../components/sidebar/content";
import ChoosenTicket from "../../layout/choosenTicket/content";
import RootContainer from "../../layout/rootContainer";
import "./style.scss";

export default function Konser() {
  return (
    <RootContainer>
      <div className="containerConcert">
        <div className="containerConcert__title">
          <h1>Detail Konser</h1>
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
              <div>
                <h2>Deskripsi Konser</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum qui, nostrum accusantium magnam aperiam quam iusto
                  voluptates debitis tenetur quasi excepturi adipisci tempora,
                  consectetur sunt ex odit animi quidem harum.
                </p>
              </div>
              <span className="horizontalLine" />
              <div>
                <h2>Line Up Penyanyi</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum qui, nostrum accusantium magnam aperiam quam iusto
                  voluptates debitis tenetur quasi excepturi adipisci tempora
                </p>
              </div>
              <span className="horizontalLine" />
              <div>
                <h2>Syarat Dan Ketentuan</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum qui, nostrum accusantium magnam aperiam quam iusto
                  voluptates debitis tenetur quasi excepturi adipisci tempora
                </p>
              </div>
              <span className="horizontalLine" />
            </div>
            <div className="containerConcert__contentConcert__informConcert__typeTicket">
              <h1>Tipe Tiket Konser</h1>
              <div className="containerConcert__contentConcert__informConcert__typeTicket__chosenTicket">
                <ChoosenTicket
                  nameTicket="VIP Tiket"
                  priceTicket="2.500.000"
                  benefit={["benefit 1", "benefit 2", "benefit 3", "benefit 4"]}
                  remainingTicket={50}
                />
                <ChoosenTicket
                  nameTicket="Festival Tiket"
                  priceTicket="1.000.000"
                  benefit={["benefit 1", "benefit 2", "benefit 3", "benefit 4"]}
                  remainingTicket={100}
                />
                <ChoosenTicket
                  nameTicket="Regular Tiket"
                  priceTicket="700.000"
                  benefit={["benefit 1", "benefit 2", "benefit 3", "benefit 4"]}
                  remainingTicket={200}
                />
                <ChoosenTicket
                  nameTicket="Regular Tiket"
                  priceTicket="700.000"
                  benefit={["benefit 1", "benefit 2", "benefit 3", "benefit 4"]}
                  remainingTicket={200}
                />
                <ChoosenTicket
                  nameTicket="Regular Tiket"
                  priceTicket="700.000"
                  benefit={["benefit 1", "benefit 2", "benefit 3", "benefit 4"]}
                  remainingTicket={200}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="containerConcert__btnChosenTicket">
          <Button
            btnTitle="Lanjutkan Pembayaran"
            btnType="button"
            handleClick={() => false}
          />
        </div>
      </div>
    </RootContainer>
  );
}
