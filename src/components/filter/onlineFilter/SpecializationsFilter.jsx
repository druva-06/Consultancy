import { useDispatch, useSelector } from "react-redux";
import { addSpecializations } from "../../../features/onlineEducation/onlineEducationFilterSlice";
import { specializationsCheck } from "../../../features/onlineEducation/onlineEducationSlice";

const SpecializationsFilter = () => {
  const { specializations } =
    useSelector((state) => state.onlineEducation) || {};
  const dispatch = useDispatch();

  // instructor handler
  const specializationsHandler = (e, id) => {
    dispatch(addSpecializations(e.target.value));
    dispatch(specializationsCheck(id));
  };

  return (
    <ul className="list-wrap">
      {specializations?.map((item) => (
        <li key={item.id}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                checked={item.isChecked}
                value={item.value}
                onChange={(e) => specializationsHandler(e, item.id)}
              />
              {item.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default SpecializationsFilter;
