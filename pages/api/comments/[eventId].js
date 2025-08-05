export default function handler(req, res) {
  const eventId = req.query.eventId;
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
      id: new Date().toISOString(),
    };
  }
  if (req.method === "GET") {
    //return data
  }
}
