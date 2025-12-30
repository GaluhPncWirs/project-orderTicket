import { Link } from "react-router";
import "./style.scss";

export default function Footer() {
  // const getYearNow = useMemo(() => new Date(Date.now()).getFullYear(), []);
  return (
    <div>
      <div className="containerFooter">
        <div className="footerInfoWeb">
          <div className="footerInfoWeb__title">
            <img src="/images/footer/logoFooter.png" alt="Logo" />
            <div />
            <h3>
              Platform pembelian tiket konser resmi yang aman, cepat, dan
              terpercaya.
            </h3>
          </div>
          <div className="footerInfoWeb__descList">
            <div className="footerInfoWeb__descList__first">
              <h1>Kategori</h1>
              <ul>
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="">Konser</Link>
                </li>
                <li>
                  <Link to="">Jadwal</Link>
                </li>
                <li>
                  <Link to="">Bantuan</Link>
                </li>
              </ul>
            </div>
            <div className="footerInfoWeb__descList__second">
              <h1>Informasi</h1>
              <ul>
                <li>
                  <Link to="">Tentang Kami</Link>
                </li>
                <li>
                  <Link to="">Kebijakan Privasi</Link>
                </li>
                <li>
                  <Link to="">Syarat & Ketentuan</Link>
                </li>
              </ul>
            </div>
            <div className="footerInfoWeb__descList__third">
              <h1>Hubungi Kami</h1>
              <ul>
                <li>
                  <img src="" alt="" />
                  <span>0896-3712-9854</span>
                </li>
                <li>
                  <img src="" alt="" />
                  <Link to="mailto:support@gigsticket.com">
                    support@gigsticket.com
                  </Link>
                </li>
                <li>Jl. Kemang Raya No. 97, Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lineVertical" />
        <div className="footerInfoApp">
          <div className="footerInfoApp__downloadApp">
            <h1>Download App</h1>
            <div className="footerInfoApp__downloadApp__playstore">
              <img src="/images/footer/playstore.png" alt="Playstore" />
              <div>
                <h4>Get it on</h4>
                <h2>Google Play</h2>
              </div>
            </div>
            <div className="footerInfoApp__downloadApp__appStore">
              <img src="/images/footer/app-store.png" alt="App Store" />
              <div>
                <h4>Get it on</h4>
                <h2>App Store</h2>
              </div>
            </div>
          </div>
          <ul className="footerInfoApp__sosmed">
            <Link to="" className="toSosmed">
              <img src="/images/footer/facebook.png" alt="Facebook" />
            </Link>
            <Link to="" className="toSosmed">
              <img src="/images/footer/x.png" alt="X" />
            </Link>

            <Link to="" className="toSosmed">
              <img src="/images/footer/instagram.png" alt="Instagram" />
            </Link>
            <Link to="" className="toSosmed">
              <img src="/images/footer/tiktok.png" alt="Tiktok" />
            </Link>

            <Link to="" className="toSosmed">
              <img src="/images/footer/youtube.png" alt="Youtube" />
            </Link>
          </ul>
        </div>
      </div>

      <div className="lineHorizontal" />
      <h2 className="copyright">
        &copy; 2026, GigsTicket, All Rights Reserved.
      </h2>
    </div>
  );
}
