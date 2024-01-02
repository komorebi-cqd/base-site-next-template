import HalfCirclePosition from "@/app/components/HalfCirclePosition";
import Image from "next/image";
import getIntl from "../intl";




async function Home({ params: { locale } }: { params: { locale: string } }) {
    const intl = await getIntl(locale);

    const fraudTypeList = [
        { id: 1, title: intl.formatMessage({ id: "home_slide_one_title" }), desc: intl.formatMessage({ id: "home_slide_one_desc" }), imgUrl: "/image/home/home-jx-1.png" },
        { id: 2, title: intl.formatMessage({ id: "home_slide_two_title" }), desc: intl.formatMessage({ id: "home_slide_two_desc" }), imgUrl: "/image/home/home-jx-2.png" },
        { id: 3, title: intl.formatMessage({ id: "home_slide_three_title" }), desc: intl.formatMessage({ id: "home_slide_three_desc" }), imgUrl: "/image/home/home-jx-3.png" },
        { id: 4, title: intl.formatMessage({ id: "home_slide_four_title" }), desc: intl.formatMessage({ id: "home_slide_four_desc" }), imgUrl: "/image/home/home-jx-4.png" },
    ];

    const advantageItemOne = [
        { id: 1, title: intl.formatMessage({ id: "home_best_desc_one" }) },
        { id: 2, title: intl.formatMessage({ id: "home_best_desc_two" }) },
        { id: 3, title: intl.formatMessage({ id: "home_best_desc_three" }) },
        { id: 4, title: intl.formatMessage({ id: "home_best_desc_four" }) },
        { id: 5, title: intl.formatMessage({ id: "home_best_desc_five" }) },
        { id: 6, title: intl.formatMessage({ id: "home_best_desc_six" }) },
        { id: 7, title: intl.formatMessage({ id: "home_best_desc_seven" }) },
    ];

    const advantageItemTwo = [
        { id: 1, title: intl.formatMessage({ id: "home_js_sf_desc_one" }) },
        { id: 2, title: intl.formatMessage({ id: "home_js_sf_desc_two" }) },
        { id: 3, title: intl.formatMessage({ id: "home_js_sf_desc_three" }) },
        { id: 4, title: intl.formatMessage({ id: "home_js_sf_desc_four" }) },
        { id: 5, title: intl.formatMessage({ id: "home_js_sf_desc_five" }) },
    ];

    const serveContent = {
        antiRisk: {
            title: intl.formatMessage({ id: "home_serve_card_risk_t" }),
            list: [
                { id: 1, title: intl.formatMessage({ id: "home_serve_card_risk_desc_one" }) },
                { id: 2, title: intl.formatMessage({ id: "home_serve_card_risk_desc_two" }) },
                { id: 3, title: intl.formatMessage({ id: "home_serve_card_risk_desc_three" }) },
            ]
        },
        deviceRisk: {
            title: intl.formatMessage({ id: "home_serve_device_t" }),
            list: [
                { id: 1, title: intl.formatMessage({ id: "home_serve_device_one" }) },
                { id: 2, title: intl.formatMessage({ id: "home_serve_device_two" }) },
                { id: 3, title: intl.formatMessage({ id: "home_serve_device_three" }) },
            ]
        },
        riskProfile: {
            title: intl.formatMessage({ id: "home_serve_portrait_t" }),
            list: [
                { id: 1, title: intl.formatMessage({ id: "home_serve_portrait_one" }) },
                { id: 2, title: intl.formatMessage({ id: "home_serve_portrait_two" }) },
            ]
        }
    }

    return (
        <main>
            {/* 顶部大图 */}
            <div className="w-full  bg-[#242736] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full bg-[url('/image/home/home-top-bg.png')] bg-contain  md:bg-[length:auto_56%] lg:bg-contain bg-right-bottom bg-no-repeat  px-6 xl:px-0">
                    <div className="flex flex-col text-white h-full max-w-[1200px] mx-auto pt-48 ">
                        <h3 className={`text-5xl lg:text-[58px] font-bold ${locale === "en" ? "max-w-[520px]" : ""}`}>{intl.formatMessage({ id: 'home_top_title' })}</h3>
                        <div className={`flex flex-col  mt-4 mb-6 ${locale === "en" ? " text-lg" : " text-3xl lg:text-[32px] "}`}>
                            <span>{intl.formatMessage({ id: 'home_top_title_des' })}</span>
                            <span>{intl.formatMessage({ id: 'home_top_title_des_two' })}</span>
                        </div>
                        <a href="#" className={`w-[206px] h-[56px] bg-[#0F61FF] rounded block leading-[56px] text-center text-xl ${locale === "en" ? "" : "font-semibold"}`}>{intl.formatMessage({ id: 'jump_wetech_text' })}</a>
                    </div>
                </div>
            </div>
            {/* 全球欺诈仍在继续 */}
            <div className={`w-full h-auto  relative bg-[rgba(243,245,249,1)]`}>
                <div className="w-1200 mx-auto pt-10 pb-10  lg:pt-16 lg:pb-28 ">
                    <div className="text-center text-3xl lg:text-[38px] text-[#333] pb-12 font-semibold">{intl.formatMessage({ id: 'home_slide_title' })}</div>
                    <ul className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 px-6 xl:px-0">
                        {fraudTypeList.map((item) => (
                            <li key={item.id} className="flex flex-col bg-white rounded-[10px] overflow-hidden basis-full md:basis-1/2 lg:basis-1/4">
                                <div className="w-full relative h-[200px]">
                                    <Image src={item.imgUrl} fill={true} objectFit="cover" alt="" />
                                </div>
                                <div className="flex justify-center flex-col items-center pb-12 pt-7 px-4">
                                    <div className=" pb-3 text-2xl text-center text-primary font-bold">{item.title}</div>
                                    <div className="text-center text-sm max-w-[240px]">{item.desc}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full bg-[#F4F8FF] min-h-[696px] overflow-hidden relative">
                    <HalfCirclePosition locale={locale} />
                </div>
            </div>
            {/* 全球最前沿和最全风控数据库 */}
            <div className="w-full min-h-[350px]  md:pt-16 py-10">
                <div className="w-1200 flex justify-between items-start h-full text-sm px-5 xl:px-0 flex-col sm:flex-row gap-y-8">
                    <ul>
                        <div className="flex items-center mb-4">
                            <Image src="/image/home/home-qqqy.png" width={40} height={40} alt="" />
                            <span className={`text-[#333]  pl-2 ${locale === 'en' ? ' text-xl max-w-[360px]' : 'text-2xl'}`}>{intl.formatMessage({ id: 'home_best_title' })}</span>
                        </div>
                        {advantageItemOne.map(it => (
                            <li className={`ml-3 mt-1 relative before:absolute before:top-3 before:-translate-y-1/2 before:-left-3 before:bg-primary before:w-[5px] before:h-[5px] before:rounded-full`} key={it.id}>{it.title}</li>
                        ))}
                    </ul>
                    <ul>
                        <div className="flex items-center mb-4">
                            <Image src="/image/home/home-jssf.png" width={40} height={40} alt="" />
                            <span className={`text-[#333]  pl-2 ${locale === 'en' ? ' text-xl max-w-[360px]' : 'text-2xl'}`}>{intl.formatMessage({ id: 'home_js_sf_t' })}</span>
                        </div>
                        {advantageItemTwo.map(it => (
                            <li className={`ml-3 mt-1 relative before:absolute before:top-3 before:-translate-y-1/2 before:-left-3 before:bg-primary before:w-[5px] before:h-[5px] before:rounded-full ${locale === "en" ? "max-w-[340px]" : ""}`} key={it.id}>{it.title}</li>
                        ))}
                    </ul>
                </div>

            </div>
            {/* 我们的服务 */}
            <div className=" bg-[#F3F5F9] pb-10">
                <div className="w-1200 py-9 px-5 xl:px-0">
                    <div className=" text-center font-semibold  text-3xl lg:text-[38px] text-[#333] mb-8">{intl.formatMessage({ id: 'our_serve' })}</div>

                    <div className="w-full flex flex-col gap-y-9 items-center text-[#333] text-sm">
                        <div className="flex justify-between bg-white rounded-lg w-full min-h-[360px] gap-y-5 py-6 md:py-[72px] px-6 lg:px-28  flex-col md:flex-row">
                            <div>
                                <div className="text-primary text-2xl font-bold mb-8">{serveContent.antiRisk.title}</div>
                                <ul className={`leading-6 ${locale === 'en' ? ' max-w-[466px]' : ''}`}>
                                    {serveContent.antiRisk.list.map(it => (
                                        <li className="list-style-dot" key={it.id}>{it.title}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className=" relative w-full md:w-[315px] h-[215px]  flex-shrink-0">
                                <Image src="/image/home/home-serve-1.png" objectFit="contain" fill alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between bg-white rounded-lg w-full min-h-[360px] gap-y-5 py-6 md:py-[72px] px-6 lg:px-28 flex-col-reverse md:flex-row-reverse">
                            <div>
                                <div className="text-primary text-2xl font-bold mb-8">{serveContent.deviceRisk.title}</div>
                                <ul className={`leading-6 ${locale === 'en' ? ' max-w-[428px]' : ''}`}>
                                    {serveContent.deviceRisk.list.map(it => (
                                        <li className=" list-style-dot" key={it.id}>{it.title}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className=" relative w-full md:w-[404px] min-h-[180px] md:h-[234px]  flex-shrink-0">
                                <Image src="/image/home/home-serve-2.png" objectFit="contain" fill alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between bg-white rounded-lg w-full min-h-[360px] gap-y-5 py-6 md:py-[72px] px-6 lg:px-28  flex-col md:flex-row">
                            <div>
                                <div className="text-primary text-2xl font-bold mb-8">{serveContent.riskProfile.title}</div>
                                <ul className={`leading-6 ${locale === 'en' ? ' max-w-[540px]' : ''}`}>
                                    {serveContent.riskProfile.list.map(it => (
                                        <li className=" list-style-dot" key={it.id}>{it.title}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className=" relative w-full md:w-[323px] h-[233px] flex-shrink-0">
                                <Image src="/image/home/home-serve-3.png" objectFit="contain" fill alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between bg-white rounded-lg w-full min-h-[360px] gap-y-5 py-6 md:py-[72px] px-6 lg:px-28   flex-col-reverse md:flex-row-reverse">
                            <div className="max-w-[524px]">
                                <div className="text-primary text-2xl font-bold">{intl.formatMessage({ id: 'home_serve_zyjj_t' })}</div>
                                <div className=" my-6">{intl.formatMessage({ id: 'home_serve_zyjj_one' })}</div>
                                <div className="flex items-center justify-between text-sm text-[#333] flex-col lg:flex-row gap-y-5">
                                    <div className="w-[248px] h-[72px] rounded-lg bg-[#F3F5F9] flex items-center justify-center gap-x-2">
                                        <Image src="/image/home/home-zy-1.png" width={56} height={40} alt="" />
                                        <span>{intl.formatMessage({ id: 'home_serve_zyjj_ethoca' })}</span>
                                    </div>
                                    <div className="w-[248px] h-[72px] rounded-lg bg-[#F3F5F9] flex items-center justify-center gap-x-2">
                                        <Image src="/image/home/home-zy-2.png" width={40} height={40} alt="" />
                                        <span>{intl.formatMessage({ id: 'home_serve_zyjj_rdr' })}</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" relative w-[300px] h-[256px] flex-shrink-0">
                                <Image src="/image/home/home-serve-4.png" objectFit="contain" fill alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
export default Home;
