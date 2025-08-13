import { useState } from "react";
import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";

/* UserPhoto component: Displays the user's photo with a clickable effect and name */
function UserPhoto() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.hero : contentPt.hero;

  // State to toggle between two photo effects when clicked
  const [effect, setEffect] = useState(false);

  return (
    // Container for the user photo and name
    <div>
      {/* Picture frame container with hover effect */}
      <div
        className={`w-[230px] m-auto rounded-full shadow-md bg-[var(--horizontal-line)] cursor-pointer hover:w-[240px]`}
        style={{ boxShadow: "0px 0px 2px #00000047, inset 0px 0px 2px white" }}
        onClick={() => setEffect(!effect)}
      >
        {/* user icon with initials */}
        <div className="flex p-2.5 items-center justify-center h-full w-full rounded-full bg-[var(--gray)] hover:shadow-[var(--shadows-third-person-light)]">
          <p className={`text-center text-[var(--text-blue)] font-bold`}>
            {/* Toggle between two different user images depending on effect state */}
            {effect ? (
              <img
                src="/usereffect.png"
                alt="User effect"
                className="object-cover w-full h-full rounded-full"
              />
            ) : (
              <img
                style={{
                  boxShadow:
                    "4px 4px 4px var(--orange-user-icon), -4px -4px 4px var(--blue-user-icon)",
                }}
                src="/110-DSCF0759 1.png"
                alt="User photo"
                className="object-cover w-full h-full rounded-full"
              />
            )}
          </p>
        </div>
      </div>

      {/* User's greeting and name displayed below the photo */}
      <div className="mt-10">
        <h3 className="text-center text-[2.5em] text-[var(--text-black)]">
          {headerContent.greeting}
        </h3>
        <h2 className="text-center mt-[-10] text-[2.5em] font-black text-[var(--yellow)]">
          {headerContent.name}
        </h2>
      </div>
    </div>
  );
}

export default UserPhoto;
