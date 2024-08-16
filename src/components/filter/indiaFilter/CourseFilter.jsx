import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../../../features/indiaEducation/indiaEducationFilterSlice";
import { courseCheck } from "../../../features/indiaEducation/indiaEducationSlice";

const CourseFilter = () => {
  const { course } = useSelector((state) => state.indiaEducation) || {};
  const dispatch = useDispatch();

  const courseHandler = (e, id) => {
    dispatch(addCourse(e.target.value));
    dispatch(courseCheck(id));
  };

  return (
    <ul className="list-wrap">
      {course?.map((item) => (
        <li key={item.id}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                checked={item.isChecked}
                value={item.value}
                onChange={(e) => courseHandler(e, item.id)}
              />
              {item.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CourseFilter;
