import { motion } from "framer-motion";
import illustration from "./assets/illustration-thank-you.svg";

export default function ThankyouCard(props) {
  return (
    <motion.div key="tyc" className="card" {...props.transition}>
      <img className="illustration" src={illustration} alt="..." />
      <p className="rating">You selected {props.rating} out of 5</p>
      <div className="card-text center-text">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </motion.div>
  );
}
