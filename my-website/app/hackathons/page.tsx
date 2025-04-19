import { title } from "@/components/primitives";
import React from "react";
import Image from "next/image";
import {Timeline} from "@/components/ui/timeline";
import Iphone15Pro from "@/components/iphone15pro";
import {Safari} from "@/components/safari";

export default function HackathonsPage() {
    const data = [
        {
            title: "HackaTUM",
            year: "2022",
            company: "David",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        https://github.com/wedalb/david
                        <a href={"https://www.linkedin.com/feed/update/urn:li:activity:7000431859855675392/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7000431859855675392%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=WXNeECQ%2BT5qv7WgHisDSBA%3D%3D"}>Link1 </a>
                    </p>

                    <div className="grid grid-cols-4 gap-4 w-full">
                        <div className="w-full aspect-[433/882]">
                            <Iphone15Pro className="w-full h-full"
                                         src="/hackathon-images/hackaTUM-2022/img.png"/>
                        </div>
                        <div className="w-full aspect-[433/882]">
                            <Iphone15Pro className="w-full h-full"
                                         src="/hackathon-images/hackaTUM-2022/img_1.png"/>
                        </div>
                        <div className="w-full aspect-[433/882]">
                            <Iphone15Pro className="w-full h-full"
                                         src="/hackathon-images/hackaTUM-2022/img_2.png"/>
                        </div>
                        <div className="w-full aspect-[433/882]">
                            <Iphone15Pro className="w-full h-full"
                                         src="/hackathon-images/hackaTUM-2022/img_3.png"/>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "TEG Hack",
            year: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="w-full aspect-[433/882]">
                            <Iphone15Pro className="w-full h-full"
                                         src="/hackathon-images/hackaTUM-2022/img.png"/>
                        </div>
                        <div className="w-full aspect-[433/882]">
                            <Iphone15Pro className="w-full h-full"
                                         src="/hackathon-images/hackaTUM-2022/img_1.png"/>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "START Hack",
            year: "2023",
            company: "Luisa",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">


                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                        <a href="https://github.com/shivambanka/LUISA/blob/main/Antler_International-nerds.pdf.pdf"> Luisa PDF" </a>
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className=" w-full">
                        <Safari url="luisa.ai"
                                className="size-full"
                                imageSrc="/hackathon-images/startHack-2023/img.png"
                        />

                    </div>
                </div>
            ),
        },
        {
            title: "TUM.ai Makeathon",
            year: "2023",
            company: "UnCancelled",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        https://github.com/wedalb/uncancelled, Uncancelled

                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className=" w-full">
                        <Safari url="luisa.ai"
                                className="size-full"
                                imageSrc="https://via.placeholder.com/1200x750"
                        />

                    </div>
                </div>
            ),
        },
        {
            title: "START Sport Hack",
            year: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "EthHack",
            year: "2023",
            company: "Karmalized",
            tags: ["solidity", "react", "css", "JavaScript", "Ionic", "web3.js", "Truffle"],
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <a href="https://ethmunich.devfolio.co/">Devfolio</a>
                        <a href="https://devfolio.co/projects/karmalized-b2e9">Devfolio Project</a>
                        <a href="https://youtu.be/vZJQIbkvjUI">Youtube Video</a>

                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-2 gap-2 w-full">
                        <div className=" w-full">
                            <Safari url="karmalized.com"
                                    className="size-full"
                                    imageSrc="hackathon-images/ethHack-2023/img_1.png"
                            />
                        </div>
                        <div className=" w-full">
                            <Safari url="karmalized.com"
                                    className="size-full"
                                    imageSrc="hackathon-images/ethHack-2023/img_2.png"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Planetarium Hack Bochum",
            year: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <a href="https://pitch.com/v/galactic-space-mission-xth6b6">Pitch Link</a>
                        mxr storytelling
                        Zeiss Planetarium Bochum


                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                </div>
            )
        },
        {
            title: "FuturePynk Hack",
            year: "2023",
            content: (
                <div>
                </div>
            )
        },
        {
            title: "Cassini Hackathon",
            year: "2023",
            company: "ConCast",
            content: (
                <div>
                    https://github.com/wedalb/cassinihack-frontend
                </div>
            )
        },
        {
            title: "BaselHack",
            year: "2023",
            company: "DineDivine",
            content: (
                <div>
                </div>
            )
        },
        {
            title: "Junction Hack Helsinki",
            year: "2023",
            content: (
                <div>
                </div>
            )
        },
        {
            title: "HackaTUM",
            year: "2023",
            company: "FoodieBag",
            content: (
                <div>
                    <p>
                        https://pitch.com/v/foodiebag-shr3yz
                    </p>

                    <div className="grid grid-cols-4 gap-4 w-full">
                        <div className="w-full aspect-[433/882]">
                            <Iphone15Pro className="w-full h-full"
                                         src="/hackathon-images/hackaTUM-2023/img_1.png"/>
                        </div>
                        <div className="w-full aspect-[433/882]">
                            <Iphone15Pro className="w-full h-full"
                                         src="/hackathon-images/hackaTUM-2023/img_2.png"/>
                        </div>
                        <div className="w-full aspect-[433/882]">
                            <Iphone15Pro className="w-full h-full"
                                         src="/hackathon-images/hackaTUM-2023/img_3.png"/>
                        </div>
                        <div className="w-full aspect-[433/882]">
                            <Iphone15Pro className="w-full h-full"
                                         src="/hackathon-images/hackaTUM-2023/img_4.png"/>
                        </div>
                    </div>
                    <div className="grid grid-cols  w-full">
                        <div className=" w-full">
                            <Safari url="karmalized.com"
                                    className="size-full"
                                    imageSrc="hackathon-images/hackaTUM-2023/img.png"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Innovation Sprint",
            year: "2024",
            company: "FermentMe",
            content: (
                <div>
                </div>
            )
        },
        {
            title: "Pre-Incubator TEG",
            year: "2024",
            company: "Sustainaswag",
            content: (
                <div>
                    <a href="https://www.linkedin.com/posts/activity-7153456435400482816-eymZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdmqxgB6gxC8ia8f3YXJ6OUnvhbiaixe9E"> Linkedin </a>
                </div>
            )
        },
        {
            title: "GreenHack Paris",
            year: "2024",
            company: "diversions.ai",
            content: (
                <div>
                </div>
            )
        },
        {
            title: "Data4Good",
            year: "2024",
            company: "diversions.ai",
            content: (
                <div>
                </div>
            )
        },
        {
            title: "Upcoming: Q-Hack ...",
            year: "2025",
            content: (
                <div>
                </div>
            )
        },
        {
            title: "Upcoming: Circular Hack Fest ...",
            year: "2025",
            content: (
                <div>
                </div>
            )
        },
        {
            title: "Upcoming: TUM.ai Makeathon",
            year: "2025",
            content: (
                <div>
                </div>
            )
        },
        {
            title: "Upcoming: Junction hack 2025",
            year: "2025",
            content: (
                <div>
                </div>
            )
        },
        {
            title: "Upcoming: HackaTUM",
            year: "2025",
            content: (
                <div>
                </div>
            )
        },
    ];
  return (
    <div>
        <Timeline data={data} />

    </div>
  );
}
