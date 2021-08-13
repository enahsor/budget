import { Wrapper } from "./lib";
import { useState } from "react";
import { BsHouse, BsPerson, BsCreditCard, BsGear } from "react-icons/bs";
import NavButton from "components/NavButton";

const items = [
  { id: 1, Icon: BsHouse, label: "DashBoard" },
  { id: 2, Icon: BsPerson, label: "Accounts" },
  { id: 3, Icon: BsCreditCard, label: "Purchases" },
  { id: 4, Icon: BsGear, label: "Settings" },
];

const Nav = () => {
  const [active, setActive] = useState(items[0].id);

  return (
    <Wrapper>
      {items.map((item) => (
        <NavButton
          key={item.id}
          Icon={item.Icon}
          label={item.label}
          active={active === item.id}
          onClick={() => setActive(item.id)}
        />
      ))}
    </Wrapper>
  );
};

export default Nav;
