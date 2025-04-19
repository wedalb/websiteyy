"use client";

import {
    faGithub,
    faLinkedin,
    faInstagram,
    faYoutube,
    faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
    return (
        <footer className="w-full py-6 mt-12 text-default-500 text-sm">
            <div className="container mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left space-y-1">
                    <p className="text-default-600">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-primary font-medium">Heidi Albarazi</span>
                    </p>
                    <a
                        href="mailto:heidialbarazi2306@gmail.com"
                        className="hover:underline text-primary"
                    >
                        heidialbarazi2306@gmail.com
                    </a>
                </div>

                <div className="flex items-center justify-center gap-4 text-[18px] sm:text-[20px]">
                    <a
                        href="https://www.linkedin.com/in/heidi-a-2a046a165/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        className="hover:text-primary transition-colors"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="https://github.com/wedalb"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        className="hover:text-primary transition-colors"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="https://www.instagram.com/drawingonpluto"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                        className="hover:text-primary transition-colors"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="https://www.youtube.com/@YOUR_CHANNEL"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="YouTube"
                        className="hover:text-primary transition-colors"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a
                        href="https://devpost.com/wedalb"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Devpost"
                        className="hover:text-primary transition-colors"
                    >
                        <FontAwesomeIcon icon={faDev} />
                    </a>
                    <a
                        href="https://heidi-albarazi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Portfolio"
                        className="hover:text-primary transition-colors"
                    >
                        <FontAwesomeIcon icon={faGlobe} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
