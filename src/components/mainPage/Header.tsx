import MenuButton from "../../assets/icons/Burger-Button-icon.svg";

export interface HeaderPropsType {
  list: {
    link: string;
    id: string;
  }[];
}

const Header: React.FunctionComponent<HeaderPropsType> = ({ list }) => {
  return (
    <div className="flex">
      <header className="flex items-center m-auto mt-[40px]">
        <div>
          <ul className="flex">
            {list.map((item, index) => (
              <div
                key={index}
                className="flex px-[40px] text-[16px] text-[--gray-light-2] hover:text-[--main-light] transition-all duration-500 mobile-lg:hidden tablet-sm:text-[10px] tablet-sm:px-[18px] tablet-lg:text-[12px] tablet-lg:px-[26px] desktop-sm:text-[14px] desktop-sm:px-[32px]"
              >
                <a href={`#${item.id}`} className="uppercase">
                  {item.link}
                </a>
              </div>
            ))}
          </ul>
        </div>
        <div className="hidden mobile-lg:flex mobile-lg:absolute mobile-lg:p-[10px] mobile-lg:top-[24px] mobile-lg:right-[24px]">
          <img src={MenuButton} alt="Menu button" className="w-6 h-6" />
        </div>
      </header>
    </div>
  );
};

export default Header;
