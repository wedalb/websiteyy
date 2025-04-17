import { title } from "@/components/primitives";
import { TimelineDemo } from "@/components/TimelineDemo";
import Image from "next/image";
import {Timeline} from "@/components/ui/timeline";
import React from "react";

export default function CareerPage() {
    const data = [
        {
            title: "Hackathon Mentor",
            year: "Mar 2025 - Now",
            company: "Masterschool",
            logo: "https://cdn-1.webcatalog.io/catalog/masterschool/masterschool-icon-filled-256.png?v=1714781169632",
            content: (

                <div>
                    <p>
                        Supports students of masterschool with their hackathon experience. Support with code and questions.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </div>

            ),
        },
        {
            title: "Career Mentor",
            year
                :
                "Mar 2025 - Now",
            company
                :
                "Masterschool",
            logo: "https://cdn-1.webcatalog.io/catalog/masterschool/masterschool-icon-filled-256.png?v=1714781169632",
            content: (
                <div>
                    <p>
                        Conduct Mock Interviews with masterschool computer science students to evaluate their skill
                        level and needed
                        support.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                </div>

            ),
        },
        {
            title: "UI/UX Designer in Intrapreneurship",
            year:
                "Mar 2025 - Now",
            company:
                "Siemens",
            logo
                :
                "https://images.icon-icons.com/2699/PNG/512/siemens_logo_icon_170741.png",
            content
                :
                (
                    <p>
                        UI/UX Design in innovation management. Create websites for innovation campagnes and hackathons.
                    </p>
                ),
        }
        ,
        {
            title: "Software Engineering Research Intern",
            year
                :
                "Jun 2024 - Oct 2024",
            company
                :
                "Jetbrains",
            logo
                :
                "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/JetBrains_beam_logo.svg/2048px-JetBrains_beam_logo.svg.png",
            content
                :
                (
                    <p>
                        Created a learning platform using svelte to help students learn programming concepts using ai agents.
                    </p>
                ),
        }
        ,
        {
            title: "Campus Ambassador",
            year
                :
                "Aug 2023 - Oct 2024",
            company
                :
                "Jetbrains",
            logo
                :
                "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/JetBrains_beam_logo.svg/2048px-JetBrains_beam_logo.svg.png",
            content: (
                <p>
                    Represent jetbrains at hackathons. Organize events.
                </p>
            ),
        },
        {
            title: "UI/UX Designer",
            year: "Jun 2022 - Aug 2023",
            company: "Toowoxx",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wPUAUZLSH9rLo_WDny_8c0bxgu5ljJx0OQ&s",
            content: (
                <p>
                    Create UI/UX Design as a consultant and make them for other companies.
                </p>
            ),
        },
        {
            title: "UI/UX Designer",
            year: "Jan 2022 - now",
            company: "Freelancing",
            content: (
                <p>
                    Create UI/UX Designs using Figma for clients.
                </p>
            ),
        },
        {
            title: "Research Assistant in IT",
            year: "Oct 2020 - May 2022",
            company: "LMU Melessa",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6IoiJmEif9riJqMCoqjyjFioqJTgp_z06Q&s",
            content: (
                <p>
                    Help with organizing the Office and the computers.
                </p>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
