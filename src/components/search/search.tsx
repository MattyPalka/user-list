import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterUsers } from "../../redux-store/actions/user";
import style from "./style.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [shrinkLabel, setShrinkLabel] = useState(false);

  useEffect(() => {
    // here filter users by set data fields, can be easily extender with adding more user object keys
    // or even with a dropdown / checkboxes to let user select what fields to filter for
    // not in scope of this test hence not implemented
    dispatch(filterUsers(value, ["name", "email"]));
  }, [value, dispatch]);

  /**
   * Set input label to either be in input or above it (when has value or is in focus) for better UX
   * @param event type of action event
   */
  const toggleLabel = (event: { type: string }) => {
    if (event.type === "focus") {
      setShrinkLabel(true);
    } else {
      if (!value) {
        setShrinkLabel(false);
      }
    }
  };

  return (
    <div className={style.container}>
      <label className={shrinkLabel ? style.withInput : ""}>
        Search by user name or email...
      </label>
      <input
        className={style.searchInput}
        value={value}
        onFocus={toggleLabel}
        onBlur={toggleLabel}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
