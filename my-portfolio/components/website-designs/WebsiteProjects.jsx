import WebsiteBox from "./WebsiteBox";
import IconClick from "../IconClick";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

function WebsiteProjects({ data }) {
  if (!data) return null; // fallback caso data seja undefined

  const images = data.images || [];
  const videos = data.video || [];
  const [selected, setSelected] = useState(null);

  const handleClick = (item, isVideo = false) => {
    setSelected({ src: item, isVideo });
  };

  const handleClose = () => setSelected(null);

  return (
    <div className="bg-[var(--text-black)] flex-wrap w-screen gap-5 p-5 flex flex-col items-center justify-center">
      <h4 className="w-full mt-20 text-left text-white max-w-300">{data.title}</h4>
      <p className="w-full text-2xl font-[900] text-justify max-w-300 text-white">
        {data.text}
      </p>
      <div className="flex items-center justify-center">
        <p className="w-full text-2xl font-[900] text-center text-white">
          {data.made}
        </p>
        <IconClick icon={data.icon} text={data.description} />
      </div>

      <div className="flex flex-wrap w-full max-w-300 items-start justify-center gap-5 p-5 bg-[var(--gray)] rounded-[25px]">
        {images.map((image, index) => (
          <WebsiteBox key={index} image={image} />
        ))}
        {videos.map((video, index) => (
          <button
            key={index}
            className="group cursor-pointer flex items-center justify-center p-5 bg-[var(--gray)] rounded-[25px] relative"
            onClick={() => handleClick(video, true)}
          >
            <video className="rounded-md z-[0px] shadow-md w-300">
              <source src={video} type="video/mp4" />
            </video>
            <FaPlay className="absolute top-1/2 left-1/2 text-white text-[3em] transform -translate-x-1/2 -translate-y-1/2 group-hover:text-[var(--yellow)] transition-colors duration-300" />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed z-[999] top-0 left-0 w-screen h-screen flex items-center justify-center bg-[var(--gray-transparent)] overflow-auto"
          onClick={handleClose}
        >
          <div className="relative flex items-start justify-center gap-5">
            <button className="mt-0 cursor-pointer" onClick={handleClose}>
              <IoIosCloseCircleOutline className="text-4xl bg-white rounded-full shadow-md hover:bg-[var(--text-black)] hover:text-white" />
            </button>
            {selected.isVideo ? (
              <video
                src={selected.src}
                controls
                autoPlay
                className="max-w-full max-h-screen rounded-md"
              />
            ) : (
              <img
                src={selected.src}
                alt="Website image"
                className="max-w-full max-h-screen rounded-md"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WebsiteProjects;
