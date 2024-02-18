import { Navbar } from "./_components/Navbar";

export const metadata = {
    title: "SEO Title",
    description: "SEO Title",
};
export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {/*Navbar*/}
            <div className="max-w-7xl mx-auto">{children}</div>
            {/* Footer */}
        </div>
    );
}
