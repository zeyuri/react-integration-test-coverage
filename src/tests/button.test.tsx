import { render } from "@testing-library/react";
import { Button } from "../Button";

it("should render without crashing", () => {
  render(<Button label="Click Me!" primary={false} />);
});
