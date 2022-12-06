// MON 05 DEC 2022 08.15

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const days = date.toLocaleDateString('en', {
    weekday: 'short',
  });
  const day = date.getDay().toString().padStart(2, '0');
  const month = date.toLocaleDateString('en', {
    month: 'short',
  });
  const hrs = date.getHours().toString().padStart(2, '0');

  const min = date.getMinutes().toString().padStart(2, '0');

  return `${days} ${day} ${month} ${date.getFullYear()} ${hrs}.${min}`;
};

export default formatDate;
