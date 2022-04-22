import { Routes, Route } from "react-router-dom";
import RatingApp from "../components/ratingApp";
import RatingSubmit from "../components/ratingSubmit.jsx";

const MyRoutes = ({ rating, setRating }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<RatingApp rating={rating} setRating={setRating} />}
      />
      <Route path="/thank-you" element={<RatingSubmit rating={rating} />} />
    </Routes>
  );
};

export default MyRoutes;
