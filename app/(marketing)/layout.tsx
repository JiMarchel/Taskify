import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <Navbar />
      <main className="pt-40 pb-20 ">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
