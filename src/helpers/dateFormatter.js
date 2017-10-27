function dateFormatter(input) {
  const d = new Date(input);
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return `Reviewed on: ${date}/${month}/${year}`;
}

export default dateFormatter;
