import { TbHome } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { TbBriefcase } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";

export const tabs = [
    {
        title: 'Home',
        link: '/',
        icon: <TbHome />
    },
    {
        title: 'About',
        link: '/about',
        icon: <TbUser />
    },
    {
        title: 'Services',
        link: '/services',
        icon: <TbBriefcase />
    }
]

export const socials = [
    {
        link: 'https://instagram.com/pedroabbasi',
        icon: <TbBrandInstagram/>
    },
    {
        link: 'https://linkedin.com/in/pedro-abbasi',
        icon: <TbBrandLinkedin/>
    },
    {
        link: 'https://github.com/jpabbasi',
        icon: <TbBrandGithub/>
    }
]