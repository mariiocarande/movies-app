import {
  currentMonth,
  currentYear,
  formatToCurrency,
  yearOptions,
} from "@/utils/utils";

describe("formatToCurrency", () => {
  it("should format the value to a currency string", () => {
    expect(formatToCurrency(1000)).toBe("$1,000.00");
    expect(formatToCurrency(0)).toBe("$0.00");
    expect(formatToCurrency(1234.56)).toBe("$1,234.56");
  });
});

describe("currentYear", () => {
  it("should return a number", () => {
    expect(typeof currentYear).toBe("number");
  });
});

describe("currentMonth", () => {
  it("should return a number", () => {
    expect(typeof currentMonth).toBe("number");
  });

  it("should be a value between 1 and 12", () => {
    expect(currentMonth).toBeGreaterThanOrEqual(1);
    expect(currentMonth).toBeLessThanOrEqual(12);
  });
});

describe("yearOptions", () => {
  it("should return an array", () => {
    expect(Array.isArray(yearOptions)).toBe(true);
  });

  it("should have a length of 50", () => {
    expect(yearOptions.length).toBe(50);
  });

  it("should be in descending order", () => {
    for (let i = 0; i < yearOptions.length - 1; i++) {
      expect(yearOptions[i]).toBeGreaterThan(yearOptions[i + 1]);
    }
  });
});
