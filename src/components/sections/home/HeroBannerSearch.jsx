import educationDetails from "../../../utils/education-details.json";

export default function HeroBannerSearch({ currentActive }) {
  console.log(console.log(currentActive.id));
  return (
    <div className="row filter__content">
      <span className="text-center mb-20">{currentActive.title}</span>
      <div className="row text-center gap-2">
        <select className="col-12 col-lg filter__select">
          {currentActive.id === "study-abroad" ? (
            <option key="location" disabled selected>
              Country
            </option>
          ) : (
            <option key="location" disabled selected>
              City
            </option>
          )}
          {currentActive.id === "study-abroad"
            ? educationDetails[currentActive.id].country.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))
            : educationDetails[currentActive.id].city.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
        </select>
        <select className="col-12 col-lg filter__select">
          <option key="course" disabled selected>
            Course
          </option>
          {educationDetails[currentActive.id].course.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <select className="col-12 col-lg filter__select">
          <option key="specializations" disabled selected>
            Specialization
          </option>
          {educationDetails[currentActive.id].specializations.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <select className="col-12 col-lg filter__select">
          {currentActive.id === "study-abroad" ? (
            <option key="education-type" disabled selected>
              Intake
            </option>
          ) : (
            <option key="education-type" disabled selected>
              Level Of Education
            </option>
          )}
          {currentActive.id === "study-abroad"
            ? educationDetails[currentActive.id].intake.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))
            : educationDetails[currentActive.id].levelOfEducation.map(
                (item) => <option key={item.id}>{item.name}</option>
              )}
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
