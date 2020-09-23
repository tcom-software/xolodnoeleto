import React from "react";
import { Container } from './styles';
import { Image, SvgIcon } from "@atoms";
import theme from 'styles/theme';

const Banner = () => {
    return (
        <Container>
            <Image
                jpg={`/images/banners/top-banner.jpg`}
                jpgMobile={`/images/banners/top-banner.jpg`}

                webp={`/images/banners/top-banner.webp`}
                webpMobile={`/images/banners/top-banner.webp`}
            />
            <SvgIcon type='close' width={15} height={15} color={theme.close.color}/>
        </Container>
    )
};

export default Banner;