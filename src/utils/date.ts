export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}.${month}.${day}`;
};

export const formatTime = (time: Date) => {
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

export const formatDateTime = (date: string) => {
  const currentTime = new Date().getTime();
  const targetTime = new Date(date).getTime();
  const diffTime = (currentTime - targetTime) / 1000;
  if (diffTime < 60) {
    return "방금 전";
  }
  if (diffTime < 3600) {
    return `${Math.floor(diffTime / 60)}분 전`;
  }
  if (diffTime < 86400) {
    return `${Math.floor(diffTime / 3600)}시간 전`;
  }
  if (diffTime < 604800) {
    return `${Math.floor(diffTime / 86400)}일 전`;
  }
  return formatDate(new Date(date));
};
