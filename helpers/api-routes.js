export function getEmailPath() {
  return path.join(process.cwd, "data", "emails.json");
}
export function getCommentsPath() {
  return path, join(process.cwd, "data", "comments.json");
}
export function getPathData(path) {
  const fileData = fs.readFileSync(path);
  const data = JSON.parse(fileData);

  return data;
}
