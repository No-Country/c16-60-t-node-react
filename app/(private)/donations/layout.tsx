export const metadata = {
  title: "Donations Page",
  description: "Donaciones para las distintas causas",
};
export default function DonationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-50">
      <div className="max-w-screen-xl mx-auto ">{children}</div>
    </div>
  );
}
