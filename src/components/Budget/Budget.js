import { Wrapper, Row, Item } from "./lib";
import { HiCash } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSpring } from "react-spring";
import { useState } from "react";

function Budget({ data: { name, income, date, ...more }, ...props }) {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  const styleProps = useSpring({
    opacity: isBeingHovered ? 0.8 : 1,
    transform: `scale(${isBeingHovered ? 1.05 : 1})`,
  });
  const iconSize = "25";

  return (
    <Wrapper
      style={styleProps}
      onMouseEnter={() => setIsBeingHovered(true)}
      onMouseLeave={() => setIsBeingHovered(false)}
    >
      <Row>
        <HiCash size={iconSize} />
        <Item>{date}</Item>
      </Row>
      <div>
        <Row>
          <Item size="md" bold>
            {name}
          </Item>
        </Row>
        <Row>
          <Item size="lg" format="cash">
            {income}
          </Item>
          <BsThreeDotsVertical size={iconSize} />
        </Row>
      </div>
    </Wrapper>
  );
}

export default Budget;
