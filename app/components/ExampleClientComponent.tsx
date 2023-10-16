"use client";
/**
 * 客户端例子
 */
import { useIntl } from "react-intl";

export default function ExampleClientComponent() {
  const { formatMessage } = useIntl();

  return <div className=" text-red-900">{formatMessage({ id: "test" })}</div>;
}
