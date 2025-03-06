import TechCard from './TechnologyCard'
import { frontendTechnologies } from '../assets/data/technologies'

const FrontendTechCardsSection: React.FunctionComponent = () => {
	return (
		<section className='block m-auto my-[180px] mx-[60px] transition-all duration-500 mobile-lg:block mobile-lg:my-[60px] tablet-sm:my-[120px] tablet-lg:mx-[32px] tablet-lg:my-[140px] desktop-sm:mx-[40px]'>
			<h1 className='text-center text-[40px] font-[600] text-[--main-light] uppercase mobile-lg:text-[18px] tablet-sm:text-[20px] tablet-lg:text-[28px] desktop-lg:text-[34px]'>Самые популярные Frontend-технологии</h1>
			<div className='place-items-center grid grid-cols-3 gap-[60px] my-[80px] mobile:grid-cols-1 mobile-lg:gap-y-[28px] mobile-lg:gap-[20px] mobile-lg:grid-cols-2 tablet-sm:my-[40px] tablet-sm:gap-y-[32px] tablet-lg:gap-y-[44px] tablet-lg:my-[60px]'>
				{frontendTechnologies.map((tech) => (
					<TechCard key={tech.id} {...tech}/>
				)) }
			</div>
		</section>
	)
}

export default FrontendTechCardsSection