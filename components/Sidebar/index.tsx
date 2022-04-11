import SidebarItem from "./SidebarItem";

// icon imports
import Shuttle from "@assets/ic/shuttle.svg";
import Dashboard from "@assets/ic/dashboard.svg";
import Wallet from "@assets/ic/wallet.svg";
import Accounting from "@assets/ic/accounting.svg";
import Bank from "@assets/ic/bank.svg";
import Payroll from "@assets/ic/invoices.svg";
import Report from "@assets/ic/report.svg";
import Analytics from "@assets/ic/analytics.svg";
import Settings from "@assets/ic/settings.svg";
import PurchaseCollapsed from "@assets/ic/purchase-collapsed.svg";
import Purchase from "@assets/ic/purchase.svg";
import CreditCard from "@assets/ic/credit-card.svg"
import Logout from "@assets/ic/logout.svg"

import { ReactNode } from "react";
import { Button, Text } from "@mantine/core";
import Link from "next/link";

export interface ISidebarProps {}

export interface SidebarElementPropsChildren {
    text: string;
    link: string
}
export interface SidebarElementProps {
    text: string;
    icon: ReactNode;
    collapsible?: boolean;
    link: string;
    navChildren?: Array<SidebarElementPropsChildren>;
    collapsedIcon?: ReactNode
}

export default function Sidebar(props: ISidebarProps) {


  const SidebarElements: Array<SidebarElementProps> = [
    {
      text: "Welcome",
      icon: <Shuttle />,
      link: '#!'
    },
    {
      text: "Dashboard",
      icon: <Dashboard />,
      link: '#!'
    },
    {
      text: "Sales",
      icon: <Wallet />,
      collapsible: true,
      link: '#!'
    },
    {
      text: "Purchases",
      icon: <Purchase />,
      collapsible: true,
      collapsedIcon: <PurchaseCollapsed/>,
      link: '/purchases/bills',
      navChildren: [
        {
          text: "Bills",
          link: "/bills",
        },
        {
          text: "Vendors",
          link: "#!",
        },
        {
          text: "Products & Services",
          link: "#!",
        },
      ]
    },
    {
      text: "Accounting",
      icon: <Accounting />,
      collapsible: true,
      link: '#!'
    },
    {
      text: "Banking",
      icon: <Bank />,
      collapsible: true,
      link: '#!'
    },
    {
      text: "Payroll",
      icon: <Payroll />,
      collapsible: true,
      link: '#!'
    },
    {
      text: "Reports",
      icon: <Report />,
      link: '#!'
    },
    {
      text: "Analytics",
      icon: <Analytics />,
      collapsible: true,
      collapsedIcon: <Analytics/>,
      link: '/analytics/report',
      navChildren: [
        {
          text: "View reports",
          link: "/analytics/report",
        },
        {
          text: "To-do",
          link: "#!",
        },
        {
          text: "Upload docs",
          link: "#!",
        },
        {
          text: "Chat",
          link: "#!",
        },
        {
          text: "Schedule",
          link: "#!",
        },
        {
          text: "Message Board",
          link: "#!",
        },
        {
          text: "Make Payment",
          link: "#!",
        },
      ],
    },
    {
      text: "Settings",
      icon: <Settings />,
      link: '#!'
    },
  ];

  return (
    <aside className="w-[300px] bg-[#F9F9F9] h-full py-6 pr-12 pl-3 flex flex-col justify-between">
      <section className="py-4">
        {SidebarElements.map((element, idx) => (
          <SidebarItem
            key={idx}
            text={element.text}
            icon={element.icon}
            link={element.link}
            collapsible={element.collapsible}
            collapsedIcon={element.collapsedIcon}
            navChildren={element.navChildren}
          />
        ))}
      </section>
            <Link href="/" passHref>
                <div className="flex gap-8 pl-10 py-3 cursor-pointer">
                    <Logout/>
                    <Text>Logout</Text>
                </div>
            </Link>
      <Button size="lg" leftIcon={<CreditCard/>} fullWidth className="bg-[#081494] text-white shadow-md">Accept Payments</Button>
    </aside>
  );
}
