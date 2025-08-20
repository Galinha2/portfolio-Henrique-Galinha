import LogoBox from "@/components/logo-designs/LogoBox";
import IconClick from "../IconClick";
// Component that displays a collection of logos with a title, descriptive text, and an interactive icon that shows an animated description
function AllLogosBox({ data }) {
  // Array of logos obtained from the received data, or empty array if there are no logos
  const logosArray = data.logos || [];

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
            <IconClick icon={data.icon} text={data.description} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllLogosBox;
