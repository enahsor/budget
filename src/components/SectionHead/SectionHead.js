import AddButton from "components/AddButton";
import { Wrapper, Name } from "./lib";

function SectionHead({ name, onAdd, type = 1, ...props }) {
  function handleClick(e) {
    onAdd(e);
  }

  return (
    <Wrapper>
      <Name type={type}>{name}</Name>
      <AddButton type="primary" onClick={handleClick} />
    </Wrapper>
  );
}

export default SectionHead;
