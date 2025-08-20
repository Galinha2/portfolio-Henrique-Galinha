import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function LogoBox({ className, logo }) {
      const [click, setClick] = useState(false);
  return (
    <div
    onClick={() => setClick(!click)}
      className={`cursor-pointer bg-white shadow-md flex items-center justify-center w-30 h-30 ${className} rounded-[20px]`}
    >
      <img className="p-2" src={logo} alt="Logo Design" />
      {!click ? (
        ""
      ) : (
        <div
          className="fixed z-100 top-0 left-0 flex items-center justify-center w-screen h-screen overflow-auto bg-[var(--gray-transparent)]"
          onClick={() => setClick(!click)}
        >
          <div className="flex flex-col items-start gap-2 p-5 xl:flex-row">
            <button
              className="cursor-pointer"
              onClick={() => setClick(!click)}
            >
              <IoIosCloseCircleOutline className="text-4xl bg-white rounded-full shadow-md hover:bg-[var(--text-black)] hover:text-white" />
            </button>
            <img
              src={logo}
              alt="Website image"
              className="relative w-full rounded-[25px] p-5 bg-white max-w-150"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default LogoBox;
