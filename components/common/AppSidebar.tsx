"use client"
import * as React from "react";

import logo from "@/assets/images/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

type SubMenuItem = {
  title: string;
  url: string;
  isActive?: boolean;
};

type MenuItem = {
    title: string;
    url: string;
    items: SubMenuItem[]
}

type MenuData = {
    versions: string[];
    navMain: MenuItem[]
}
// This is sample data.
const data: MenuData = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Main",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
          isActive: true,
        },
      ],
    },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Products",
          url: "/product-list",
        },
        {
          title: "Order",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "App Settings",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex justify-center items-center">
        <Image src={logo} alt="logo" width={100} height={100} />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item: MenuItem) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item:SubMenuItem) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
