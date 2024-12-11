import React, { ReactNode } from "react";

//rafc

interface Prop {
  children: ReactNode;
}
const Alert = ({ children }: Prop) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
