const formatDate = (date, locale) => {
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
