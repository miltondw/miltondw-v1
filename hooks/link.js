export const link = (cadena) => {
  let arr = cadena.toLocaleLowerCase().split("");
  for (let i in arr) {
    if (arr[i] === "¿" || arr[i] === "?") {
      arr.splice(i, 1);
    }
    if (arr[i] === "á") {
      arr.splice(i, 1, "a");
    }
    if (arr[i] === "é") {
      arr.splice(i, 1, "e");
    }
    if (arr[i] === "í") {
      arr.splice(i, 1, "i");
    }
    if (arr[i] === "ó") {
      arr.splice(i, 1, "o");
    }
    if (arr[i] === "ú") {
      arr.splice(i, 1, "u");
    }
  }
  let link = arr.join("").split(" ").join("-");
  return link;
};
