import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Avatar({ url, width, height }) {
    return (
        <Container width={width} height={height}>
            <img
                src={
                    url ||
                    "https://pbs.twimg.com/profile_images/1389213280/OgAAANmkk6Kx8ebiAORq1MgHAYu30W90u6PTs0A4Z6qiLeneJ485Mh42Cn2EZoS5OTTR7AlDQRGU5i1ilJejOpnFsfMAm1T1UNriALlCN4ZHqt5Te21nfh-IMrHR_400x400.jpg"
                }
                alt="Avatar"
            />
        </Container>
    );
}

Avatar.defaultProps = {
    url: null,
    width: "50px",
    height: "50px",
};

Avatar.propTypes = {
    url: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};
