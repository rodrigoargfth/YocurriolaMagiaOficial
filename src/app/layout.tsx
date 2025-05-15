import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "YOcurrioLaMagia",
  description: "Por Yamila Aranda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
