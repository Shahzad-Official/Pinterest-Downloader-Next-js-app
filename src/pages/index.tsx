import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import "../style/global.css";
import fetchData from "../api/fetchData";
import { ClipLoader } from "react-spinners";
import style from "./Home/Home.module.css";
import AppColors from "../constants/AppColors";
import Articles from "./Home/components/Articles";
import { DataModel } from "@/api/DataModel";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Layout from "@/components/Layout/Layout";


function Home() {
  const [url, setUrl] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUrl(inputValue);
  };
  const [data, setData] = useState<DataModel | null>(null);
  const callBack = useCallback(async () => {
    if (url !== "") {
      setLoading(true);
      await fetchData(url)
        .then((value) => {
          setData(value ?? null);
        })
        .catch();

      setLoading(false);
      setUrl("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, url]);

  useEffect(() => {
    callBack();
  }, [callBack]);
  return (
    <Layout>
      <div className={style.home}>
        <div className={style.formBox}>
          <h1>
            { "Pinterest Video Downloader"}
          </h1>
          <p>Download Pinterest Videos and Images</p>
          <span className="mt-10" />
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.input}>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={
                  "Paste Pinterest Video link"
                }
              />
            </div>
            <button
              className={`${inputValue === "" ? style.disableBtn : ""} ${
                style.paste_btn
              }`}
              type="submit"
            >
              {isLoading ? (
                <ClipLoader color={AppColors.secondaryColor} />
              ) : (
                "Download"
              )}
            </button>
          </form>

          <Link
            className={style.link}
            href={"/pinterest-image-downloader"}
            replace
          >
            {"Pinterest Images Downloader"}
          </Link>
        </div>
        {data !== null ? (
          <VideoPlayer data={data} loading={isLoading} />
        ) : (
          <Articles />
        )}
      </div>
    </Layout>
  );
}

export default Home;
