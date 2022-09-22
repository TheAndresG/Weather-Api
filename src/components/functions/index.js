export const GetStogare = function (value = "") {
  //useEffect
  return localStorage.getItem(value);
};
