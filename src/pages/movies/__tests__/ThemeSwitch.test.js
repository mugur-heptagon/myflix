import { render, fireEvent } from "@testing-library/react";
import ThemeSwitch from "../components/ThemeSwitch";
import { withStore } from "testing/testHelper";
import { store } from "redux/store";

let container;

beforeEach(() => {
  container = render(withStore(ThemeSwitch));
});

describe("ThemeSwitch", () => {
  test("renders theme switch", () => {
    render(withStore(ThemeSwitch));
  });

  test("should display dark theme button", () => {
    expect(container.getByText("Dark")).toBeInTheDocument();
  });

  test("should display light theme button", () => {
    expect(container.getByText("Light")).toBeInTheDocument();
  });

  test("should change theme to dark", () => {
    const darkButton = container.getByText("Dark");
    fireEvent.click(darkButton);
    const theme = store.getState().app.theme;
    expect(theme).toBe("dark");
  });

  test("should change theme to light", () => {
    const darkButton = container.getByText("Light");
    fireEvent.click(darkButton);
    const theme = store.getState().app.theme;
    expect(theme).toBe("light");
  });
});
