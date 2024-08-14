import { useDispatch, useSelector } from "react-redux";
import { addCountry } from "../../../features/abroadEducation/abroadEducationFilterSlice";
import { countryCheck } from "../../../features/abroadEducation/abroadEducationSlice";

const CountryFilter = () => {
  const { country } = useSelector((state) => state.abroadEducation) || {};
  const dispatch = useDispatch();

  const countryHandler = (e, id) => {
    dispatch(addCountry(e.target.value));
    dispatch(countryCheck(id));
  };

  return (
    <ul className="list-wrap">
      {country?.map((item) => (
        <li key={item.id}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                checked={item.isChecked}
                value={item.value}
                onChange={(e) => countryHandler(e, item.id)}
              />
              {item.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CountryFilter;
