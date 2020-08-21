export const newsCounter = () => {
  const searchWord = JSON.parse(localStorage.getItem('keyWord'));
  const articles = JSON.parse(localStorage.getItem('allRes'));
  let dateOfTitleMentioned = [];
  
  //создает массив с датами, в которые были опубликованы новости
  //это сделано для сравнения с массивом дат,
  //который включает даты за все неделю, а не только тогда, когда были сделаны публикации
  articles.articles.forEach(article => {
    if (article.title.includes(searchWord)) {
      dateOfTitleMentioned.push(article.publishedAt.slice(8, 10));
    }
  })

  //здесь создается новый объект, и в него записывается, сколько раз встретилась дата
  let counts = {};
  dateOfTitleMentioned.forEach(x => {
    counts[x] = (counts[x] || 0)+1;
  })
  return counts;
}