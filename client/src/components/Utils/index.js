import React from 'react';
import { Chips } from '../Chip';

export default function Util(value) {
    switch (value) {
        case 'html':
            return <Chips primary={'#DD4B25'} secondary={'#F7F7F7'}>#{value}</Chips>;
        case 'css':
            return <Chips primary={'#2863EA'} secondary={'#F7F7F7'}>#{value}</Chips>;
        case 'javascript':
            return <Chips primary={'#F0D91C'} secondary={'#000000'}>#{value}</Chips>;
        case 'react':
            return <Chips primary={'#222222'} secondary={'#60D5F5'}>#{value}</Chips>;
        case 'mongodb':
            return <Chips primary={'#13A952'} secondary={'#222222'}>#{value}</Chips>;
        case 'jquery':
            return <Chips primary={"#0B67AC"} secondary={'#FFFFFF'}>#{value}</Chips>;
        default:
            break;
    }
}
