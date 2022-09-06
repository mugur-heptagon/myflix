import { render } from "@testing-library/react";
import Header from "../components/Header";
import { withStore } from "testing/testHelper";

let container;

beforeEach(() => {
  container = render(withStore(Header));
});

describe("Header", () => {
  test("should display logo", () => {
    expect(container.getByAltText("logo")).toBeInTheDocument();
  });

  test("should display theme switch", () => {
    expect(container.getByTestId("themeSwitch")).toBeInTheDocument();
  });

  test("should display language switch", () => {
    expect(container.getByTestId("languageSwitch")).toBeInTheDocument();
  });

  test("should display searchbox", () => {
    expect(container.getByTestId("searchbox")).toBeInTheDocument();
  });
});
