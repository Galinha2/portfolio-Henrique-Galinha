import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function WebsiteBox({ image }) {
  const [click, setClick] = useState(false);

  return (
    <>
      <button
        className="cursor-pointer flex items-center p-5 justify-center bg-white rounded-[25px] shadow-md"
        onClick={() => setClick(!click)}
      >
        <img className="shadow-md w-100" src={image} alt="Website image" />
      </button>
      {!click ? (
        ""
      ) : (
        <div className="fixed z-100 top-0 flex items-start justify-center w-screen h-screen overflow-auto bg-[var(--gray-transparent)]"
        onClick={() => setClick(!click)}>
          <div className="flex flex-col items-start gap-2 p-5 xl:flex-row">
              <button className="cursor-pointer mt-21" onClick={() => setClick(!click)}>
                <IoIosCloseCircleOutline className="text-4xl bg-white rounded-full shadow-md hover:bg-[var(--text-black)] hover:text-white" />
              </button>
              <img
                src={image}
                alt="Website image"
                className="relative xl:mt-20 w-300"
              />
          </div>
        </div>
      )}
    </>
  );
}

export default WebsiteBox;
