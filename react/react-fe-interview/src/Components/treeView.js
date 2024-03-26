import React, { useState } from "react";

export const TreeView = ({ data }) => {
  const [explorerData, setExplorerData] = useState(data);
  const handleClick = (e, item) => {
    e.stopPropagation();
    if (!item.isLeaf) {
      item.isExpanded = !item.isExpanded;
    }

    let temp = structuredClone(explorerData);

    temp.forEach((element) => {
      if (element.id === item.id) {
        element = item;
      }
    });
    setExplorerData(temp);
  };

  return (
    <div className="explorerWrapper">
      {explorerData.map((item) => {
        if (!item.isLeaf) {
          return (
            <React.Fragment key={item.id}>
              <div
                className="treeNode"
                onClick={(e) => handleClick(e, item)}
                data-key={item.id}
              >
                {item.name}
              </div>
              {item.isExpanded && (
                <div className="treeNode">
                  <TreeView data={item.children} />
                </div>
              )}
            </React.Fragment>
          );
        }
        return (
          <div className="treeNode" key={item.id}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
