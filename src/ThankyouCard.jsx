import illustration from "./assets/illustration-thank-you.svg";

export default function ThankyouCard(props) {
  return (
    <div className="card">
      <img className="illustration" src={illustration} alt="..." />
      <p className="rating">You selected {props.rating} out of 5</p>
      <div className="card-text thank-you-text">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
