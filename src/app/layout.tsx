import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Miami Probate Group | Probate Law Attorneys",
  description: "South Florida probate law specialists. Formal & summary administration, will contests, creditor defense, trust administration. Free case review.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
