import cn from "classnames";
import s from "./Loader.module.scss";

function Loader({ className }) {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.spinner}></div>
    </div>
  );
}

export default Loader;
