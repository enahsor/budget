import { Button } from "./lib";
import { useState } from "react";
import { useSpring } from "react-spring";

const NavButton = ({ Icon, label, active, onClick }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);
  const style = useSpring({
    opacity: active ? 1 : isBeingHovered ? 0.5 : 1,
  });

  function handleClick() {
    onClick();
  }

  return (
    <Button
      style={style}
      active={active}
      onClick={handleClick}
      onMouseEnter={() => setIsBeingHovered(true)}
      onMouseLeave={() => setIsBeingHovered(false)}
    >
      <Icon size="18" />
      <span>{label}</span>
    </Button>
  );
};

export default NavButton;
