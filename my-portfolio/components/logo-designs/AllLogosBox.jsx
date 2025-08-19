import LogoBox from "@/components/logo-designs/LogoBox";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";

// Component that displays a collection of logos with a title, descriptive text, and an interactive icon that shows an animated description
function AllLogosBox({ data }) {
  // Array of logos obtained from the received data, or empty array if there are no logos
  const logosArray = data.logos || [];
  // State that controls the display of the detailed description when clicking the icon
  const [description, setDescription] = useState(false);

  return (
    // Main container with black background and centered column alignment
    <div className="bg-[var(--text-black)] flex flex-col items-center justify-center p-5">
      {/* Title of the logo set */}
      <h4 className="mb-5 text-center text-white">{data.title}</h4>
      {/* Flexible container that organizes the logos and text side by side */}
      <div className="flex flex-wrap items-center justify-center w-full m-auto gap-15 md:gap-5 md:flex-nowrap l flex-no md:items-start lg:justify-between md:flex-row max-w-300">
        {/* Box containing the logos, with gray background and rounded borders */}
        <div className="flex flex-wrap min-w-108 justify-between gap-5 items-center w-110 bg-[var(--gray)] p-4 rounded-[25px]">
          {/* Maps the logos array to display each one inside a LogoBox */}
          {logosArray.map((logo, index) =>
            // For the first 6 logos uses a standard style, for the others a different style (width 100)
            index <= 5 ? (
              <LogoBox key={index} logo={logo} />
            ) : (
              <LogoBox className="w-100" key={index} logo={logo} />
            )
          )}
        </div>
        {/* Column containing the descriptive text and the interactive icon */}
        <div className="flex flex-col gap-5">
          {/* Main descriptive text, preserving line breaks and justified alignment */}
          <p className="w-full whitespace-pre-line text-justify text-white font-[900] lg:max-w-100">
            {data.text}
          </p>

          {/* Container for the "made" text and the icon button that activates the description */}
          <div className="relative flex items-center justify-start gap-1">
            {/* Additional "made" text */}
            <p className="w-fit whitespace-pre-line text-white font-[900] max-w-100">
              {data.made}
            </p>
            <>
              {/* Button that toggles the description state when clicked */}
              <button
                className="relative flex items-center justify-center cursor-pointer"
                onClick={() => setDescription(!description)}
              >
                {/* Div that receives an animated class when the description is active */}
                <div
                  className={`${description ? "animated-border" : ""} p-[7px]`}
                >
                  {/* Icon displayed, with hover scale effect */}
                  <img
                    className={`w-10 hover:w-13`}
                    src={`${data.icon}`}
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
                        {data.description}
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
      </div>
    </div>
  );
}

export default AllLogosBox;
