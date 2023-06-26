import dayjs from "dayjs";

export const formatToCurrency = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

export const currentYear = dayjs().year();

export const currentMonth = dayjs().month() + 1;

export const yearOptions = Array.from(
  { length: 50 },
  (_, index) => currentYear - index
);
