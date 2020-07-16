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
        case 'bootstrap':
            return <Chips primary={'#7953B2'} secondary={'#FFFFFF'}>#{value}</Chips>;
        case 'api creation':
            return <Chips primary={''} secondary={''}>#{value}</Chips>;
        case 'json':
            return <Chips primary={''} secondary={''}>#{value}</Chips>;
        case 'ajax':
            return <Chips primary={''} secondary={''}>#{value}</Chips>;
        case 'vue':
            return <Chips primary={'#41B883'} secondary={'#33495E'}>#{value}</Chips>;
        case 'heroku':
            return <Chips primary={'#9F7CC1'} secondary={'#FFFFFF'}>#{value}</Chips>;
        case 'git':
            return <Chips primary={'#000000'} secondary={'#FFFFFF'}>#{value}</Chips>;
        case 'github':
            return <Chips primary={'#000000'} secondary={'#FFFFFF'}>#{value}</Chips>;
        case 'handlebars':
            return <Chips primary={'#F1772A'} secondary={'#DDDDDD'}>#{value}</Chips>;
        case 'ejs':
            return <Chips primary={'#B4CA64'} secondary={'#A91F4F'}>#{value}</Chips>;
        case 'sessions storage':
            return <Chips primary={'#'} secondary={'#'}></Chips>
        case 'nodejs':
            return <Chips primary={'#76AD63'} secondary={'#F7F7F7'}>#{value}</Chips>;
        case 'express':
            return <Chips primary={'#000000'} secondary={'#F7F7F7'}>#{value}</Chips>;
        case 'passport':
            return <Chips primary={'#D6FF00'} secondary={'#00B9F1'}>#{value}</Chips>;
        case 'jest':
            return <Chips primary={'#97425A'} secondary={'#FAFFFE'}>#{value}</Chips>
        default:
            return <Chips>#{value}</Chips>
    }
}
