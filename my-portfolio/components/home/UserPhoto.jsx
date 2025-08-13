import { useEffect, useState } from "react";

function UserPhoto() {
  return (
    <>
      {/* picture frame */}
      <div
        className={`w-[230px] rounded-full shadow-md bg-[var(--horizontal-line)]`}
        style={{ boxShadow: "0px 0px 2px #00000047, inset 0px 0px 2px white" }}
      >
        {/* user icon with initials */}
        <div className="flex p-2.5 items-center justify-center h-full w-full rounded-full bg-[var(--gray)]">
          <p className={`text-center text-[var(--text-blue)] font-bold`}>
            <img
              style={{
                boxShadow:
                  "4px 4px 4px var(--orange-user-icon), -4px -4px 4px var(--blue-user-icon)",
              }}
              src="/110-DSCF0759 1.png"
              alt="User photo"
              className="object-cover w-full h-full rounded-full"
            />
          </p>
        </div>
      </div>
    </>
  );
}

export default UserPhoto;
