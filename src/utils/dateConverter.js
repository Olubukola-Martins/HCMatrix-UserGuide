export const dateConverter = (time) => {
  const updateTime = new Date(time);
  const currentTime = new Date();
  const timeDiff = currentTime - updateTime;
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  return hoursDiff;
};
