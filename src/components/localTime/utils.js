export const getDateAndTimeFromTimestamp = (timestamp, timezone) => {
  const newTimezoneInMS = timezone * 1000; //converting timezone to miliseconds

  const dateWithTimezone = timestamp + newTimezoneInMS;

  const date = new Date(dateWithTimezone * 1000);

  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

  const hours = date.getHours();
  const minutes = ('0' + date.getMinutes()).slice(-2);

  // Formate a hora como uma string
  const formattedTime = `${hours}:${minutes}`;

  // Retorne a data e hora formatadas
  return { date: formattedDate, time: formattedTime };
};
