import { Check, Home } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

const items = [
  {
    title: "Character",
    url: "/",
    icon: Home,
  },
  {
    title: "Selected Character",
    url: "/selected-character",
    icon: Check,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="px-2 py-1">
        <SidebarGroup>
          <div className="mb-2 flex items-center gap-1">
            <ModeToggle />
            <SidebarGroupLabel className="text-sm">
              Dev Different Challenge
            </SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
