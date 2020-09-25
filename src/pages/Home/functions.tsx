export const postData = async (url: string = "", data = {}) => {
  try {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects}
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
    title: "move Up",
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
    title: "Move Left",
    key: "moveLeft",
  },
  {
    title: "Rotate 90",
    key: "rotate",
  },
  {
    title: "Scale",
    key: "scale",
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
