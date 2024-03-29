import React, { useEffect, useState } from "react";

export const TreeView = ({ data }) => {
  const [explorerData, setExplorerData] = useState(data);
  const [folderOrFileType, setFolderOrFileType] = useState("");

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

  const handleAddFileOrFolder = (e, item, type) => {
    e.stopPropagation();
    item.createFolderOrFile = true;
    item.isExpanded = true;
    let temp = structuredClone(explorerData);
    temp.forEach((element) => {
      if (element.id === item.id) {
        element = item;
        setFolderOrFileType(type);
      }
    });
    setExplorerData(temp);
  };

  const removeItem = (e, item) => {
    e.stopPropagation();
    item.createFolderOrFile = false;
    let temp = structuredClone(explorerData);
    temp.forEach((element) => {
      if (element.id === item.id) {
        element = item;
      }
    });
    setExplorerData(temp);
  };

  const handleKeyDown = (e, item) => {
    e.stopPropagation();
    if (e.keyCode === 13) {
      const tempFileFolder = {
        name: e.target.value,
        type: folderOrFileType,
        isLeaf: folderOrFileType === "file" ? true : false,
        isExpanded: false,
        children: [],
        id: Date.now(),
      };
      item.createFolderOrFile = false;
      item.children.unshift(tempFileFolder);
      let temp = structuredClone(explorerData);
      temp.forEach((element) => {
        if (element.id === item.id) {
          element = item;
        }
      });
      setExplorerData(temp);
    }
  };

  return (
    <div className="explorerWrapper">
      {explorerData?.map((item) => {
        if (!item.isLeaf) {
          return (
            <React.Fragment key={item.id}>
              <div
                className="treeNode"
                onClick={(e) => handleClick(e, item)}
                data-key={item.id}
              >
                <div className="actions">
                  <button
                    onClick={(e) => handleAddFileOrFolder(e, item, "folder")}
                  >
                    Folder +
                  </button>
                  <button
                    onClick={(e) => handleAddFileOrFolder(e, item, "file")}
                  >
                    File +
                  </button>
                </div>
                {item.name}
              </div>
              {item.createFolderOrFile && (
                <input
                  type="text"
                  className="newFileFolderName"
                  autoFocus
                  onBlur={(e) => removeItem(e, item)}
                  onKeyDown={(e) => handleKeyDown(e, item)}
                />
              )}

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
