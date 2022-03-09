import React from "react";
import Button from '@mui/material/Button'

import { TestComponentProps } from "./TestComponent.types";

const TestComponent: React.FC<TestComponentProps> = ({ content }) => (
  <Button data-testid="test-component">
    <span data-testid="test-component__content">{content}</span>
  </Button>
);

export default TestComponent;
