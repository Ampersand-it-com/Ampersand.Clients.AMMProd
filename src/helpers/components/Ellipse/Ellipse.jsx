import cn from "classnames";
import s from "./Ellipse.module.scss";

const Ellipse = ({ className }) => {
  return (
    <div className={cn(s.ellipse, className)}>
      <div className={s.ellipse1}></div>
      <div className={s.ellipse2}></div>
    </div>
  );
};

export default Ellipse;
