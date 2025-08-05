import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const eventId = req.query.eventId;
  const client = await MongoClient.connect(
    "mongodb+srv://news-nextjs-old:123454321@cluster0.sd5uhop.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  if (req.method === "POST") {
    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      res.status(200).json({ message: "Invalid comment data" });
      return;
    }
    const { text, email, name } = req.body;
    const newComment = {
      text,
      name,
      email,
      eventId,
    };

    const result = await db.collection("comments").insertOne(newComment);
    console.log(result);

    newComment.id = result.insertedId;
  }
  if (req.method === "GET") {
    //return data
  }

  client.close();
}
