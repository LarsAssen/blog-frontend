import qs from "qs";

export function getStrapiURL(path = "") {
  const query = qs.stringify(
    {
      sort: "publishedAt:desc",
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://localhost:1337/api"
  }${path}?${query}`;
}

export async function fetchAPI(path: string) {
  const requesturl = getStrapiURL(path);
  const response = await fetch(requesturl);
  const data = await response.json();

  return data;
}

export async function fetcher(url: any, options = {}) {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  const data = await response.json();
  return data;
}
