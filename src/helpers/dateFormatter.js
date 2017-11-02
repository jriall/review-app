function dateFormatter(input, type) {
  if (!input) return "";
  const d = new Date(input);
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return type === "added" ? `Reviewed on: ${date}/${month}/${year}` : type === "edited" ? `Edited on: ${date}/${month}/${year}` : "";
}

export default dateFormatter;
