import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../helpers/db-util";

export default async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;
  try {
    client = await connectDatabase();
  } catch (errors) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { text, email, name } = req.body;
    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      client.close();
      return;
    }
    const newComment = {
      text,
      name,
      email,
      eventId,
    };
    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;

      res.status(200).json({ message: "Inserting comment successfully" });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
    }
    console.log(result);
  }
  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res
        .status(200)
        .json({ message: "Get data successfully", comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed!" });
    }
  }

  client.close();
}
