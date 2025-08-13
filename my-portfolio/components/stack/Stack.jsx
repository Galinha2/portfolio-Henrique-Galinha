import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";

function Stack() {
    const { language } = useLanguage();
    const headerContent = language === "En" ? contentEn.stacks : contentPt.stacks;

    return (
        <div className="m-auto text-center bg-[var(--gray)] p-10 pt-6">
            <h1>{headerContent.title}</h1>
            <img className="max-w-250 m-auto" src="/stack.png" alt="user stacks" />
        </div>
    )
}

export default Stack
