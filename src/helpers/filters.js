import Vue from "vue"
import { distanceInWords } from 'date-fns'
import subDays from 'date-fns/sub_days'
import { difficulty } from '@/helpers/constants'
import strftime from 'strftime';

Vue.filter("limit", (value, max) => {
  if (value.length > max) return value.slice(0, max) + '...'
  else return value
})

Vue.filter("duration", value => {
  let quotient = Math.floor(value/60)
  let remainder = value % 60
  let str = quotient > 0 ? quotient + 'h' : ''

  if (remainder > 0)
    str = str + remainder + 'm'

  return str;
})

Vue.filter("timeAgo", value => distanceInWords(subDays(new Date(value), 3), new Date()) + ' ago')

Vue.filter("difficulty", value => difficulty[value])

Vue.filter("capitalize", value => (!!value) ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : '')

Vue.filter("largeNumber", value =>{
  if (typeof value === "undefined") {
      return;
  }

  value = value+'';

  if (value < 1000) {
    return value;
  }

  if (value < 1000000) {
      return (value/1000).toFixed(1) + 'k';
  }

  return (value/1000000).toFixed(1) + 'm';
})

Vue.filter("posted", value => strftime('%F at %T', new Date(value)))
