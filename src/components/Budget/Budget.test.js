import { screen, render } from "@testing-library/react";
import Budget from "./index";

test("renders Budget component", () => {
  const data = { name: "", income: 0, date: "" };

  render(<Budget data={data} />);
});
