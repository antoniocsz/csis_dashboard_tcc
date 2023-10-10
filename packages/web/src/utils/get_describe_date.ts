import dayjs from "dayjs";

export function getDescribeDate(date: Date) {
  return dayjs(date).format('DD/MM/YYYY')
}