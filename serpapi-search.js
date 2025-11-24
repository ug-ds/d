const { getJson } = require("serpapi");

getJson({
  q: "ug debating society",
  location: "Tbilisi, Georgia",
  hl: "ka",
  gl: "ge",
  google_domain: "google.ge",
  api_key: "YOUR_SECRET_API_KEY" // Replace with your actual SerpAPI key
}, (json) => {
  console.log(json);
});
