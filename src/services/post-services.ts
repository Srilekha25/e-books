import APIKEY from "../constants/constants";

export const getAllBooks = async () => {

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=flowers&&maxResults=30&key=${APIKEY}`,
    {
      headers: { Accept: "application/json" },
    }
  );
  if (response) {
    const dataFromAPI = await response.json();
    console.log("In post services",dataFromAPI.items);
    return dataFromAPI.items;
  }else{
    return;
  }
};
