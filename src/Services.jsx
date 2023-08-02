import { Image } from "./Image"
import { Text } from "./Text"

import eggImgMobile from '../assets/mobile/image-transform.jpg'
import eggImgDesktop from '../assets/desktop/image-transform.jpg'
import glassImgMobile from '../assets/mobile/image-stand-out.jpg'
import glassImgDesktop from '../assets/mobile/image-stand-out.jpg'

export const Services = () => {
    return (
        <section className="tablet:grid tablet:grid-cols-2">
            <Image
                imgMobile={eggImgMobile}
                imgDesktop={eggImgDesktop}
            />
            <Text
                title='Transform your brand'
                text=' We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.'
                color='bg-Yellow'
            />
            <Image
                imgMobile={glassImgMobile}
                imgDesktop={glassImgDesktop}
            />
            <Text
                title='Stand out to the right audience'
                text=' W  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
                color='bg-Sotf-red'
            />
        </section>
    )
}



