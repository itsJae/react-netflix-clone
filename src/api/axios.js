import axios from "axios";

// API Key: e5b3472b2645e71aeb6e0fb6518ab1f7
// API Read Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWIzNDcyYjI2NDVlNzFhZWI2ZTBmYjY1MThhYjFmNyIsIm5iZiI6MTczMTMzNDk4My40NDU5MzUyLCJzdWIiOiI2NzMyMTI3ZGYzZWFmYzUyMDFmZDRjN2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2VnDs7ZA9hCbPwcsgv1GhljNoKYRKDFFH7lXanA00rE

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e5b3472b2645e71aeb6e0fb6518ab1f7",
    language: "en-US",
  },
});

export default instance;
