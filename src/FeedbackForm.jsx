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
        <a
          class="btn-rating"
          href="#"
          data-value="1"
          onClick={props.handleSelect}
        >
          1
        </a>
        <a
          class="btn-rating"
          href="#"
          data-value="2"
          onClick={props.handleSelect}
        >
          2
        </a>
        <a
          class="btn-rating"
          href="#"
          data-value="3"
          onClick={props.handleSelect}
        >
          3
        </a>
        <a
          class="btn-rating"
          href="#"
          data-value="4"
          onClick={props.handleSelect}
        >
          4
        </a>
        <a
          class="btn-rating"
          href="#"
          data-value="5"
          onClick={props.handleSelect}
        >
          5
        </a>
      </div>
      <a class="btn-submit" href="#" onClick={props.handleSubmit}>
        Submit
      </a>
    </motion.div>
  );
}
