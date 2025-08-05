import { getCommentsPath, getPathData } from "../../../helpers/api-routes";

export default function handler(req, res) {
  const path = getCommentsPath();
  const commentsData = getPathData(path);
  res
    .status(200)
    .json({ message: "Fetch get request succesfully" }, commentsData);
}
