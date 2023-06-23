import { formatToCurrency } from "@/utils/utils";

describe("formatToCurrency", () => {
  it("should format the value to a currency string", () => {
    expect(formatToCurrency(1000)).toBe("$1,000.00");
    expect(formatToCurrency(0)).toBe("$0.00");
    expect(formatToCurrency(1234.56)).toBe("$1,234.56");
  });
});
