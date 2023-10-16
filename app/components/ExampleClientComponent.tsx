"use client";
/**
 * 客户端例子
 */
import { useIntl } from "react-intl";

export default function ExampleClientComponent() {
  const { formatMessage } = useIntl();

  return <div>{formatMessage({ id: "test" })}</div>;
}
