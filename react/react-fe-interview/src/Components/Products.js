import React, { useCallback, useEffect, useRef, useState } from "react";
const limit = 10;
function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);

  const [skip, setSkip] = useState(0);

  const fetchDataToRender = async (limit, skip) => {
    setLoading(true);
    setError(false);
    try {
      let data = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      let resp = await data.json();
      setTotal(resp.total);
      setSkip((prev) => prev + limit);
      setData((prev) => [...prev, ...resp.products]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  const observer = useRef(null);
  const lastItemObserver = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchDataToRender(limit, skip);
          }
        });
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading]
  );

  useEffect(() => {
    fetchDataToRender(limit, skip);
  }, []);

  useEffect(() => {
    if (skip >= total) {
      if (observer.current) {
        observer.current.disconnect();
      }
    }
  }, [data]);

  useEffect(() => {
    console.log(skip);
  }, [skip]);

  return (
    <>
      <div className="cardWrapper">
        {data.map((item, index) => {
          if (data.length === index + 1) {
            return (
              <div key={item.id} className="card" ref={lastItemObserver}>
                <h2>{item.title}</h2>
                <img src={item.thumbnail} alt={item.title} />
                <small>{item.description}</small>
              </div>
            );
          } else {
            return (
              <div key={item.id} className="card">
                <h2>{item.title}</h2>
                <img src={item.thumbnail} alt={item.title} />
                <small>{item.description}</small>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Products;
