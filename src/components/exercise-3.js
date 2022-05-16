import ColorForm from "../components/add-color-form";
import ColorBadge from "../components/color-badge";
import { useState } from "react";

const Exercise3 = () => {
  const [badges, setBadges] = useState([{ id: 0, badgeColor: "#ffffff" }]);

  const addBadge = (badge) => {
    const newBadges = [...badges];
    badge.id = badges.length;
    newBadges.push(badge);
    setBadges(newBadges);
  };

  const removeBadge = (id) => {
    const newBadges = badges.filter((badge) => badge.id !== id);
    setBadges(newBadges);
  };

  return (
    <>
      <span className="exercise-title">Exercise 3</span>
      <div className="exercise d-flex flex-column align-items-center flex-wrap">
        <div
          className="gradient-container"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${badges
              .map((badge) => badge.badgeColor)
              .toString()})`,
          }}
        ></div>
        <ColorForm handleClick={addBadge} />
        <div className="badge-container d-flex flex-wrap">
          {badges.map((badge) => (
            <ColorBadge key={badge.id} {...badge} handleRemove={removeBadge} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Exercise3;
