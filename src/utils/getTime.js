import { convertTimestampToDate } from './getDateAndTime';

export const getTime = (timestamp, timezone) => {
  let date = convertTimestampToDate(timestamp, timezone);

  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};
