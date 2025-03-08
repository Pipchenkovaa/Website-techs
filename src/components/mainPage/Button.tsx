// import { useNavigate } from 'react-router'

export interface buttonProps {
	text: string
}

export const DetailedButton: React.FunctionComponent<buttonProps & { href: string }> = ({ text, href }) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer"
			className="flex justify-center items-center w-[264px] h-[64px] rounded-[20px] bg-[--main-light] hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-500 mobile-lg:w-full tablet-sm:w-[124px] tablet-sm:h-[40px] tablet-sm:rounded-[12px] tablet-lg:w-[164px] tablet-lg:h-[48px] tablet-lg:rounded-[16px] desktop-sm:w-[200px] desktop-sm:h-[54px] desktop-sm:rounded-[18px] desktop-lg:w-[248px] desktop-lg:h-[60px]"
		>
			<span className="w-full h-full flex justify-center items-center text-[16px] text-[--main-dark] uppercase tablet-sm:text-[9px] tablet-lg:text-[12px] desktop-sm:text-[14px]">
				{text}
			</span>
		</a>
	);
}

export const RetrospectiveButton: React.FunctionComponent<buttonProps & { href: string }> = ({ text, href }) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer"
			className="flex justify-center items-center w-[264px] h-[64px] rounded-[20px] border-2 border-[--main-light] hover:bg-[--main-light] transition-all duration-500 mobile-lg:w-full tablet-sm:w-[124px] tablet-sm:h-[40px] tablet-sm:rounded-[12px] tablet-lg:w-[164px] tablet-lg:h-[48px] tablet-lg:border tablet-lg:rounded-[16px] desktop-sm:w-[200px] desktop-sm:h-[54px] desktop-sm:rounded-[18px] desktop-sm:border desktop-lg:w-[248px] desktop-lg:h-[60px]"
		>
			<span className="w-full h-full flex justify-center items-center text-[16px] text-[--main-light] hover:text-[--main-dark] uppercase tablet-sm:text-[9px] tablet-lg:text-[12px] desktop-sm:text-[14px]">
				{text}
			</span>
		</a>
	);
}

export const LearnMoreButton: React.FunctionComponent<buttonProps> = ({ text }) => {
	// const navigate = useNavigate()
	// const clickHandler = () => navigate('/somePath')

	return (
		<div className="flex items-center justify-center w-full rounded-[18px] border-2 hover:bg-[--main-light] transition-all duration-500 tablet-sm:rounded-[11px] tablet-lg:border tablet-lg:rounded-[13px]"> {/* onClick={clickHandler} */}
			<button className="w-full h-full text-[20px] text-[--main-light] hover:text-[--main-dark] py-[14px] tablet-sm:py-[8px] tablet-lg:py-[10px] tablet-lg:text-[12px] desktop-lg:text-[18px] desktop-lg:py-[14px]">
				{text}
			</button>
		</div>
	)
}