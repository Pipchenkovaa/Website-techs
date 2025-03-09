import { learnMoreButton } from "../../assets/data/skeleton";
import { LearnMoreButton } from "../Button";
import { Link } from "react-router-dom";

export interface TechCardPropsType {
  id: string;
  title: string;
  version: string;
  language: string;
  icon: string;
}

const TechCard: React.FunctionComponent<TechCardPropsType> = ({
  id,
  title,
  version,
  language,
  icon,
}) => {
  const shadowColor = `var(--color-${title
    .toLowerCase()
    .replace(/\s/g, "-")}, rgba(255,255,255,0.3))`;

  return (
    <div
      id={id}
      className="relative place-items-center w-[360px] h-[526px] px-[16px] pt-[16px] pb-[154px] rounded-[24px] mobile-lg:w-full mobile:h-fit mobile:pb-[10px] mobile-lg:h-fit mobile-lg:pb-[11px] mobile-lg:rounded-[10px] tablet-sm:w-[164px] tablet-sm:h-[240px] tablet-sm:px-[7px] tablet-sm:pt-[7px] tablet-sm:pb-[78px] tablet-sm:rounded-[12px] tablet-lg:w-[200px] tablet-lg:h-[292px] tablet-lg:px-[8px] tablet-lg:pt-[8px] tablet-lg:pb-[94px] tablet-lg:rounded-[14px] desktop-lg:w-[296px] desktop-lg:h-[432px] desktop-lg:px-[12px] desktop-lg:pt-[12px] desktop-lg:pb-[136px] desktop-lg:rounded-[22px]"
      style={{ background: "var(--gradient)" }}
    >
      <div
        className="w-full h-full place-items-center bg-[--main-dark] rounded-[20px] mobile-lg:rounded-[9px] mobile-lg:h-[164px] tablet-sm:rounded-[11px] tablet-lg:rounded-[13px] desktop-sm:rounded-[18px]"
        style={{ boxShadow: `0px 34px 38px -24px ${shadowColor}` }}
      >
        <div
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className="flex items-center justify-center absolute backdrop-blur-[12px] w-[118px] h-[34px] rounded-[10px] ml-[20px] mt-[20px] tablet-sm:ml-[10px] tablet-sm:mt-[10px] tablet-sm:rounded-[6px] tablet-sm:w-[70px] tablet-sm:h-[20px] tablet-lg:rounded-[7px] tablet-lg:mt-[12px] tablet-lg:ml-[12px] tablet-lg:w-[82px] tablet-lg:h-[26px] desktop-lg:rounded-[10px]"
        >
          <p className="text-[--main-light] tablet-sm:text-[9px] tablet-lg:text-[10px] desktop-lg:text-[14px]">
            {version}
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={icon}
            alt={`${title} Logo`}
            className="w-[232px] mobile:w-[110px] tablet-sm:w-[90px] tablet-lg:w-[110px] desktop-lg:w-[172px]"
          />
        </div>
      </div>

      <div className="w-full pt-[24px] tablet-sm:pt-[12px] tablet-lg:pt-[16px] desktop-lg:pt-[22px]">
        <div className="flex justify-between w-full h-full px-[10px] pb-[20px] mobile:pb-[10px] mobile-lg:h-full tablet-sm:px-[7px] tablet-sm:pb-[7px] tablet-lg:px-[8px] tablet-lg:pb-[12px] desktop-lg:pb-[14px]">
          <p className="font-[600] text-[26px] text-[--main-light] leading-[100%] tablet-sm:text-[12px] tablet-lg:text-[15px] desktop-lg:text-[20px]">
            {title}
          </p>
          <p className="text-[18px] text-[--gray-light-1] tablet-sm:text-[9px] tablet-lg:text-[10px] desktop-lg:text-[16px]">
            {language}
          </p>
        </div>
        <Link to="/about-technologies">
          <LearnMoreButton text={learnMoreButton.text} />
        </Link>
      </div>
    </div>
  );
};

export default TechCard;
