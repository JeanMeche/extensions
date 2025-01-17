import { MtxDatetimeFormats } from '@ng-matero/extensions/core';

export const MTX_MOMENT_DATETIME_FORMATS: MtxDatetimeFormats = {
  parse: {
    dateInput: 'L',
    monthInput: 'MMMM',
    timeInput: 'LT',
    datetimeInput: 'L LT',
  },
  display: {
    dateInput: 'L',
    monthInput: 'MMMM',
    datetimeInput: 'L LT',
    timeInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
    popupHeaderDateLabel: 'ddd, DD MMM',
  },
};
