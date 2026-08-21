export const formatDate = (rawDate: string) => {
  // target Date
  const targetDate = new Date(rawDate);
  targetDate.setHours(0, 0, 0, 0);

  // Today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  //yesterday
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (targetDate.getTime() === today.getTime()) {
    return 'Today';
  }

  if (targetDate.getTime() === yesterday.getTime()) {
    return 'Yesterday';
  }

  return Intl.DateTimeFormat('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(rawDate));
};
