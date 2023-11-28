import React, { useEffect, useRef, useState } from "react";
import styles from "./VideoPlayer.module.css";
import { BeatLoader, HashLoader } from "react-spinners";
import { DataModel } from "@/api/DataModel";
import AppColors from "@/constants/AppColors";
import Divider from "../Divider/Divider";

interface VideoPlayerProps {
  data: DataModel;
  loading?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ data, loading = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleForceDownload = async () => {
    const videoUrl = data.video ?? "";
    console.log(videoUrl);
    try {
      setIsLoading(true);
      const fileName = videoUrl.substring(videoUrl.lastIndexOf("/") + 1);
      const fetchData = await fetch(
        `https://chapbuy.com/social-downloader/social-downloader/proxy?url=${videoUrl}`
        
      );
      const blob = await fetchData.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading video:", error);
      window.open(videoUrl, "blank");
    }
    setIsLoading(false);
  };
  const handleForceDownloadImage = async () => {
    const imgUrl = data.thumbnail.url ?? "";
    console.log(imgUrl);
    try {
      setIsLoadingImage(true);
      const fileName = imgUrl.substring(imgUrl.lastIndexOf("/") + 1);
      const fetchData = await fetch(
        `https://chapbuy.com/social-downloader/social-downloader/proxy?url=${imgUrl}`
      );
      const blob = await fetchData.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading video:", error);
      window.open(imgUrl, "blank");
    }
    setIsLoadingImage(false);
  };

  function handleDownload() {
    window.open(data.video, "blank");
  }
  function handleDownloadImage() {
    window.open(data.thumbnail.url, "blank");
  }
  useEffect(() => {}, [data]);

  return (
    <div className={styles.parentBox}>
      {loading ? (
        <HashLoader color={AppColors.secondaryColor} />
      ) : (
        <>
          <h2>
            {data.video === undefined || data.video === ""
              ? "Your Image is Ready to Download"
              : "Your Video is Ready to Download"}
          </h2>
          <Divider />
          <h1 style={{ margin: "10px" }}>{data.title}</h1>
          <div className={styles.itemBox}>
            <>
              {data.video === undefined || data.video === "" ? (
                <img className={styles.video} src={data.thumbnail.url} alt="" />
              ) : (
                <video
                  className={styles.video}
                  src={data.video}
                  ref={videoRef}
                  controls
                ></video>
              )}
              <div className={styles.downloadButtonsBox}>
                {data.video === undefined ||
                data.video === null ||
                data.video === "" ? null : (
                  <>
                    <button
                      className={styles.downloadButton}
                      type="button"
                      onClick={handleDownload}
                    >
                      View Video
                    </button>
                    <span className="mt-20" />
                    <button
                      className={styles.downloadButton}
                      type="button"
                      onClick={handleForceDownload}
                    >
                      {isLoading ? (
                        <BeatLoader color="white" />
                      ) : (
                        "Download Video"
                      )}
                    </button>
                    <Divider/>
                  </>
                )}

               

                <button
                  className={styles.downloadButton}
                  type="button"
                  onClick={handleDownloadImage}
                >
                  {data.video === undefined || data.video === ""
                    ? "View Image"
                    : "View Thumbnail"}
                </button>
                <span className="mt-20" />
                <button
                  className={styles.downloadButton}
                  type="button"
                  onClick={handleForceDownloadImage}
                >
                  {isLoadingImage ? (
                    <BeatLoader color="white" />
                  ) : data.video === undefined || data.video === "" ? (
                    "Download Image"
                  ) : (
                    "Download Thumbnail"
                  )}
                </button>
              </div>
            </>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
