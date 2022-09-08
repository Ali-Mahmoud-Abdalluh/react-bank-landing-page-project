import { quotes } from "../assets"
import styles from "../style"

const FeedbackCard = ({ content, name, title, img }) => (
  <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] opject-contain" />
    <p className={`${styles.paragraph} font-poppins font-normal text-[18px] leading-[32px] text-white my-10 `}>
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={`${name} image`} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <p className="font-poppins font-semiblod text-[20px] leading-[32px] text-white">{name}</p>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
      </div>
    </div>
  </div>
)

export default FeedbackCard