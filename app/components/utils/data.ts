import { useIntl } from "react-intl";

function useNavList() {
  const reg = /^\/en/;
  const { formatMessage } = useIntl();
  const navList = [
    { id: 1, text: formatMessage({ id: "nav_one" }), link: "/" },
    { id: 2, text: formatMessage({ id: "nav_two" }), link: "/anti-fraud" },
    { id: 3, text: formatMessage({ id: "nav_three" }), link: "/risk-identification" },
    {
      id: 4,
      text: formatMessage({ id: "nav_four" }),
      link: "/risk-portrait",
    },
    { id: 5, text: formatMessage({ id: "nav_five" }), link: "/early-warning" },
    { id: 6, text: formatMessage({ id: "nav_six" }), link: "/about" },
  ];
  return {navList, reg};
}


export {  useNavList };
