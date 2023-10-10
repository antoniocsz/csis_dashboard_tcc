import dayjs from "dayjs";

export function getDescribeTime(date: Date) {
  return dayjs(date).format('HH:mm[h]')
}