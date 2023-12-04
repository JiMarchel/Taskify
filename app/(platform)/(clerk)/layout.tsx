import { Footer } from "@/app/(marketing)/_components/Footer";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">
      {children}
      <Footer />
    </div>
  );
};

export default ClerkLayout;
