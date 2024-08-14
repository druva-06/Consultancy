import { useDispatch, useSelector } from "react-redux";
import { addIntake } from "../../../features/abroadEducation/abroadEducationFilterSlice";
import { intakeCheck } from "../../../features/abroadEducation/abroadEducationSlice";

const IntakeFilter = () => {
  const { intake } = useSelector((state) => state.abroadEducation) || {};
  const dispatch = useDispatch();

  // instructor handler
  const intakeHandler = (e, id) => {
    dispatch(addIntake(e.target.value));
    dispatch(intakeCheck(id));
  };

  return (
    <ul className="list-wrap">
      {intake?.map((item) => (
        <li key={item.id}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                checked={item.isChecked}
                value={item.value}
                onChange={(e) => intakeHandler(e, item.id)}
              />
              {item.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default IntakeFilter;
