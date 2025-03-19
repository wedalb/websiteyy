import { title } from "@/components/primitives";
import { TimelineDemo } from "@/components/TimelineDemo";

export default function CareerPage() {
    return (
        <div>
            <h1 className={title()}>My Career</h1>
            <TimelineDemo />
        </div>
    );
}
