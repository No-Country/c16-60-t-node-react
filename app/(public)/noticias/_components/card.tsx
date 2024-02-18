import { cn } from "@/lib/utils";

interface CardProps {
    title: string;
    className?: string;
}

export const card = ({ title, className }: CardProps) => {
    return <div className={cn("px-2 bg-white", className)}>card</div>;
};
