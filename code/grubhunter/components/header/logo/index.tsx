import Image from "next/image";
import Link from "next/link";
import style from "./index.module.css";
import logo from "../../../public/assets/logo.svg";

const Logo = () => {
  return (
    <div className={style.root}>
      <Link href={"/"}>
        <Image src={logo} alt={"GrubHunter Logo"} width={100} height={50} />
      </Link>
    </div>
  );
};

export default Logo;
