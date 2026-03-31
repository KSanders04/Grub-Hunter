import Logo from "./logo";
import style from "./index.module.css";

const Header = () => {
  return (
    <header className={style.root}>
      <div className="layout-grid">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
