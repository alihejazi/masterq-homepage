import "./Input.scss";

type Option = {
  value: number;
  name: string;
};

const Input = ({
  label,
  name,
  type,
  options,
  placeholder,
  onChange,
}: {
  label: string;
  name: string;
  type: "text" | "date" | "select" | "number";
  options?: Option[];
  placeholder?: string;
  onChange?: (e: any) => void;
}) => {
  let inputComponent;

  if (type === "select") {
    inputComponent = (
      <select name={name} id={label} onChange={onChange}>
        {options?.map((o) => <option value={o.value}>{o.name}</option>)}
      </select>
    );
  } else {
    if (type === "number" && label.includes("Pass mark")) {
      inputComponent = (
        <input
          type={type}
          name={name}
          id={label}
          placeholder={placeholder}
          min="0"
          max="100"
          onChange={onChange}
        />
      );
    } else {
      inputComponent = (
        <input
          type={type}
          name={name}
          id={label}
          placeholder={placeholder}
          onChange={onChange}
        />
      );
    }
  }

  return (
    <div className="Input">
      <label className="inputLabel" htmlFor="assignmentTitle">
        {label}
      </label>
      {inputComponent}
    </div>
  );
};

export default Input;
