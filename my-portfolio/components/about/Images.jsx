function Images() {
  const image = [1, 2, 3, 4];

  return (
    <div className="flex justify-center  lg:min-w-160">
      {image.map((img, index) => (
        <img
          className="w-24 sm:w-32 md:w-36 lg:w-40 h-[420px] object-cover hover:w-60"
          key={index}
          src={`/about ${img}.png`}
          alt={`Image ${img}`}
        />
      ))}
    </div>
  );
}

export default Images;
