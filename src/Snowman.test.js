import React from "react";
import { render, fireEvent, createRoot } from "@testing-library/react";
import Snowman from "./Snowman";
import { ENGLISH_WORDS } from "./words";

//smoke test
it("renders", function () {
  render(<Snowman />);
});
//snapshot test
it("matches snapshot", function () {
  const { container } = render(<Snowman />);
});

//test when player loses game
it("should stop working after player guesses wrong too much", function () {
  const words = ["apple"];
  const maxWrong = words[0].length + 1;
  // creates a set of words from apple
  const lettersUsed = new Set(..."apple");
  // renders container from the rendering which contains the snowman rendering
  const { container } = render(<Snowman words={words} maxWrong={maxWrong} />);
  let count = 0;
  /** Iterate through the alphabet and pretend to click the button that
   * corresponds to that button letter. Increase the count each time too
   *
   */
  for (const c of "abcdefghijlklmnopqrstuvwxyz") {
    if (!lettersUsed.has(c) && count <= maxWrong) {
      count++;
      fireEvent.click(container.querySelector(`button[value = ${c}]`));
    }
  }
  // Once we it iterate through the alphaebet, we don't expect
  expect(
    container.querySelector("button:not([value='reset'])")
  ).toBeInTheDocument();
  expect(container.querySelector(".lose")).toBeInTheDocument();
});

it("should reset the game", function () {
  const { container } = render(<Snowman />);
});