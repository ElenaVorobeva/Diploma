export const titleCounter = (array) => {
  let titleNumber = 0;
  const searchWord = JSON.parse(localStorage.getItem('keyWord'));
  array.articles.forEach(elem => {
    if (elem.title.includes(searchWord)) {
      titleNumber += 1;
    }
  })
  return titleNumber;
}