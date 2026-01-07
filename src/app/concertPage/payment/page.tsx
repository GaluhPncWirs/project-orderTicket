// import { Link } from "react-router";
import { useState } from "react";
import "./style.scss";
import Button from "../../../components/button/content";
import { Link } from "react-router";

export default function PaymentPage() {
  const [isMethodPayment, setIsMethodPayment] = useState(false);

  return (
    <div>
      <h1 className="title">Checkout</h1>
      <div className="containerCheckout">
        <div className="containerCheckout__summaryOrder">
          <h2 className="containerCheckout__summaryOrder__title">
            Ringkasan Pesanan
          </h2>
          <span className="horizontalLine" />
          <div className="containerCheckout__summaryOrder__orderTicket">
            <div>
              <img src="/images/concertPage/venue.png" alt="Venue" />
              <span>Nama Venue</span>
            </div>
            <div>
              <img src="/images/concertPage/date.png" alt="Date" />
              <span>Hari, 15 Juni 2024, 19:00</span>
            </div>
            <div>
              <img src="/images/concertPage/ticket.png" alt="Ticket" />
              <span>VIP Tiket x 2</span>
            </div>
          </div>
          <div className="containerCheckout__summaryOrder__priceTicket">
            <h3>
              <span>Harga Tiket</span>
              <span>Rp XXX.XXX</span>
            </h3>
            <h3>
              <span>Biaya Layanan</span>
              <span>Rp XX.XXX</span>
            </h3>
          </div>
          <span className="horizontalLine" />
          <h2 className="containerCheckout__summaryOrder__totalPayment">
            <span>Total Pembayaran</span>
            <span>Rp XXX.XXX</span>
          </h2>
          <h3 className="containerCheckout__summaryOrder__infoPaymentSecure">
            <img src="/images/concertPage/lock.png" alt="Lock" />
            <span>Pembayaran aman & terenkripsi</span>
          </h3>
        </div>
        <div className="containerCheckout__dataBuyer">
          <h2 className="containerCheckout__dataBuyer__title">Data Pembeli</h2>
          <span className="horizontalLine" />
          <div className="containerCheckout__dataBuyer__payment">
            <div className="containerCheckout__dataBuyer__payment__method">
              <h2
                onClick={() => setIsMethodPayment(false)}
                className={`${isMethodPayment === false && `changeMethod`}`}
              >
                Kartu Kredit
              </h2>
              <h2
                onClick={() => setIsMethodPayment(true)}
                className={`${isMethodPayment === true && `changeMethod`}`}
              >
                E-Wallet
              </h2>
            </div>
            <div className="animateChangeMethod">
              {isMethodPayment ? (
                <>
                  <div className="containerCheckout__dataBuyer__payment__listPayment">
                    <img src="/images/concertPage/ovo.png" alt="ovo" />
                    <img src="/images/concertPage/dana.png" alt="dana" />
                    <img
                      src="/images/concertPage/shopeePay.png"
                      alt="shopeePay"
                    />
                    <img src="/images/concertPage/goPay.png" alt="goPay" />
                  </div>
                  <span className="horizontalLine" />
                  <div className="containerCheckout__dataBuyer__payment__inputDataPayment">
                    <div>
                      <label htmlFor="noCard">Nomor Kartu</label>
                      <input type="number" id="noCard" />
                    </div>
                    <div className="periodeValidity">
                      <div>
                        <label htmlFor="masaBerlaku">Masa Berlaku</label>
                        <input type="date" id="masaBerlaku" />
                      </div>
                      <div>
                        <label htmlFor="cvv">CVV</label>
                        <input type="number" id="cvv" />
                      </div>
                    </div>
                  </div>
                  <div className="containerCheckout__dataBuyer__payment__saveInformBuy">
                    <input type="checkbox" id="saveInform" />
                    <label htmlFor="saveInform">
                      Simpan informasi saya untuk pembelian di kemudian hari
                    </label>
                  </div>
                  <div className="containerCheckout__dataBuyer__payment__btnConfirm">
                    <Link to="/concertPage" className="Link">
                      Kembali
                    </Link>
                    <Button
                      btnTitle="Bayar Sekarang"
                      btnType="button"
                      handleClick={() => false}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="containerCheckout__dataBuyer__payment__listPayment">
                    <img src="/images/concertPage/bca.png" alt="bca" />
                    <img src="/images/concertPage/bni.png" alt="bni" />
                    <img src="/images/concertPage/bri.png" alt="bri" />
                    <img src="/images/concertPage/visa.png" alt="visa" />
                  </div>
                  <span className="horizontalLine" />
                  <div className="containerCheckout__dataBuyer__payment__inputDataPayment">
                    <div>
                      <label htmlFor="noCard">No Kartu</label>
                      <input type="number" id="noCard" />
                    </div>
                    <div className="periodeValidity">
                      <div>
                        <label htmlFor="masaBerlaku">Masa Berlaku</label>
                        <input type="date" id="masaBerlaku" />
                      </div>
                      <div>
                        <label htmlFor="cvv">CVV</label>
                        <input type="number" id="cvv" />
                      </div>
                    </div>
                  </div>
                  <div className="containerCheckout__dataBuyer__payment__saveInformBuy">
                    <input type="checkbox" id="saveInform" />
                    <label htmlFor="saveInform">
                      Simpan informasi saya untuk pembelian di kemudian hari
                    </label>
                  </div>
                  <div className="containerCheckout__dataBuyer__payment__btnConfirm">
                    <Link to="/concertPage" className="Link">
                      Kembali
                    </Link>
                    <Button
                      btnTitle="Bayar Sekarang"
                      btnType="button"
                      handleClick={() => false}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
