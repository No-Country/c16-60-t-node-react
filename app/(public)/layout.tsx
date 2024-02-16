export const metadata = {
    title: "SEO Title",
    description: "SEO Title",
};
export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* Navbar */}
            {children}
            {/* Footer */}
        </div>
    );
}
