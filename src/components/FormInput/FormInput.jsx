import {useState} from "react";
import "./formInput.scss";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;


  const handleFocus = (e) => {
    setFocused(true);
  };

  if(inputProps.name === 'message'){
      return (
          <div className="formInput">
              <label>{label}</label>
              <textarea
                  {...inputProps}
                  onChange={onChange}
                  onBlur={handleFocus}
                  onFocus={() =>
                      setFocused(true)
                  }
                  focused={focused.toString()}
              />
              <span>{errorMessage}</span>
          </div>
      );  }


  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
