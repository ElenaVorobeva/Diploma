import { NEWS_DATE } from '../constants/NEWS_DATE.js'

export const dateToStartWith = new Date(Date.now() - NEWS_DATE * 24 * 60 * 60 * 1000);