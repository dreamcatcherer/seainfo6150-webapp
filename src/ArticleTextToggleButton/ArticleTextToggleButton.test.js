import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleTextToggleButton tests", () => {

  it("renders correctly with text showing", () => {
    const { container } = render(<ArticleTextToggleButton
        buttonText={"Show less"}
        onClick={()=>{}}
      />);
    expect(container).toMatchSnapshot();
  });
  
});