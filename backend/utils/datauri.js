import DatauriParser from "datauri/parser.js";

import path from "path";

const getDataUri = (file) => {
  // if (!file) {
  //   return null;
  // }
  // const extName = path.extname(file.originalname).toString();
  // const mimeType = `image/${extName.slice(1)}`;
  // return datauri({ data: file.buffer, mimetype: mimeType });
  const parser = new DatauriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export default getDataUri;
