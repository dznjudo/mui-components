import React from "react";
import { render, within } from "@testing-library/react";
import TestComponent from "../TestComponent";
import { TestComponentProps } from "../TestComponent.types";

describe("TestComponent", () => {
  const renderComponent = ({ content }: Partial<TestComponentProps>) =>
    render(
      <TestComponent
        content={content || <div>Default content</div>}
      />
    );

  it("should render content correctly", () => {
    const { getByTestId } = renderComponent({
      content: <div data-testid="some-test-content">I am test content</div>
    });

    expect(
      within(getByTestId("test-component__content")).queryByTestId(
        "some-test-content"
      )
    ).toBeInTheDocument();
  });
});
