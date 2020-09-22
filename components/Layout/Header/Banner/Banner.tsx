import React from "react";
import Image from "../../../small-componnets/Image";
import { Container } from './styles';
import SvgIcons from "../../../small-componnets/SvgIcon";
import theme from '../../../../styles/theme';

const Banner = () => {
    return (
        <Container>
            <Image
                jpg={`/images/banners/top-banner.jpg`}
                jpgMobile={`/images/banners/top-banner.jpg`}
            />
            <SvgIcons type='close' width={15} height={15} color={theme.close.color}/>
        </Container>
    )
};

export default Banner;