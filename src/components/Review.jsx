import { REVIEW } from "../constants"
import xaviour from "../assets/xaviour.jpeg"



const Review = () => {
  return (
    <section id="review" className="container mx-auto mb-8 mt-12">
        <div className="flex flex-col">
            <p className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]">
                {REVIEW.content}
            </p>
            <div className="flex items-center justify-center gap-6">
                <img src={xaviour} width={80} height={80} alt={REVIEW.name} className="rounded-full border"/>
                <div className="tracking-tighter">
                    <h6>{REVIEW.name}</h6>
                    <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default Review