import React from "react";

function HOC(WrappedComponent, entity) {
  return class HOC extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      const fetData = async () => {
        const url = `https://jsonplaceholder.typicode.com/${entity}`;
        const resp = await fetch(url);
        const dataList = await resp.json();
        this.setState({
          ...this.state,
          data: dataList,
        });
      };

      fetData();
    }
    render() {
      let { term, data } = this.state;
      let filteredData = data.slice(0, 5).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });
      return (
        <>
          <h2>{entity}</h2>
          <input
            type="text"
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
            value={term}
          />
          <WrappedComponent data={filteredData} />
        </>
      );
    }
  };
}

export default HOC;
