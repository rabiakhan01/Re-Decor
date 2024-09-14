import { ClockwiseIcon, ColorIcon, DiamondIcon, IdeaIcon } from "../../../assets/icons";
import { ListWithIcon } from "../../shared";

const Advantages = () => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap gap-5 px-6 w-full">
            <div className="flex gap-5 flex-wrap sm:flex-nowrap w-full lg:w-1/2">
                <ListWithIcon
                    icon={<ColorIcon height={55} width={55} />}
                    heading={'Unlimited Color Combinations'}
                    desc={'AI Home Decor offers limitless color combinations to match your unique taste and preferences.'}
                />
                <ListWithIcon
                    icon={<ClockwiseIcon height={40} width={40} color={'#531877'} />}
                    heading={'Time-Saving Design Suggestions'}
                    desc={'Save time by instantly getting personalized design ideas tailored to your space.'}
                />
            </div>
            <div className="flex gap-5 flex-wrap sm:flex-nowrap w-full lg:w-1/2">
                <ListWithIcon
                    icon={<DiamondIcon height={40} width={40} />}
                    heading={'Access to Unique & Trendy Designs'}
                    desc={'Discover a variety of unique, modern, and stylish home decor options that set your space apart.'}
                />
                <ListWithIcon
                    icon={<IdeaIcon height={55} width={55} />}
                    heading={'Free Effortless Customization'}
                    desc={'Easily experiment with different design ideas and make changes to your decor without any cost.'}
                />
            </div>
        </div>
    )
}
export default Advantages;