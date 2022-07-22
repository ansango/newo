const formatDate = (
  date: string | number | Date,
  locale: Intl.LocalesArgument
) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const now =
    date === "today"
      ? new Date().toLocaleString(locale, options)
      : new Date(date).toLocaleDateString(locale, options);

  return now;
};

export default formatDate;
