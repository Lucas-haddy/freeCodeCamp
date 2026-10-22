function truncateString(str, num) {
  if (str.length > num) {
    const truncd = str.slice(0, num) + "...";
    return truncd;
  } else {
    return str;
  }
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));