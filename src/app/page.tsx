import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overscroll-none overflow-hidden bg-white">
      <div
        className={`w-full aspect-[375.3/481.71] z-10 bg-ghost_white relative bg-[url('/images/bg-container-mobile-dark-purple.svg')] md:bg-[url('/images/bg-container-tablet-dark-purple.svg')] md:aspect-[768/540.24] lg:bg-[url('/images/bg-container-desktop-dark-purple.svg')] lg:aspect-[1440/730] bg-no-repeat bg-cover lg`}
      >
        <div className="mt-8 flex flex-row justify-between px-4 items-center md:px-10 lg:px-[165px]">
          <div className="relative w-[95.76px] h-[24.61px]">
            <Image src={"/images/logo-light.svg"} fill alt="brand logo" />
          </div>
          <p className="text-base leading-loose tracking-[-0.16px] font-bold font-manrope border-b-[3px] border-b-eucalyptus text-white">
            Apply for access
          </p>
        </div>

        <div className="mt-16 px-4 items-center flex flex-col w-full gap-10 lg:gap-9 md:px-[98px] md:mt-14 lg:px-[402px] lg:mt-[55px]">
          <h1 className="font-fraunces font-semibold text-[50px] md:text-[60px] lg:text-[80px] leading-none text-center text-white">
            Data tailored to your needs.
          </h1>
          <button
            type="button"
            className="border border-transparent bg-eucalyptus text-dark_purple px-6 py-3 text-base font-bold leading-loose lg:text-lg lg:leading-[32px] hover:border-eucalyptus hover:bg-transparent hover:text-eucalyptus"
          >
            Learn more
          </button>
        </div>

        <div className="hidden md:block absolute z-10 left-[-228px] bottom-[152px] w-[341px] h-[317px] lg:bottom-[297px] lg:left-[-138px]">
          <Image src={"/images/bg-pattern-1.svg"} alt="phone" fill />
        </div>

        <div className="hidden md:block absolute z-10 right-[-95px] bottom-[110px] w-[174px] h-[181px] lg:bottom-[235px] lg:right-[-48px]">
          <Image src={"/images/bg-pattern-2.svg"} alt="phone" fill />
        </div>

        <div className="absolute z-20 w-[320px] h-[184px] bottom-[-91px] right-[16px] md:right-[103px] md:bottom-[-148px] md:w-[514px] md:h-[296px] lg:right-[312px] lg:bottom-[-165px] lg:h-[441px] lg:w-[767px]">
          <Image src={"/images/image-hero.webp"} alt="phone" fill />
        </div>
      </div>
      <div
        className={`px-4 md:px-[98px] w-full pt-[245px] lg:px-[165px] lg:mt-[-226px] lg:pt-[451px] lg:pb-[171px] lg:aspect-[1440/960] md:pt-[341px] md:mt-[-137px] z-0 mt-[-90px] pb-[72px] flex flex-col lg:flex-row gap-10 md:gap-12 aspect-[375.3/1070.71] bg-white relative bg-[url('/images/bg-container-mobile-ghost-white.svg')] md:bg-[url('/images/bg-container-tablet-ghost-white.svg')] lg:bg-[url('/images/bg-container-desktop-ghost-white.svg')] md:aspect-[768/920.73] bg-no-repeat bg-cover`}
      >
        {[
          {
            no: 1,
            title: "Actionable insights",
            content:
              "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
          },
          {
            no: 2,
            title: "Data-driven decisions",
            content:
              "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
          },
          {
            no: 3,
            title: "Always affordable",
            content:
              "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
          },
        ].map((step) => {
          return (
            <div
              key={step.no}
              className="flex flex-col items-center gap-6 md:gap-8 md:flex-row lg:flex-col lg:gap-14"
            >
              <div className="w-12 h-12 rounded-full border border-davy_grey text-dark_purple flex shrink-0 items-center justify-center font-fraunces text-xl leading-[2.25rem] font-semibold">
                {step.no}
              </div>
              <div className="flex flex-col gap-4 md:items-start items-center lg:items-center lg:gap-7">
                <h3 className="text-[28px] leading-[36px] font-fraunces text-center text-dark_purple font-semibold">
                  {step.title}
                </h3>
                <p className="font-manrope font-normal text-base lg:text-[18px] lg:leading-[32px] leading-[28px] text-center md:text-left text-davy_grey lg:text-center">
                  {step.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-[100px] px-4 md:px-10 lg:mt-[110px] lg:px-[165px]">
        <div className="w-full h-fit relative">
          <div className="w-full aspect-square rounded-full relative z-10 md:w-[281px] md:h-[281px] lg:w-[477px] lg:h-[477px]">
            <Image
              src={"/images/image-founder.webp"}
              fill
              alt="founder-photo"
            />
          </div>
          <div className="relative z-20 mt-[-64px] w-full text-white bg-dark_purple p-8 lg:p-16 flex flex-col items-center md:w-[514px] md:ml-[175px] md:mt-[-130px] md:items-start md:text-left lg:ml-[382px] lg:mt-[-301px] lg:w-[730px]">
            <h5 className="font-fraunces font-semibold text-[32px] leading-[48px] text-center md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[64px]">
              Be the first to test
            </h5>
            <p className="mt-4 text-base leading-[28px] lg:text-[18px] lg:leading-[32px] font-normal font-manrope text-center md:text-left">
              {`Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I'll be in touch to schedule a
              call.`}
            </p>
            <button
              type="button"
              className="mt-6 border-none bg-eucalyptus text-dark_purple px-6 py-3 text-base font-bold leading-loose lg:text-lg lg:leading-[32px]"
            >
              Apply for access
            </button>
            <div className="hidden md:block absolute w-[221px] h-[212px] right-[11px] bottom-[-106px]">
              <Image src={"/images/bg-pattern-3.svg"} alt="phone" fill />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col mt-[138px] pb-[64px] md:pb-[122px] md:mt-[210px] w-full gap-[58px] items-center">
        <div className="relative w-[95.76px] h-[24.61px]">
          <Image src={"/images/logo-dark.svg"} fill alt="dark-brand" />
        </div>
        <div className="flex flex-row gap-7">
          <div className="w-5 h-5 relative">
            <Image src={"/images/icon-facebook.svg"} fill alt="facebook" />
          </div>
          <div className="w-5 h-5 relative">
            <Image src={"/images/icon-twitter.svg"} fill alt="twitter" />
          </div>
          <div className="w-5 h-5 relative">
            <Image src={"/images/icon-instagram.svg"} fill alt="instagram" />
          </div>
        </div>
      </div>
    </main>
  );
}
