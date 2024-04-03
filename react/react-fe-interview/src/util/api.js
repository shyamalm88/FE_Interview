export const fetchData = async (term) => {
  let data = await fetch(`https://dummyjson.com/products/search?q=${term}`);
  let resp = await data.json();
  return resp;
};

export const fetchPaginationData = async (limit, skip) => {
  let data = await fetch(
    `https://dummyjson.com/posts?skip=${skip}&limit=${limit}`
  );
  let resp = await data.json();
  return resp;
};
