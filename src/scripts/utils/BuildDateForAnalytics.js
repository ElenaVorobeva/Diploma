import { dateToStartWith } from './dateToStartWith.js'

export class BuildDateForAnalytics {
  buildDateForAnalytics = () => {
    const aWeekAgo = new Date(dateToStartWith);
    let nextDay = new Date();
    let datesArray = [];
    let dayArray = [];

    for (let i = 0; i < 7; i++) {
      nextDay = new Date(aWeekAgo.getTime() + (i * 24 * 60 * 60 * 1000));
      datesArray.push(nextDay.getDate());
      dayArray.push(nextDay.getDay());
    }

    return { datesArray, dayArray };
  }
}