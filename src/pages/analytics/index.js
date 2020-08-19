import "./analytics.css";

import { LocalStorage } from '../../scripts/modules/LocalStorage.js'
import { AnalyticsChart } from '../../scripts/components/AnalyticsChart.js'
import { BuildChart } from '../../scripts/components/BuildChart.js'
import { titleCounter } from '../../scripts/utils/titleCounter.js'
import { BuildDateForAnalytics } from '../../scripts/utils/BuildDateForAnalytics.js'
import { MONTHS } from '../../scripts/constants/MONTHS.js'
import { WEEK_DAY } from '../../scripts/constants/WEEK_DAYS.js'
import { newsCounter } from '../../scripts/utils/newsCounter.js'

(function () {
/*------------------------------------------------------------------------------
Переменные
------------------------------------------------------------------------------*/
const container = document.querySelector('.analytics__wrapper');
const inputWord = document.querySelector('.section__title');
const totalResultsOfNews = document.querySelector('.section__span_total-results');
const totalResultsInHeaders = document.querySelector('.section__span_is-mentioned');

const storedData = new LocalStorage();
const data = new Date().getMonth();
const buildDateForAnalytics = new BuildDateForAnalytics();

const totalResults = storedData.getAllRes().totalResults;
const headersResults = titleCounter(storedData.getAllRes());


/*------------------------------------------------------------------------------
Слушатели событий
------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------
Функции
------------------------------------------------------------------------------*/
inputWord.textContent = `Вы спросили: «${storedData.getKeyWord()}»`
totalResultsOfNews.textContent = `${totalResults}`;
totalResultsInHeaders.textContent = titleCounter(storedData.getAllRes());


function buildChart(container, chart) {
  return new BuildChart(container, chart);
}

function createAChart (month, dateOne, dateTwo, dateThree, dateFour, dateFive, dateSix, dateSeven, spanOne, spanTwo, spanThree, spanFour, spanFive, spanSix, spanSeven, textOne, textTwo, textThree, textFour, textFive, textSix, textSeven) {
  return new AnalyticsChart(month, dateOne, dateTwo, dateThree, dateFour, dateFive, dateSix, dateSeven, spanOne, spanTwo, spanThree, spanFour, spanFive, spanSix, spanSeven, textOne, textTwo, textThree, textFour, textFive, textSix, textSeven).createChart();
}

const getNumber = () => {
  let number = {};
  let newNumber = {};
  let finalNumber = {};
  let news = {};

  number = {...buildDateForAnalytics.buildDateForAnalytics().datesArray}
  news = {...newsCounter()}

  for (let key in number) {
    newNumber[number[key]] = key;
  }

  for (let key in newNumber) {
    finalNumber[key] = key
  }

  for (let value in newNumber) {
    finalNumber[value] = 0;
  }

  for (let i in finalNumber) {
    if (Object.keys(news).includes(i)) {
      finalNumber[i] = news[i];
    }
  }


  return finalNumber;
}

const getPercentage = () => {
  let results = [];
  results = Object.values(getNumber());

  for (let i = 0; i < results.length; i++) {
    results[i] = parseInt((results[i] / headersResults) * 100);
  }

  return results;
}

buildChart(container, createAChart(
  MONTHS[data],
  getPercentage()[0],
  getPercentage()[1],
  getPercentage()[2],
  getPercentage()[3],
  getPercentage()[4],
  getPercentage()[5],
  getPercentage()[6],
  `${buildDateForAnalytics.buildDateForAnalytics().datesArray[0]}, ${WEEK_DAY[buildDateForAnalytics.buildDateForAnalytics().dayArray[0]]}`,
  `${buildDateForAnalytics.buildDateForAnalytics().datesArray[1]}, ${WEEK_DAY[buildDateForAnalytics.buildDateForAnalytics().dayArray[1]]}`,
  `${buildDateForAnalytics.buildDateForAnalytics().datesArray[2]}, ${WEEK_DAY[buildDateForAnalytics.buildDateForAnalytics().dayArray[2]]}`,
  `${buildDateForAnalytics.buildDateForAnalytics().datesArray[3]}, ${WEEK_DAY[buildDateForAnalytics.buildDateForAnalytics().dayArray[3]]}`,
  `${buildDateForAnalytics.buildDateForAnalytics().datesArray[4]}, ${WEEK_DAY[buildDateForAnalytics.buildDateForAnalytics().dayArray[4]]}`,
  `${buildDateForAnalytics.buildDateForAnalytics().datesArray[5]}, ${WEEK_DAY[buildDateForAnalytics.buildDateForAnalytics().dayArray[5]]}`,
  `${buildDateForAnalytics.buildDateForAnalytics().datesArray[6]}, ${WEEK_DAY[buildDateForAnalytics.buildDateForAnalytics().dayArray[6]]}`,
  `${Object.values(getNumber())[0]}`,
  `${Object.values(getNumber())[1]}`,
  `${Object.values(getNumber())[2]}`,
  `${Object.values(getNumber())[3]}`,
  `${Object.values(getNumber())[4]}`,
  `${Object.values(getNumber())[5]}`,
  `${Object.values(getNumber())[6]}`,

)).render();
})();