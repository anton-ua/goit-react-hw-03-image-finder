import axios from "axios";

const Refs = {
  baseUrl:
    "https://pixabay.com/api/?key=15526062-e3b1fa36c29391c170e7a5624&image_type=photo&orientation=horizontal&per_page=12"
};

export const FetchImages = (search, page = 1) =>
  axios.get(`${Refs.baseUrl}&q=${search}&page=${page}`);
