import Logo from "./logo";
import style from "./index.module.css";
import AuthElement from "./auth-element";

const Header = () => {
  return (
    <header className={style.root}>
      <div className="layout-grid">
        <Logo />
        <AuthElement />
      </div>
    </header>
  );
};

export default Header;
