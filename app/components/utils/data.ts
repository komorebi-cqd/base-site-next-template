import { useIntl } from "react-intl";

function useNavList() {
  const reg = /^\/en?/;
  const { formatMessage } = useIntl();
  const navList = [
    { id: 1, text: formatMessage({ id: "nav_one" }), link: "/" },
    { id: 2, text: formatMessage({ id: "nav_two" }), link: "/anti-fraud" },
    { id: 3, text: formatMessage({ id: "nav_three" }), link: "/early-warning" },
    {
      id: 4,
      text: formatMessage({ id: "nav_four" }),
      link: "/risk-identification",
    },
    { id: 5, text: formatMessage({ id: "nav_five" }), link: "/risk-portrait" },
    { id: 6, text: formatMessage({ id: "nav_six" }), link: "/about" },
  ];
  return {navList, reg};
}

const navList = [
  { id: 1, text: "首页", link: "/" },
  { id: 2, text: "信用卡反欺诈", link: "/anti-fraud" },
  { id: 3, text: "争议预警与解决", link: "/early-warning" },
  { id: 4, text: "设备风险识别", link: "/risk-identification" },
  { id: 5, text: "风险画像", link: "/risk-portrait" },
  { id: 6, text: "关于我们", link: "/about" },
];

export { navList, useNavList };
