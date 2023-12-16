export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const formattedDate = date.toISOString().replace('T', ' ').slice(0, -5);
  return formattedDate;
}