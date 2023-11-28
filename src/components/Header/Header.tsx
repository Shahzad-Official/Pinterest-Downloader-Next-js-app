import { useEffect, useState } from "react";
import headerStyle from "./Header.module.css";
import Hamburger from "hamburger-react";
import Drawer from "../Drawer/Drawer";
import Link from "next/link";
import { useRouter } from "next/router";
import performHardReload from "@/utils/hot_reload";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const [isImage, setIsImage] = useState(false);
  function handleIsImage() {
    setIsImage((state) => !state);
  }
  const router = useRouter();
  function handlHomeClick() {
    router.replace("/").then((value)=>{
      if(value){
       performHardReload();
      }
    });
    
  }
  useEffect(() => {
    if (router.pathname === "/") {
      setIsImage(false);
    } else {
      setIsImage(true);
    }
  }, [router.pathname]);
  return (
    <header className={headerStyle.header}>
      <Drawer handleIsImage={handleIsImage} isImage={isImage} isOpen={isDrawerOpen} onClose={()=>{
        setIsDrawerOpen(false);
      }}/>
        
      
      <div className={headerStyle.logoText} onClick={handlHomeClick}>
        <h2 className={headerStyle.logoLeftText}>Pinterest</h2>
        <h2 className={headerStyle.logoRightText}>Downloader</h2>
      </div>
      <div className={headerStyle.menu}>
        <Hamburger toggled={isDrawerOpen} onToggle={(value)=>{
          setIsDrawerOpen(value);
        }}/>
      </div>

      <div className={headerStyle.headerActions}>
        <Link
          onClick={handleIsImage}
          className={headerStyle.link}
          href={isImage ? "/" : "/pinterest-image-downloader"}
          replace
        >
          {isImage
            ? "Pinterest Videos Downloader"
            : "Pinterest Images Downloader"}
        </Link>
        <Link className={headerStyle.link} href={"/about"} children={"About"} />
        <Link
          className={headerStyle.link}
          href={"/contact-us"}
          children={"Contact Us"}
        />
      </div>
    </header>
  );
}

export default Header;
