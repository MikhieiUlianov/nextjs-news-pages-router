import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res
        .status(422)
        .json({ message: "Invalid email address", email: userEmail });
      return;
    }
    const client = await MongoClient.connect(
      "mongodb+srv://news-nextjs-old:123454321@cluster0.sd5uhop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Fetch email succesfully" });
  }
}
