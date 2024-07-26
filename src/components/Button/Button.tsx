import { MouseEventHandler } from "react";
import "./Button.scss";
import { Link, useNavigate } from "react-router-dom";
const Button = (props: {
  text: string;
  disabled?: boolean;
  linkTo?: string;
  type?: "cancel" | "inverse" | "navy";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  submit?: boolean;
  linkState?: any;
}) => {
  const navigate = useNavigate();
  const buttonClicked = () => {
    if (props.linkTo) {
      navigate(props.linkTo);
    }
  };

  if (props.linkTo) {
    return (
      <div className="Button">
        <Link to={props.linkTo} className={props.type} state={props.linkState}>{props.text}</Link>
      </div>
    )
  }

  return (
    <div className="Button">
      <button
        disabled={props.disabled}
        onClick={props.onClick ? props.onClick : buttonClicked}
        className={props.type + ' ' + (props.disabled ? 'disabled' : '')}
        type={props.submit ? "submit" : "button"}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
