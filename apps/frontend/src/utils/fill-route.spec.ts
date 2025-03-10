import { fillRoute } from "./fill-route";
import { describe, test, expect } from "vitest";

describe("Fill route util", () => {
  test("Should fill a single param", () => {
    const filledUrl = fillRoute(":userId", {
      userId: "123",
    });

    expect(filledUrl).toBe("123");
  });

  test("Should fill a two params", () => {
    const filledUrl = fillRoute(":userId/:paramId", {
      userId: "123",
      paramId: "456",
    });

    expect(filledUrl).toBe("123/456");
  });

  test("Should not fill a single static route", () => {
    const filledUrl = fillRoute("test", {});

    expect(filledUrl).toBe("test");
  });

  test("Should not fill a two static routes", () => {
    const filledUrl = fillRoute("test/other", {});

    expect(filledUrl).toBe("test/other");
  });

  test("Handle dynamic and static paths alike", () => {
    const filledUrl = fillRoute("test/:one/other/:two", {
      one: "1",
      two: "2",
    });

    expect(filledUrl).toBe("test/1/other/2");
  });

  test("Preserves prefix slash", () => {
    const filledUrl = fillRoute("/test/other", {});

    expect(filledUrl).toBe("/test/other");
  });

  test("Preserves postfix slash", () => {
    const filledUrl = fillRoute("test/other/", {});

    expect(filledUrl).toBe("test/other/");
  });
});
