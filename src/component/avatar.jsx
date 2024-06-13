import { useState } from "react";
import "./avatar.css";
import PropTypes from "prop-types";

export default function Avatar({ simpson }) {
  console.log(simpson);
  const [donut, setDonut] = useState(0);
  return (
    <figure>
      <img src={simpson.image} alt="" />,
      <h2>
        {simpson.firstName} {simpson.lastName}
      </h2>
      <button onClick={() => setDonut(donut + 1)}>🍩{donut}</button>
    </figure>
  );
}

Avatar.propTypes = {
  simpson: PropTypes.shape({
    image: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
};
