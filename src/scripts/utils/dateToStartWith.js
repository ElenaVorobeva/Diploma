import { NEWS_DATE } from '../constants/NEWS_DATE.js'

//считает начальную дату для запроса
export const dateToStartWith = new Date(Date.now() - NEWS_DATE * 24 * 60 * 60 * 1000);