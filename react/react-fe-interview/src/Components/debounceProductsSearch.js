import React from "react";
import { fetchData } from "../util/api";
import SearchInput from "./SearchInput";
import SearchSuggestion from "./SearchSuggestions";

const DebounceProductsSearch = () => {
  const [data, setData] = React.useState([]);

  const renderData = async (term) => {
    const data = await fetchData(term);
    setData(data);
  };

  const debounce = (callback, delay) => {
    let timer = null;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback.apply(context, args);
      }, delay);
    };
  };

  const debounceSearchFunc = React.useCallback(
    debounce((term) => renderData(term), 1000),
    []
  );
  const handleChange = (e) => {
    debounceSearchFunc(e.target.value);
  };
  return (
    <div>
      <SearchInput handleChange={handleChange} />
      <SearchSuggestion data={data?.products} />
    </div>
  );
};

export default DebounceProductsSearch;
