export const explorerData = [
  {
    name: "root",
    type: "folder",
    isLeaf: false,
    isExpanded: false,
    id: 1,
    children: [
      {
        name: "public",
        type: "folder",
        isLeaf: false,
        isExpanded: false,
        id: 2,
        children: [
          {
            name: "assets",
            type: "folder",
            isLeaf: false,
            isExpanded: false,
            id: 3,
            children: [
              {
                name: "logo.svg",
                type: "file",
                isLeaf: true,
                id: 4,
              },
              {
                name: "xyz.svg",
                type: "file",
                isLeaf: true,
                id: 5,
              },
            ],
          },
        ],
      },
      {
        name: "src",
        type: "folder",
        isLeaf: false,
        isExpanded: false,
        id: 6,
        children: [
          {
            name: "component",
            type: "folder",
            isLeaf: false,
            isExpanded: false,
            id: 7,
            children: [
              {
                name: "abc.tsx",
                type: "file",
                isLeaf: true,
                id: 8,
              },
              {
                name: "bca.tsx",
                type: "file",
                isLeaf: true,
                id: 9,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "package.json",
    type: "file",
    isLeaf: true,
    id: 10,
  },
  {
    name: "package.lock.json",
    type: "folder",
    isLeaf: false,
    id: 11,
    children: [],
  },
];
