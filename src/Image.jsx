
export const Image = ({ imgMobile, imgDesktop }) => {
    return (
        <picture>
            <source media='(max-with:639px)' srcSet={imgMobile} />
            <source media='(min-with:640px)' srcSet={imgDesktop} />
            <img src={imgMobile} alt="image service" />
        </picture>
    )
}
