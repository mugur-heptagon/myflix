import { render, fireEvent } from "@testing-library/react";
import LanguageSwitch from "../components/LanguageSwitch";
import { withStore } from "testing/testHelper";
import { store } from "redux/store";

let container;

beforeEach(() => {
  container = render(withStore(LanguageSwitch));
});

describe("LanguageSwitch", () => {
  test("should display english button", () => {
    expect(container.getByLabelText("english")).toBeInTheDocument();
  });

  test("should display german button", () => {
    expect(container.getByLabelText("deutsch")).toBeInTheDocument();
  });

  test("should change language to english", () => {
    const englishButton = container.getByLabelText("english");
    fireEvent.click(englishButton);
    const language = store.getState().app.language;
    expect(language).toBe("english");
  });

  test("should change language to german", () => {
    const englishButton = container.getByLabelText("deutsch");
    fireEvent.click(englishButton);
    const language = store.getState().app.language;
    expect(language).toBe("german");
  });
});
