import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Root(props: Props) {
  const { children } = props;

  return <>{children}</>;
}
