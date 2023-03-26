import { useRef, useState } from "react";
import "./App.css";
import FeedbackForm from "./FeedbackForm";
import ThankyouCard from "./ThankyouCard";

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

  return submitted ? (
    <ThankyouCard rating={rating} />
  ) : (
    <FeedbackForm handleSelect={handleSelect} handleSubmit={handleSubmit} />
  );
}

export default App;
