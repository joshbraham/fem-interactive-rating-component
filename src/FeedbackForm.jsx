import { motion } from "framer-motion";
import iconStar from "./assets/icon-star.svg";

export default function FeedbackForm(props) {
  return (
    <motion.div key="fbf" className="card" {...props.transition}>
      <picture className="star-icon">
        <img src={iconStar} alt="Star Icon" />
      </picture>
      <div className="card-text">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating-wrapper">
        <button class="btn-rating" data-value="1" onClick={props.handleSelect}>
          1
        </button>
        <button class="btn-rating" data-value="2" onClick={props.handleSelect}>
          2
        </button>
        <button class="btn-rating" data-value="3" onClick={props.handleSelect}>
          3
        </button>
        <button class="btn-rating" data-value="4" onClick={props.handleSelect}>
          4
        </button>
        <button class="btn-rating" data-value="5" onClick={props.handleSelect}>
          5
        </button>
      </div>
      <button
        class="btn-submit"
        onClick={props.handleSubmit}
        style={props.submitBtnStyle}
      >
        Submit
      </button>
    </motion.div>
  );
}
