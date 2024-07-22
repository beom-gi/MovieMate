import axios from 'axios';

const API_KEY = '4598ff0f4521fd0825d3ee2978bf5a31';
const BASE_URL = 'https://api.themoviedb.org/3';
const lang = 'ko-KR';
const reg = 'KR';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: lang,
    region: reg
  }
});

export default tmdb;
