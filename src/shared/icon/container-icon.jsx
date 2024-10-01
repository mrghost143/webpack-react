import React from 'react';
import PropTypes from 'prop-types';
// import { FaBeer, FaCoffee } from 'react-icons/fa';
import { BackSVG, CloseSVG, TelecallerSVG } from './svg';

const icons = {
    // beer: FaBeer,
    // coffee: FaCoffee,
    telecaller: TelecallerSVG,
    close: CloseSVG,
    back: BackSVG,
    s:()=><>cvs</>
};

export const Icon = ({ name, size = 24, color = 'currentColor', stroke = "", ariaLabel, ...rest }) => {
    const IconComponent = icons[name];
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found.`);
        return null;
    }

    return (
        <span
            role="icon"
            aria-label={ariaLabel}
            aria-hidden={!ariaLabel}
            {...rest}
            style={{ display: "inline-flex", placeContent: "center", width: size, height: size, color, ...rest?.style }}
        >
            <IconComponent size={size} color={color} fill={color} stroke={stroke} />
        </span>
    );
};

Icon.propTypes = {
    name: PropTypes.oneOf(Object.keys(icons)).isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    ariaLabel: PropTypes.string,
    rest: PropTypes.object,
};

