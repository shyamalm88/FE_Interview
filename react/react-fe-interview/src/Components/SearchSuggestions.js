import React from "react";

const SearchSuggestion = ({ data }) => {
  console.log(data);

  return (
    <div className="suggesstionsWrapper">
      {data?.length === 0 && "No Data Found"}
      {data?.map((d) => {
        return (
          <div key={d.id} className="suggesstions">
            <div className="details">
              <img src={d.thumbnail} alt={d.title} />
              <h2>{d.title}</h2>
              <div className="description">{d.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchSuggestion;
