import { getStrapiURL } from "lib/api";

const getSinglePost = async (id: string) => {
  const url = `${getStrapiURL()}/posts/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getPosts = async () => {
  const url = `${getStrapiURL()}/posts`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getPostsByCategory = async (category: string) => {
  const url = `${getStrapiURL()}/posts?category=${category}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getPostsByTag = async (tag: string) => {
  const url = `${getStrapiURL()}/posts?tag=${tag}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { getSinglePost, getPosts, getPostsByCategory, getPostsByTag };
