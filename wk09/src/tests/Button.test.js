import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

describe("Button", () => {
  it('should say "i am a button"', () => {
    render(<Button />);
    const buttonElem = screen.getByRole("button");
    expect(buttonElem).toHaveTextContent("i am a button");
  });

  it("should call onClick once", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const buttonElem = screen.getByRole("button");
    userEvent.click(buttonElem);
    expect(onClick).toBeCalledTimes(1);
  });

  it("should call onClick with argument 2", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const buttonElem = screen.getByRole("button");
    userEvent.click(buttonElem);
    expect(onClick).toBeCalledWith(2);
  });
});
