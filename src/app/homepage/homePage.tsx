import { useId, useRef, useState } from "react";
import CardKonserUnggulan from "../../components/cardArtist/content";
import RootContainer from "../../layout/rootContainer";
import "./style.scss";
import SearchInput from "../../components/searchInput/content";
import Button from "../../components/button/content";
import CardArtikel from "../../components/cardArtikel/content";

type artis = {
  id: string;
  srcImg: string;
  altImg: string;
  namaArtis: string;
};

type music = {
  id: string;
  srcImg: string;
  altImg: string;
  namaGenre: string;
};

export default function HomePage() {
  const artisPopuler = [
    {
      id: useId(),
      srcImg: "/images/homePage/taylor-swift.webp",
      altImg: "Taylor Swift",
      namaArtis: "Taylor Swift",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/bruno-mars.webp",
      altImg: "Bruno Mars",
      namaArtis: "Bruno Mars",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/charle-puth.webp",
      altImg: "Charlie Puth",
      namaArtis: "Charlie Puth",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/image-dragon.webp",
      altImg: "Image Dragon",
      namaArtis: "Image Dragon",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/selena-gomez.webp",
      altImg: "Selena Gomez",
      namaArtis: "Selena Gomez",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/selena-gomez.webp",
      altImg: "Selena Gomez",
      namaArtis: "Selena Gomez",
    },
  ];
  const genreMusic = [
    {
      id: useId(),
      srcImg: "/images/homePage/pop-music.png",
      altImg: "Pop",
      namaGenre: "Pop",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/rock-music.png",
      altImg: "Rock",
      namaGenre: "Rock",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/edm.png",
      altImg: "EDM",
      namaGenre: "EDM",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/jazz.png",
      altImg: "Jazz",
      namaGenre: "Jazz",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/k-pop.png",
      altImg: "K-Pop",
      namaGenre: "K-Pop",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/hip-hop.png",
      altImg: "Hip-Hop",
      namaGenre: "Hip-Hop",
    },
  ];
  const artikel = [
    {
      id: useId(),
      srcImg: "/images/homePage/artikel-1.jpg",
      titleArtikel: "Judul Artikel",
      descArtikel:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eaque!",
      dateArtikel: "07 Jan 2026",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/artikel-1.jpg",
      titleArtikel: "Judul Artikel",
      descArtikel: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      dateArtikel: "16 Mei 2026",
    },
    {
      id: useId(),
      srcImg: "/images/homePage/artikel-2.jpg",
      titleArtikel: "Judul Artikel",
      descArtikel:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, nam?",
      dateArtikel: "22 Jun 2026",
    },
  ];

  const [seeAllSingerPopular, setSeeAllSingerPopular] =
    useState<boolean>(false);
  const gridRef = useRef<HTMLDivElement>(null);
  return (
    <RootContainer>
      <main className="containerHomePage">
        <section>
          <div className="heroSection">
            <h1 className="heroSection__title">
              Beli Tiket Konser Favoritmu Sekarang
            </h1>
            <h3 className="heroSection__subTitle">Resmi, Aman, dan Cepat</h3>
            <button className="heroSection__btnCTA">Cari Konser</button>
          </div>
        </section>

        <section>
          <div className="konserUnggulan">
            <h1>Konser Unggulan</h1>
            <div className="konserUnggulan__listConcert">
              <CardKonserUnggulan />
              <CardKonserUnggulan />
              <CardKonserUnggulan />
            </div>
          </div>
        </section>

        <section>
          <div className="upComingAtCity">
            <h1>Akan Datang di Kotamu</h1>
            <ul className="upComingAtCity__listCity">
              <li>Jakarta</li>
              <li>Surabaya</li>
              <li>Bandung</li>
              <li>Medan</li>
              <li>Lampung</li>
              <li>Bali</li>
            </ul>
            <div className="upComingAtCity__city">
              <img src="/images/homePage/next.png" alt="arrowLeft" />
              <div>
                <CardKonserUnggulan />
                <CardKonserUnggulan />
                <CardKonserUnggulan />
              </div>
              <img src="/images/homePage/next.png" alt="arrowRight" />
            </div>
          </div>
        </section>

        <section>
          <div className="artistPopular">
            <div className="artistPopular__search">
              <h1>Penyanyi Terpopuler</h1>
              <SearchInput />
            </div>
            <div
              ref={gridRef}
              className={`artistPopular__resultArtists ${
                seeAllSingerPopular ? `expanded` : ``
              }`}
            >
              {artisPopuler.map((item: artis) => (
                <div
                  key={item.id}
                  className="artistPopular__resultArtists__artist"
                >
                  <img src={item.srcImg} alt={item.altImg} />
                  <h3>{item.namaArtis}</h3>
                </div>
              ))}
            </div>
            {artisPopuler.length > 5 && (
              <div className="artistPopular__btnSeeAll">
                <Button
                  btnType="button"
                  btnTitle={seeAllSingerPopular ? "Lihat Semua" : "Tutup"}
                  handleClick={() =>
                    setSeeAllSingerPopular(!seeAllSingerPopular)
                  }
                />
              </div>
            )}
          </div>
        </section>

        <section>
          <div className="genreMusic">
            <h1>Genre Music</h1>
            <div className="genreMusic__listItem">
              {genreMusic.map((item: music) => (
                <div key={item.id} className="genreMusic__listItem__item">
                  <img src={item.srcImg} alt={item.altImg} />
                  <h3>{item.namaGenre}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="artikel">
            <h1>Artikel Terkini</h1>
            <div className="artikel__cardArtikel">
              {artikel.map((item: any) => (
                <div key={item.id}>
                  <CardArtikel
                    srcImg={item.srcImg}
                    titleArtikel={item.titleArtikel}
                    descArtikel={item.descArtikel}
                    dateArtikel={item.dateArtikel}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </RootContainer>
  );
}
