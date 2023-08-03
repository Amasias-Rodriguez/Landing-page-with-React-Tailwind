
export const Image = ({ order, imgMobile, imgDesktop }) => {
    return (
        <picture className={order}>
            <source media='(max-with:639px)' srcSet={imgMobile} />
            <source media='(min-with:640px)' srcSet={imgDesktop} />
            <img src={imgMobile} alt="image service" />
        </picture>
    )
}
