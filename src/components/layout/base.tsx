import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../custom/AppSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-5">
        <SidebarTrigger />
        <div className="mt-3">{children}</div>
      </main>
    </SidebarProvider>
  );
}
