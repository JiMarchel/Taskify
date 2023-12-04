import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { dark } from "@clerk/themes";
import { ModalProvider } from "@/components/provider/ModalProvider";
import { QueryProvider } from "@/components/provider/QueryProvider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        signIn: { baseTheme: dark },
        signUp: { baseTheme: dark },
      }}
    >
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
