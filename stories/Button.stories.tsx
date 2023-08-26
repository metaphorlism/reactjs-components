import React from "react";
import { Button } from "../lib";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button label="Click me" />;

export const Disabled = () => <Button label="Disabled Button" disable />;
