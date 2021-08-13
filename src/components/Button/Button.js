import { Wrapper } from "./lib";

const Button = ({
  onClick,
  buttonText,
  type = "primary",
  filled = true,
  ...props
}) => {
  function handleClick(e) {
    onClick(e);
  }

  return (
    <Wrapper onClick={handleClick} type={type} filled={filled}>
      {buttonText ? buttonText : props.children}
    </Wrapper>
  );
};

export default Button;
