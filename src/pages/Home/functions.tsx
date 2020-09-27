export const postData = async (url: string = "", data = {}) => {
  try {
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json(); 
  } catch (e) {
    console.log(e);
  }
};

export const editActions: {
  title: string;
  key: string;
}[] = [
  {
    title: "Crop",
    key: "crop",
  },
  {
    title: "Move Up",
    key: "moveUp",
  },
  {
    title: "Move Down",
    key: "moveDown",
  },
  {
    title: "move Right",
    key: "moveRight",
  },
  {
    title: "Zoom In",
    key: "zoomIn",
  },
  {
    title: "Zoom Out",
    key: "zoomOut",
  },
  {
    title: "Move Left",
    key: "moveLeft",
  },
  {
    title: "Rotate 90",
    key: "rotate",
  },
  {
    title: "Scale Right",
    key: "scaleRight",
  },
  {
    title: "Scale Left",
    key: "scaleLeft",
  },
  {
    title: "Scale Up",
    key: "scaleUp",
  },
  {
    title: "Scale Down",
    key: "scaleDown",
  },
  {
    title: "Clear",
    key: "clear",
  },
  {
    title: "Reset",
    key: "reset",
  },
];
