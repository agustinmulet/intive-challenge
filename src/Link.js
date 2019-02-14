import React from "react";
import { Button } from "reactstrap";

const Link = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default Link;
