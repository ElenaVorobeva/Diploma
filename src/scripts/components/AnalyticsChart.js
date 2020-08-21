export class AnalyticsChart {
  constructor(month, dateOne, dateTwo, dateThree, dateFour, dateFive, dateSix, dateSeven, spanOne, spanTwo, spanThree, spanFour, spanFive, spanSix, spanSeven, textOne, textTwo, textThree, textFour, textFive, textSix, textSeven) {
    this._month = month;

    this._dateOne = dateOne;
    this._dateTwo = dateTwo;
    this._dateThree = dateThree;
    this._dateFour = dateFour;
    this._dateFive = dateFive;
    this._dateSix = dateSix;
    this._dateSeven = dateSeven;

    this._spanOne = spanOne;
    this._spanTwo = spanTwo;
    this._spanThree = spanThree;
    this._spanFour = spanFour;
    this._spanFive = spanFive;
    this._spanSix = spanSix;
    this._spanSeven = spanSeven;

    this._textOne = textOne;
    this._textTwo = textTwo;
    this._textThree = textThree;
    this._textFour = textFour;
    this._textFive = textFive;
    this._textSix = textSix;
    this._textSeven = textSeven;
  }

  //создает пустой график
  createChart() {
    const chart = `
    <h4 class="analytics__title">Аналитика по дням</h4>
    <div class="analytics__header">
      <p class="analytics__subtitle analytics__subtitle_date">Дата
        (месяц)</p>
      <p class="analytics__subtitle">Кол-во упоминаний, %</p>
    </div>

    <div class="analytics__bar-invisible">
      <p class="analytics__bar-invisible-item" style="width: 25%;">0</p>
      <p class="analytics__bar-invisible-item" style="width: 25%;">25</p>
      <p class="analytics__bar-invisible-item" style="width: 25%;">50</p>
      <p class="analytics__bar-invisible-item" style="width: 25%;">75</p>
      <p class="analytics__bar-invisible-item" style="width: 0%;">100</p>
    </div>

    <div class="analytics__bar-chart">
      <div class="analytics__bar-item analytics__bar-item-1" style="width: 0%;"><span class="analytics__span analytics__span-1"></span><p class="analytics__result-text analytics__result-text-1"></p></div>
      <div class="analytics__bar-item analytics__bar-item-2" style="width: 0%;"><span class="analytics__span analytics__span-2"></span><p class="analytics__result-text analytics__result-text-2"></p></div>
      <div class="analytics__bar-item analytics__bar-item-3" style="width: 0%;"><span class="analytics__span analytics__span-3"></span><p class="analytics__result-text analytics__result-text-3"></p></div>
      <div class="analytics__bar-item analytics__bar-item-4" style="width: 0%;"><span class="analytics__span analytics__span-4"></span><p class="analytics__result-text analytics__result-text-4"></p></div>
      <div class="analytics__bar-item analytics__bar-item-5" style="width: 0%;"><span class="analytics__span analytics__span-5"></span><p class="analytics__result-text analytics__result-text-5"></p></div>
      <div class="analytics__bar-item analytics__bar-item-6" style="width: 0%;"><span class="analytics__span analytics__span-6"></span><p class="analytics__result-text analytics__result-text-6"></p></div>
      <div class="analytics__bar-item analytics__bar-item-7" style="width: 0%;"><span class="analytics__span analytics__span-7"></span><p class="analytics__result-text analytics__result-text-7"></p></div>
    </div>

    <div class="analytics__bar-invisible">
      <p class="analytics__bar-invisible-item" style="width: 25%;">0</p>
      <p class="analytics__bar-invisible-item" style="width: 25%;">25</p>
      <p class="analytics__bar-invisible-item" style="width: 25%;">50</p>
      <p class="analytics__bar-invisible-item" style="width: 25%;">75</p>
      <p class="analytics__bar-invisible-item" style="width: 0%;">100</p>
    </div>
    `

    const chartElement = document.createElement('div');
    chartElement.classList.add('analytics__wrapper');
    chartElement.insertAdjacentHTML('afterbegin', chart);

    chartElement.querySelector('.analytics__subtitle_date').textContent = `Дата (${this._month})`;
    chartElement.querySelector('.analytics__bar-item-1').style.width = `${this._dateOne}%`;
    chartElement.querySelector('.analytics__bar-item-2').style.width = `${this._dateTwo}%`;
    chartElement.querySelector('.analytics__bar-item-3').style.width = `${this._dateThree}%`;
    chartElement.querySelector('.analytics__bar-item-4').style.width = `${this._dateFour}%`;
    chartElement.querySelector('.analytics__bar-item-5').style.width = `${this._dateFive}%`;
    chartElement.querySelector('.analytics__bar-item-6').style.width = `${this._dateSix}%`;
    chartElement.querySelector('.analytics__bar-item-7').style.width = `${this._dateSeven}%`;

    chartElement.querySelector('.analytics__span-1').textContent = this._spanOne;
    chartElement.querySelector('.analytics__span-2').textContent = this._spanTwo;
    chartElement.querySelector('.analytics__span-3').textContent = this._spanThree;
    chartElement.querySelector('.analytics__span-4').textContent = this._spanFour;
    chartElement.querySelector('.analytics__span-5').textContent = this._spanFive;
    chartElement.querySelector('.analytics__span-6').textContent = this._spanSix;
    chartElement.querySelector('.analytics__span-7').textContent = this._spanSeven;

    chartElement.querySelector('.analytics__result-text-1').textContent = this._textOne;
    chartElement.querySelector('.analytics__result-text-2').textContent = this._textTwo;
    chartElement.querySelector('.analytics__result-text-3').textContent = this._textThree;
    chartElement.querySelector('.analytics__result-text-4').textContent = this._textFour;
    chartElement.querySelector('.analytics__result-text-5').textContent = this._textFive;
    chartElement.querySelector('.analytics__result-text-6').textContent = this._textSix;
    chartElement.querySelector('.analytics__result-text-7').textContent = this._textSeven;

    this._chartElement = chartElement;
    return chartElement;
  }
}