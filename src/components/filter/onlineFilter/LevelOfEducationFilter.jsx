import { useDispatch, useSelector } from "react-redux";
import { addLevelOfEducation } from "../../../features/onlineEducation/onlineEducationFilterSlice";
import { levelOfEducationCheck } from "../../../features/onlineEducation/onlineEducationSlice";


const LevelOfEducationFilter = () => {
  const { levelOfEducation } =
    useSelector((state) => state.onlineEducation) || {};
  const dispatch = useDispatch();

  const levelOfEducationHandler = (e, id) => {
    dispatch(addLevelOfEducation(e.target.value));
    dispatch(levelOfEducationCheck(id));
  };

  return (
    <ul className="list-wrap">
      {levelOfEducation?.map((item) => (
        <li key={item.id}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                checked={item.isChecked}
                value={item.value}
                onChange={(e) => levelOfEducationHandler(e, item.id)}
              />
              {item.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LevelOfEducationFilter;
