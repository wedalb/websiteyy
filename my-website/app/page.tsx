import {Link} from "@heroui/link";
import {Snippet} from "@heroui/snippet";
import {Code} from "@heroui/code";
import {button as buttonStyles} from "@heroui/theme";

import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import LogoCarousel from "@/components/logoCarousel";
import React from "react";
import SkillsCarousel from "@/components/skillsCarousel";
import ParallaxText from "@/components/parallaxText";


export default function Home() {
    return (
        <div>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" >
                <div className="inline-block max-w-xl text-center justify-center">
                    <span className={title()}>(WIP Website) Chat with&nbsp;</span>
                    <span className={title({color: "violet"})}>Heidi Albarazi&nbsp;</span>
                    <br/>
                    <span className={title()}> anytime!</span>
                    <div className={subtitle({class: "mt-4"})}>
                        Designer, Developer and Researcher!
                    </div>
                </div>

                <div className="flex gap-3">
                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                        })}
                        href={siteConfig.links.docs}
                    >
                        Chat with me!
                    </Link>
                    <Link
                        isExternal
                        className={buttonStyles({variant: "bordered", radius: "full"})}
                        href={siteConfig.links.github}
                    >
                        <GithubIcon size={20}/>
                        GitHub
                    </Link>
                </div>
                <LogoCarousel/>
            </section>
            {/*
            <section>
                <SkillsCarousel/>

            </section>
            */}
        </div>

    );
}
