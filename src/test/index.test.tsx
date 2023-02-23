import { render } from "@testing-library/react";
import { Navbar, Content } from "../components";
import { App } from "../app";

describe("Тестирование", () => {
  test("Все компоненты", () => {
    const view = render(<App />);
    expect(view).toMatchSnapshot();
  });

  test("Navbar", () => {
    const { container } = render(<Navbar />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("navbar");
    expect(cls.length).toBe(1);
  });
  test("Content", () => {
    const { container } = render(<Content />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("content");
    expect(cls.length).toBe(1);
  });
});
