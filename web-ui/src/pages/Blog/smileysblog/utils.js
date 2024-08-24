export function devProdRoute() {
  if (process.env.NODE_ENV === "production") {
    return "https://brendansmiley.com";
  } else {
    return "http://localhost:3000/";
  }
}
