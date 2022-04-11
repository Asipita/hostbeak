import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import { ReactNode } from "react";

export interface IAuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
    return (
        <div className="h-screen flex flex-col bg-[#F9F9F9]">
            <Navbar/>
            <div className="w-full flex flex-grow">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}
