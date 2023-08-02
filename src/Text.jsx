
export const Text = ({ title, text, color }) => {
    return (
        <div className="text-center h-[437px] px-6 flex flex-col place-content-around py-6">
            <h2 className="font-Fraunces text-[2rem] font-black tablet:text-[1.25rem]">{title}</h2>
            <p className="font-Barlow text-Dark-grayish-blue text-[1.25rem] leading-[1.875rem] tablet:text-[0.8rem] tablet-leading-[1.5rem]" >{text}</p>
            <button className="uppercase font-Fraunces">Learn More</button>
            <div className="relative">
                <div className={`w-[137px] h-[10px] ${color} rounded-full absolute mx-auto right-0 left-0 bottom-5 z-10`}></div>
            </div>
        </div>
    )
}
