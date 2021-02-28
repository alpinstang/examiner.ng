export const truncateString = (str: string, num: number): string => {
  if (str.length <= num) {
    return str;
  }
  //trim the string to the maximum length
  var trimmedString = str.substr(0, num);
  //re-trim if we are in the middle of a word and
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );

  return trimmedString + "...";
};
