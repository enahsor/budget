import { BsPlus } from "react-icons/bs";
import { Button } from "./lib";
import { Tooltip } from "@reach/tooltip";
import "@reach/tooltip/styles.css";

const AddButton = ({ onClick, type = "primary", label, ...props }) => {
  function handleClick(e) {
    e.preventDefault();
    onClick(e);
  }

  return (
    <Tooltip label={label}>
      <Button onClick={handleClick} type={type} {...props}>
        <BsPlus size="18" />
      </Button>
    </Tooltip>
  );
};

export default AddButton;
