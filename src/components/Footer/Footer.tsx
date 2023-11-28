import Link from "next/link";
import style from "./Footer.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  function handleDisclaimer() {
    toast(
      `Pinterest Downloader does not host any pirated or copyright-protected content on its servers. The videos or images that users download via our tool are sourced directly from their respective CDN servers. We operate solely as a platform facilitating the download process.It's important to note that this tool is not affiliated with Pinterest in any capacity. We are an independent service providing a convenient means for users to download content available on Pinterest through legitimate channels. We do not endorse or encourage the unauthorized downloading or distribution of copyrighted material. Users are responsible for ensuring they have the necessary permissions or rights to download and use the content obtained through our tool.`,

      {
        position: "top-center",
        autoClose: 10000,
      }
    );
  }
  return (
    <footer className={style.footer}>
      <div className={style.copyrightText}>
        Copyright &copy; {new Date().getFullYear()} &nbsp; {" "}
        <Link className={style.link} href={'/'} replace>
           PinterestDownloader
        </Link>
        <h4 className={style.disclaimer} onClick={handleDisclaimer}>| Disclaimer | </h4>
        <Link className={style.link} href={'/privacy-policy'} replace={true}>
          <h4>Privacy Policy</h4>
        </Link>
      </div>
      <ToastContainer />
    </footer>
  );
}

export default Footer;
