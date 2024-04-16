import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overscroll-none overflow-hidden bg-white">
      <div
        className={`w-full aspect-[375.3/481.71] z-10 bg-ghost_white relative bg-[url('/images/bg-container-mobile-dark-purple.svg')] bg-no-repeat bg-cover`}
      >
        <div className="mt-8 flex flex-row justify-between px-4 items-center">
          <div className="relative w-[95.76px] h-[24.61px]">
            <Image src={"/images/logo-light.svg"} fill alt="brand logo" />
          </div>
          <p className="text-base leading-loose tracking-[-0.16px] font-bold font-manrope border-b-[3px] border-b-eucalyptus text-white">
            Apply for access
          </p>
        </div>

        <div className="mt-16 px-4 items-center flex flex-col w-full gap-10">
          <h1 className="font-fraunces font-semibold text-[50px] leading-none text-center text-white">
            Data tailored to your needs.
          </h1>
          <button
            type="button"
            className="border-none bg-eucalyptus text-dark_purple px-6 py-3 text-base font-bold leading-loose "
          >
            Learn more
          </button>
        </div>

        <div className="absolute z-20 w-[320px] h-[184px] bottom-[-91px] right-[16px]">
          <Image src={"/images/image-hero.webp"} alt="phone" fill />
        </div>
      </div>
      <div
        className={`px-4 w-full pt-[245px] z-0 mt-[-90px] pb-[72px] flex flex-col gap-10 aspect-[375.3/1070.71] bg-white relative bg-[url('/images/bg-container-mobile-ghost-white.svg')] bg-no-repeat bg-cover`}
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
            <div key={step.no} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-davy_grey text-dark_purple flex items-center justify-center font-fraunces text-xl leading-[2.25rem] font-semibold">
                {step.no}
              </div>
              <h3 className="mt-6 text-[28px] leading-[36px] font-normal font-fraunces text-center text-dark_purple">
                {step.title}
              </h3>
              <p className="mt-4 font-manrope font-normal text-base leading-[28px] text-center text-davy_grey">
                {step.content}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-[100px] px-4">
        <div className="w-full h-fit relative">
          <div className="w-full aspect-square rounded-full relative z-10">
            <Image
              src={"/images/image-founder.webp"}
              fill
              alt="founder-photo"
            />
          </div>
          <div className="relative z-20 mt-[-64px] w-full text-white bg-dark_purple p-8 flex flex-col items-center">
            <h5 className="font-fraunces font-semibold text-[32px] leading-[48px] text-center">
              Be the first to test
            </h5>
            <p className="mt-4 text-base leading-[28px] font-normal font-manrope text-center">
              {`Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I'll be in touch to schedule a
              call.`}
            </p>
            <button
              type="button"
              className="mt-6 border-none bg-eucalyptus text-dark_purple px-6 py-3 text-base font-bold leading-loose "
            >
              Apply for access
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col mt-[138px] pb-[64px] w-full gap-[58px] items-center">
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
