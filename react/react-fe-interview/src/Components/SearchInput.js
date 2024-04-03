const SearchInput = ({ handleChange }) => {
  const handleInputChange = (e) => {
    handleChange(e);
  };
  return (
    <input type="text" placeholder="Search" onChange={handleInputChange} />
  );
};

export default SearchInput;
