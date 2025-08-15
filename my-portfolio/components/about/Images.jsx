function Images() {
  const image = [1, 2, 3, 4];

  return (
    <>
      {image.map((img, index) => (
        <img
          className="w-[130px] hover:w-[230px] h-[420px] object-cover"
          key={index}
          src={`/about ${img}.png`}
          alt={`Image ${img}`}
        />
      ))}
    </>
  );
}

export default Images;
