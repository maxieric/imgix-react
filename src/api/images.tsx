const getImages = async () =>
  fetch('https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json').then((res) =>
    res.json(),
  );
export default getImages;
