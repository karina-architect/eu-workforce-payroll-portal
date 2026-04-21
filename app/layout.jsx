import "./globals.css";

export const metadata = {
  title: "EuroWorkforce | Hire in Europe without opening entities",
  description:
    "Enterprise-grade workforce funnel for hiring in Europe: payroll, consultant conversion, multilingual lead capture, SEO, and booking-ready structure.",
  keywords: [
    "hire employees in Europe",
    "EOR Europe",
    "payroll services EU",
    "contractor vs employee Europe",
    "freelance compliance EU",
    "IT consultant employment Europe",
    "independent consultant employment contract Europe"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}