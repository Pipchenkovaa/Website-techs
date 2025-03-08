import {
  detailedButton,
  retrospectiveButton,
} from "../../assets/data/skeleton";
import { DetailedButton, RetrospectiveButton } from "./Button";

export interface ModernTechPropsType {
  title: string;
  description: string;
  image: string;
}

const ModernTechBlock: React.FunctionComponent<ModernTechPropsType> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="flex justify-between items-center my-[180px] mx-[60px] transition-all duration-500 mobile-lg:block mobile-lg:my-[60px] tablet-sm:my-[120px] tablet-lg:mx-[32px] tablet-lg:my-[140px] desktop-sm:mx-[40px]">
      <div className="max-w-[544px] mobile-lg:mb-[32px] mobile-lg:max-w-[100%] tablet-sm:max-w-[256px] tablet-lg:max-w-[340px] desktop-sm:max-w-[416px] desktop-lg:max-w-[512px]">
        <div className="block mb-[36px] mobile-lg:mb-[16px] tablet-sm:mb-[20px] tablet-lg:mb-[26px] desktop-sm:mb-[28px]">
          <p className="text-[54px] font-[600] text-[--main-light] leading-[110%] mb-[18px] uppercase mobile-lg:mb-[10px] mobile-lg:leading-[110%] tablet-sm:text-[24px] tablet-sm:mb-[10px] tablet-lg:text-[32px] desktop-sm:text-[40px] desktop-sm:mb-[14px] desktop-lg:text-[48px] desktop-lg:leading-[104%]">
            {title}
          </p>
          <p className="text-[22px] text-[--gray-light-2] leading-[130%] tablet-sm:text-[12px] tablet-sm:leading-[124%] tablet-lg:text-[16px] tablet-lg:leading-[114%] desktop-sm:text-[18px] desktop-sm:leading-[120%] desktop-lg:text-[20px] desktop-lg:leading-[124%]">
            {description}
          </p>
        </div>
        <div className="flex justify-between mobile-lg:justify-center mobile-lg:gap-3 mobile-lg:w-full mobile-lg:max-w-[600px] mobile-lg:mx-auto">
          <DetailedButton
            text={detailedButton.text}
            href="https://youtu.be/m47wMt-JTNE?si=kKA1UUqgZE_M39qB"
          />
          <RetrospectiveButton
            text={retrospectiveButton.text}
            href="https://sdvv.ru/articles/iz-mira-tekhnologiy/kak-poyavilis-sayty-kratkaya-istoriya-interneta/"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={image}
          alt="Main image (React)"
          className="hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all duration-500 w-[464px] h-[406px] tablet-sm:w-[224px] tablet-sm:h-[190px] tablet-lg:w-[300px] tablet-lg:h-[254px] desktop-sm:w-[340px] desktop-sm:h-[288px] desktop-lg:w-[440px] desktop-lg:h-[372px]"
        />
      </div>
    </div>
  );
};

export default ModernTechBlock;
