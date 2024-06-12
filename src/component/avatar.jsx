import "./avatar.css";

export default function Avatar({ simpson }) {
  console.log(simpson);
  return (
    <figure>
      <img src={simpson.image} alt="" />,
      <h2>
        {simpson.firstName} {simpson.lastName}
      </h2>
    </figure>
  );
}
