import { ReactNode } from "react";

export interface IPageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function PageLayout({ title, children }: IPageLayoutProps) {
  return (
    <main className="p-8 bg-white flex-grow">
      <header className="text-3xl font-bold">{title}</header>
      {children}
    </main>
  );
}
