import fs from "fs";

import { getEmailPath, getPathData } from "../../helpers/api-routes";

export default function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res
        .status(422)
        .json({ message: "Invalid email address", email: userEmail });
      return;
    }
    res.status(201).json({ message: "Fetch email succesfully" });
  }
}
/* export default function handler(req, res) {
  if (req.method === "POST") {
    const filePath = getEmailPath();
    const fileData = getPathData(filePath);
    fileData.push(req.body);
    fs.writeFileSync(filePath, JSON.stringify(newData));
    res.status(200).join({ message: "Fetch path data succesfully", fileData });
  }
}
 */
