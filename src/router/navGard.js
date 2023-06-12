export const userWishPageGard = (userId) => {
  const userData = JSON.parse(localStorage.getItem("userDataList")) || [];
  const isUserExist = userData.find((user) => user.id === userId);
  if (!isUserExist) {
    return false;
  }
  const date = new Date();
  let currentDate = `${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;

  return isUserExist.dob.slice(5) === currentDate ? true : false;
};
