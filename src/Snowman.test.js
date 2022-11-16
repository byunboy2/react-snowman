import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Snowman } from "./Snowman.js";

//smoke test


//test when player loses game
it("should display the last image when player goes over max wrong limit",
  function () {
    const { container } = render(
      <Snowman maxGuesses={maxWrong} />
    );
    const buttonB = container.querySelector("button[key='b']");
    fireEvent.click(buttonB);

    const buttonC = container.querySelector("button[key='c']");
    fireEvent.click(buttonC);

    const buttonD = container.querySelector("button[key='d']");
    fireEvent.click(buttonD);

    const buttonG = container.querySelector("button[key='g']");
    fireEvent.click(buttonG);

    const buttonF = container.querySelector("button[key='f']");
    fireEvent.click(buttonF);

    const buttonH = container.querySelector("button[key='h']");
    fireEvent.click(buttonH);

    const buttonJ = container.querySelector("button[key='j']");
    fireEvent.click(buttonJ);

    expect(container.querySelector('.Snowman>img').getAttribute('alt')).toEqual(6)

  });