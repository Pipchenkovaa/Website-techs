export interface FooterPropsType {
  confidentiality: string;
  personalData: string;
  rights: string;
  networks: {
    github: string;
    telegram: string;
    mail: string;
  };
}

const Footer: React.FunctionComponent<FooterPropsType> = ({
  confidentiality,
  personalData,
  rights,
  networks,
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-[--gray-dark] h-[220px] mx-[60px] rounded-t-[24px] text-[--gray-light-2] text-[20px] mobile-lg:h-fit mobile-lg:py-[32px] mobile-lg:rounded-t-[14px] tablet-sm:h-[180px] tablet-sm:text-[12px] tablet-lg:h-[200px] tablet-lg:rounded-t-[16px] tablet-lg:mx-[32px] desktop-sm:text-[16px] desktop-sm:mx-[40px]">
      <div className="w-[90%] flex items-center text-center gap-[54px] mobile-lg:flex-col mobile-lg:gap-y-[10px] tablet-sm:justify-between desktop-sm:w-[85%]">
        <p className="cursor-pointer hover:text-[--main-light] transition-all duration-500">
          {confidentiality}
        </p>
        <p className="cursor-pointer hover:text-[--main-light] transition-all duration-500">
          {personalData}
        </p>
      </div>
      <hr className="w-[90%] border-gray-[--gray-light-2] my-[28px] mobile-lg:w-[75%] mobile-lg:my-[20px] desktop-sm:w-[85%]" />
      <div className="w-[90%] flex justify-between items-center text-center mobile-lg:flex-col mobile-lg:gap-y-[12px] desktop-sm:w-[85%]">
        <p>{rights}</p>
        <div className="flex gap-[28px] justify-center items-center tablet-sm:gap-[20px]">
          <a href="https://github.com/Pipchenkovaa">
            <img
              src={networks.github}
              alt="GitHub"
              className="w-7 h-7 tablet-sm:w-5 tablet-sm:h-5 desktop-sm:h-6 desktop-sm:w-6 hover:invert transition-all duration-500"
            />
          </a>
          <a href="https://t.me/@pip_ch">
            <img
              src={networks.telegram}
              alt="Telegram"
              className="w-7 h-7 tablet-sm:w-5 tablet-sm:h-5 desktop-sm:h-6 desktop-sm:w-6 hover:invert transition-all duration-500"
            />
          </a>
          <a href="mailto:pipchenkova0701@gmail.com">
            <img
              src={networks.mail}
              alt="Email"
              className="w-7 h-7 tablet-sm:w-5 tablet-sm:h-5 desktop-sm:h-6 desktop-sm:w-6 hover:invert transition-all duration-500"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
