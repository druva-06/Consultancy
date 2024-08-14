import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../../../features/indiaEducation/indiaEducationFilterSlice";
import { cityCheck } from "../../../features/indiaEducation/indiaEducationSlice";

const CityFilter = () => {
  const { city } = useSelector((state) => state.indiaEducation) || {};
  const dispatch = useDispatch();

  const cityHandler = (e, id) => {
    dispatch(addCity(e.target.value));
    dispatch(cityCheck(id));
  };

  return (
    <ul className="list-wrap">
      {city?.map((item) => (
        <li key={item.id}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                checked={item.isChecked}
                value={item.value}
                onChange={(e) => cityHandler(e, item.id)}
              />
              {item.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CityFilter;
