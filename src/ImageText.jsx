export const ImageText = {(order, imgMobile, imgDesktop, title, text)} => {
    return (
        <div className={order}>
            <picture>
                <source media='(max-with:639px)' srcSet={imgMobile} />
                <source media='(min-with:640px)' srcSet={imgDesktop} />
                <img src={imgMobile} alt="image service" />
            </picture>
            <h2>title</h2>
            <p>text</p>
        </div>
    )
}
