/* eslint-disable no-dupe-keys */
import { BsInstagram } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
import uiux from '../images/icons/uiux.svg'
import brand from '../images/icons/brand.svg'
import web from '../images/icons/web.svg'
import codeAndT from '../images/code&t.png'
import prospermetrics from '../images/prospermetrics.png'

// Social Media Icons
export const socialIcons = [
    {
        icon: <FaDiscord />,
    },
    {
        icon: <BsInstagram />,
    },
    {
        icon: <AiFillGithub />,
    },
];

// Service
export const serviceData = [
    {
        title: 'UI UX Design',
        description: 'Transforming ideas into intuitive interfaces',
        icon: uiux

    },

    {
        title: 'Brand Identity',
        description: ' We Make Your Brand Stand Out and Connect.',
        icon: brand
    },

    {
        title: 'Web Development',
        description: "Web Development Solutions for Your Digital Future.",
        icon: web
    },
]

// Carousel
export const imageData = [
    {
        title: 'CODE&T',
        img: codeAndT,
        info: 'Crafting Digital Experiences, Beyond Imagination.',

    },

    {
        title: 'PROSPER METRICS',
        img: prospermetrics,
        info: 'Your ultimate companion in the journey towards business success.',

    },

    {
        title: 'CODE&T',
        img: codeAndT,
        info: 'Crafting Digital Experiences, Beyond Imagination.',

    },

    {
        title: 'PROSPER METRICS',
        img: prospermetrics,
        info: 'Your ultimate companion in the journey towards business success.',

    },

]

export const contactData = [
    {
        option: 'UI/UX',
    },

    {
        option: 'Mobile Dev',
    },

    {
        option: 'Saas Project',
    },

    {
        option: 'Web Dev',
    }
]