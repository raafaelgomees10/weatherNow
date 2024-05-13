export const convertTimestampToDate = (timestamp, timezoneOffset) => {
  const timestampInMS = timestamp * 1000;

  const timezoneOffsetInMS = timezoneOffset * 1000;

  // Calcule o offset do fuso horário local em relação ao UTC
  const localTimezoneOffsetInMS = new Date().getTimezoneOffset() * 60 * 1000;

  // Ajuste o timestamp para considerar o fuso horário
  const newTimestamp =
    timestampInMS + timezoneOffsetInMS + localTimezoneOffsetInMS;

  // Crie uma nova data com base no timestamp ajustado
  return new Date(newTimestamp);
};

export const getDateAndTimeFromTimestamp = (timestamp, timezone) => {
  let date = convertTimestampToDate(timestamp, timezone);

  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

  const hours = date.getHours();
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const formattedTime = `${hours}:${minutes}`;

  return { date: formattedDate, time: formattedTime };
};
