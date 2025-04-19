import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import React from "react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import LogoCarousel from "@/components/logoCarousel";
import { UnderConstruction } from "@/components/layout/construction";

export default function Home() {
  return (
    <div>
      <UnderConstruction />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Chat with&nbsp;</span>
          <span className={title({ color: "violet" })}>
            Heidi Albarazi&nbsp;
          </span>
          <br />
          <span className={title()}> anytime!</span>
          <div className={subtitle({ class: "mt-4" })}>
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
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
        <LogoCarousel />
      </section>
      {/*
            <section>
                <SkillsCarousel/>

            </section>
            */}
    </div>
  );
}
