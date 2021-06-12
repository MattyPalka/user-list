/**
 * Function that checks if passed url contains http / https and adds it if not
 * @param url string with website name or url
 * @returns
 */
export const getUrl = (url: string) => {
  // check if passed string resembles url
  if (!/\w+\.\w+/.test(url)) {
    //point nowhere i.e. stay on the same page
    return "#";
  }
  // check if begins with http / https
  if (/^http:\/\/|https:\/\/.+/.test(url)) {
    return url;
  } else {
    return `http://${url}`;
  }
};
