import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import FeedbackForm from "./FeedbackForm";
import ThankyouCard from "./ThankyouCard";

import "./styles/App.css";

function App() {
  const [rating, setRating] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ratingRef = useRef(null);

  const setActive = (element) => {
    if (element == null) return;
    element.classList.add("active");
  };

  const setInactive = (element) => {
    if (element == null) return;
    element.classList.remove("active");
  };

  const handleSelect = (event) => {
    const selectedRating = event.target.dataset.value;
    if (rating === selectedRating) {
      setRating("");
      setInactive(event.target);
      ratingRef.current = null;
    } else {
      setRating(selectedRating);
      setInactive(ratingRef.current);
      setActive(event.target);
      ratingRef.current = event.target;
    }
  };

  const handleSubmit = () => {
    if (!rating) return alert("You must select a rating.");
    setSubmitted(true);
  };

  // Framer motion.div props
  const transition = {
    initial: { y: "25%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-25%", opacity: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  return (
    <AnimatePresence>
      {submitted ? (
        <ThankyouCard rating={rating} transition={transition} />
      ) : (
        <FeedbackForm
          handleSelect={handleSelect}
          handleSubmit={handleSubmit}
          transition={transition}
        />
      )}
    </AnimatePresence>
  );
}

export default App;
