import { Children } from "react";
import { MainPage } from "../../../pages/main";
import './style.css';

function Wrapper({ children }) {
  return (
    <div className="wrapper">
      {children}
    </div>
  )
}

export { Wrapper };