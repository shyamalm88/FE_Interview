import React, { useEffect, useRef, useState } from "react";
const limit = 10;
function Products() {
  const [data, setData] = useState([]);
  const [dataLimit, setDataLimit] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const pageNum = useRef(1);

  const observerRef = useRef();

  const fetchData = async (pageNum = 1) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${Math.abs(
          pageNum
        )}`
      );
      const data = await res.json();
      setData((prev) => [...prev, ...data.products]);
      setDataLimit(data.total);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    if (Math.abs(pageNum.current) >= dataLimit) {
      setHasMore(false);
    }
  }, [data, dataLimit]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (hasMore) {
            pageNum.current = pageNum.current - 1 * limit;
            fetchData(pageNum.current);
          }
        }
      });
    });
    observer.observe(observerRef.current);
  }, [observerRef, hasMore]);

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <>
      <div className="cardWrapper">
        {data.map((item) => {
          return (
            <div key={item.id} className="card">
              <h2>{item.title}</h2>
              <img src={item.thumbnail} />
              <small>{item.description}</small>
            </div>
          );
        })}
      </div>
      <div
        ref={observerRef}
        style={{ textAlign: "center", marginBottom: "10px" }}
      >
        Loading...
      </div>
    </>
  );
}

export default Products;
