
function QuickInfo({text, title}) {

  return (
    <div>
      <h3 className="shadow-new rounded-full m-auto w-fit px-5 py-1 text-center mb-4 text-[2em] text-[var(--text-black)]">
        {title}
      </h3>
      <p className="max-w-[290px] text-justify text-[1.1em] text-[var(--text-gray font-bold)]">
        {text}
      </p>
    </div>
  );
}

export default QuickInfo;
