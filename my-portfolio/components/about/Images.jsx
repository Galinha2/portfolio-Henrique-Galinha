function Images() {
  const image = [1, 2, 3, 4];

  return (
    <>
      {image.map((img, index) => (
        <img
          className="w-[150px] hover:w-[250px] h-[440px] object-cover"
          key={index}
          src={`/about ${img}.png`}
          alt={`Image ${img}`}
        />
      ))}
    </>
  );
}

export default Images;
