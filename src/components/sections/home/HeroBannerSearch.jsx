export default function HeroBannerSearch({ currentActive }) {
  return (
    <div className="filter__content">
      <span className="text-center mb-20">Study Abroad</span>
      <div className="row text-center gap-2">
        <select className="col-12 col-lg filter__select">
          <option>Categories</option>
          <option>Business</option>
          <option>Data Science</option>
          <option>Art Design</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
        <select className="col-12 col-lg filter__select">
          <option>Categories</option>
          <option>Business</option>
          <option>Data Science</option>
          <option>Art Design</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
        <select className="col-12 col-lg filter__select">
          <option>Categories</option>
          <option>Business</option>
          <option>Data Science</option>
          <option>Art Design</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
        <select className="col-12 col-lg filter__select">
          <option>Categories</option>
          <option>Business</option>
          <option>Data Science</option>
          <option>Art Design</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
        <button className="col-12 col-lg filter__button">
          <span>Search</span> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}
