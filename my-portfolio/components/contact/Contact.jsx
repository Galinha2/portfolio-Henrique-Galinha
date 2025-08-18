import ContactBox from "./ContactBox";
import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "@/components/LanguageContext";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

function Contact() {
  const { language } = useLanguage();
  // Selects the correct content depending on chosen language
  const headerContent =
    language === "En" ? contentEn.contacts : contentPt.contacts;
  const boxContent =
    language === "En" ? contentEn.contacts.info : contentPt.contacts.info;

  return (
    <div id="contact" className="h-screen w-screen">
      <div className="flex flex-col m-auto w-screen h-screen gap-20 p-5 lg:px-20 text-left justify-center items-center">
        {/* Section header */}
        <div className="px-2 w-full">
          <h1 className="w-full">{headerContent.title}</h1>
          <h5 className="text-[var(--text-black)]">{headerContent.subtitle}</h5>
        </div>

        {/* Contact info boxes */}
        <div className="flex flex-col self-center w-full">
          {/* Name */}
          <ContactBox title={boxContent.title} description={boxContent.name} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between mt-5">
            {/* Email (opens default mail app) */}
            <ContactBox
              link={`mailto:${boxContent.email}`}
              title={boxContent.title1}
              description={boxContent.email}
              icon={<IoIosMailUnread />}
            />

            {/* Phone (opens dialer on mobile or VoIP on desktop) */}
            <ContactBox
              link={`tel:${boxContent.cellphone}`}
              title={boxContent.title2}
              description={boxContent.cellphone}
              icon={<FaSquarePhoneFlip />}
            />

            {/* LinkedIn */}
            <ContactBox
              link={"https://www.linkedin.com/in/henrique-galinha/"}
              title={boxContent.title3}
              description={boxContent.linkedin}
              icon={<FaLinkedin />}
            />

            {/* GitHub */}
            <ContactBox
              link={"https://github.com/Galinha2"}
              title={boxContent.title4}
              description={boxContent.github}
              icon={<FaGithubSquare />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
