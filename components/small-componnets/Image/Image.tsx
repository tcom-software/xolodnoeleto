import React from "react";

interface ImageInterface {
    jpg: string
    jpgMobile: string
}

const Image = (props: ImageInterface) => {
    const { jpg, jpgMobile } = props;
    return (
        <picture>
            <source media="(min-width:768px)" srcSet={jpg} />
            <img src={jpgMobile}  />
        </picture>
    );
};

export default Image;
