import cn from "classnames";
import s from "./Layout.module.scss";

function Layout({ children, grow }) {
  return <div className={cn(s.root, grow && s.grow)}>{children}</div>;
}

export default Layout;
