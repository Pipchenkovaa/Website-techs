export interface GeneralTrendsBlockPropsType {
	list: {
		trand_1: string
		trand_2: string
		trand_3: string
		trand_4: string
		trand_5: string
		trand_6: string
	}
}

const GeneralTrendsBlock: React.FunctionComponent<GeneralTrendsBlockPropsType> = ({ list }) => {
	return (
		<section className="block m-auto my-[180px] mx-[60px] transition-all duration-500 mobile-lg:block mobile-lg:my-[60px] tablet-sm:my-[120px] tablet-lg:mx-[32px] tablet-lg:my-[140px] desktop-sm:mx-[40px]">
			<h1 id="trends" className="text-center text-[40px] font-[600] text-[--main-light] uppercase mobile-lg:text-[18px] tablet-sm:text-[20px] tablet-lg:text-[28px] desktop-lg:text-[34px]">
				Общие тренды 2025
			</h1>
			<div className="rounded-[32px] w-auto p-[20px] my-[80px] tablet-sm:my-[40px] tablet-lg:my-[60px]" style={{ background: 'var(--gradient)' }}>
				<ul className="flex flex-wrap justify-center gap-[50px] my-[32px] mobile-lg:my-[14px] mobile-lg:gap-[20px] tablet-sm:my-[18px] tablet-sm:gap-[24px] tablet-lg:my-[24px] desktop-sm:gap-[32px] desktop-lg:gap-[40px]">
					{Object.values(list).map((trend, index) => (
						<li key={index} className="text-[--main-light] text-[24px] px-4 py-2  tablet-sm:text-[14px] tablet-lg:text-[18px] desktop-sm:text-[20px]">
							{trend}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default GeneralTrendsBlock