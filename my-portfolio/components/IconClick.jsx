import { GoDotFill } from "react-icons/go";
import { useState } from "react";

function IconClick({ icon, text }) {
  const [description, setDescription] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      {/* Main descriptive text, preserving line breaks and justified alignment */}

      {/* Container for the "made" text and the icon button that activates the description */}
      <div className="relative flex items-center justify-start gap-1">
        <>
          {/* Button that toggles the description state when clicked */}
          <button
            className="relative flex items-center justify-center cursor-pointer"
            onClick={() => setDescription(!description)}
          >
            {/* Div that receives an animated class when the description is active */}
            <div className={`${description ? "animated-border" : ""} p-[7px]`}>
              {/* Icon displayed, with hover scale effect */}
              <img
                className={`w-10 hover:w-13`}
                src={`${icon}`}
                alt="user stacks"
              />
            </div>

            {/* If the description state is true, displays the description in a balloon with shadow and dot icon */}
            {description && (
              <>
                {/* Description balloon positioned above the button, with translucent background and rounded borders */}
                <div
                  className={`absolute top-[-70px] left-1/2 transform -translate-x-1/2 w-32 bg-[var(--gray-transparent)] shadow-new h-13 rounded-[25px] p-2 flex items-center justify-center z-20`}
                >
                  <p className="font-bold text-[var(--text-black)] text-center">
                    {text}
                  </p>
                </div>
                {/* Dot icon indicating the description, positioned with orange shadow */}
                <GoDotFill className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 text-white z-30 drop-shadow-[2px_2px_4px_var(--orange-user-icon)]" />
              </>
            )}
          </button>
        </>
      </div>
    </div>
  );
}

export default IconClick;
