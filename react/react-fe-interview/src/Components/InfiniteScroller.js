import React from "react";
import { fetchPaginationData } from "../util/api";
// let observer;
function InfiniteScroller() {
  const [paginationData, setPaginationData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(10);
  const [skip, setSkip] = React.useState(0);
  const [total, setTotal] = React.useState(1);

  const observer = React.useRef(null);

  const lastSentinel = React.useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => {
            if (entry.isIntersecting) {
              fetchPaginationDataForRender(limit, skip);
            }
          },
          {
            rootMargin: "10px",
          }
        );
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const fetchPaginationDataForRender = async (limit, skip) => {
    setLoading(true);
    const data = await fetchPaginationData(limit, skip);
    setTotal(data.total);
    setPaginationData([...paginationData, ...data.posts]);
    setLoading(false);
  };

  React.useEffect(() => {
    if (skip >= total) {
      if (observer.current) {
        observer.current.disconnect();
      }
    } else {
      setSkip(skip + limit);
    }
  }, [paginationData]);

  React.useEffect(() => {
    console.log(skip);
  }, [skip]);

  React.useEffect(() => {
    fetchPaginationDataForRender(limit, skip);
  }, []);

  return (
    <div>
      <ul>
        {paginationData.map((item, index) => {
          if (paginationData.length === index + 1) {
            return (
              <li key={item.id} ref={lastSentinel}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </li>
            );
          } else {
            return (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default InfiniteScroller;
