import { Hero } from "app/components/home/Hero";
import { Description } from "app/components/home/Description";
import { ReactNode } from "react";
export default function HomeLayout({children}: {children: ReactNode}) {
    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    );
}