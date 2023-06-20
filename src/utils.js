export const setUserType = (type) => {
  switch (type) {
  case "admin":
    return "Администратор";
  case "editor":
    return "Редактор";
  case "author":
    return "Автор";
  default:
    return "Автор";
  }
};

export const timerFormatting = (timer) => {
  const sec = timer.toString().length === 1 ? `0${timer}` : timer;
  return `00:${sec}`;
};

export const getAvailableBooks = (books) => {
  const maxBooks = 3;
  const available_book = books.reduce((acc, item, index)=>{
    if (index < maxBooks) acc.push(item.name);
    return acc;
  },[]);
  const rest = books.length > maxBooks ? `и еще ${books.length - maxBooks}` : "";
  return books.length ? `${available_book.join(" / ")} ${rest}` :
    "Нет доступных книг";
};