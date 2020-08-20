import { BuildDateForAnalytics } from '../../scripts/utils/BuildDateForAnalytics.js'

export const newsCounter = () => {
  const searchWord = JSON.parse(localStorage.getItem('keyWord'));
  const articles = JSON.parse(localStorage.getItem('allRes'));
  const dates = new BuildDateForAnalytics().buildDateForAnalytics().datesArray;
  let dateOfTitleMentioned = [];
  
  articles.articles.forEach(article => {
    if (article.title.includes(searchWord)) {
      dateOfTitleMentioned.push(article.publishedAt.slice(8, 10));
    }
  })

  let counts = {};
  dateOfTitleMentioned.forEach(x => {
    counts[x] = (counts[x] || 0)+1;
  })
  return counts;
}