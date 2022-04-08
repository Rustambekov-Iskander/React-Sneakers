import React, { FC } from "react";
import cl from "./Input.module.scss";

interface InputProps {
  placeholder?: string;
  searchIcon?: boolean;
  maxLength?: number;
  onChange?: any;
  value?: string;
}

const Input: FC<InputProps> = ({
  placeholder = "Поиск...",
  searchIcon = true,
  maxLength = 50,
  onChange,
  value,
}) => {
  return (
    <div className={cl.Input}>
      <input
        value={value}
        onChange={onChange}
        className={searchIcon ? [cl.input, cl.search].join(" ") : cl.input}
        type="text"
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
