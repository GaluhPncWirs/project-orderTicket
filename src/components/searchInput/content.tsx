import "./style.scss";

export default function SearchInput() {
  return (
    <div className="search">
      <img
        src="/images/navbar/search.png"
        alt="Search"
        className="search__img"
      />
      <input type="text" className="search__inputSearch" />
    </div>
  );
}
