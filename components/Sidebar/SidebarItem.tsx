import * as React from "react";
import ChevronRight from "@assets/ic/chevron-right.svg";
import ChevronDown from "@assets/ic/chevron-down.svg";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { SidebarElementProps } from ".";

export default function SidebarItem({
  text,
  link,
  icon,
  collapsible,
  navChildren,
  collapsedIcon,
}: SidebarElementProps) {
  const router = useRouter();
  // a more complex function will be needed in the future, but this should suffice for now
  function isActive(link: string): boolean {
    return router.asPath.includes(link);
  }

  function shouldCollapse(): boolean {
    return router.asPath.includes(text.toLowerCase());
  }

  return (
    <div className="flex gap-4 items-center text-lg text-[#C4C4C4] pl-8 pr-2 py-3 cursor-pointer">
      <div
        className={clsx(
          shouldCollapse() ? "bg-[#081494] rounded-full w-12 h-12" : "",
          "basis-12 w-10 flex justify-center items-center self-start"
        )}
      >
        {shouldCollapse() ? collapsedIcon : icon}
      </div>
      <div className="flex-grow flex items-center justify-between">
        <div className="flex-grow">
          <section className="flex flex-col gap-2">
            <Link href={link} passHref>
              <span
                className={clsx(
                  shouldCollapse() && "text-black",
                  "hover:text-[#888888]"
                )}
              >
                {text}
              </span>
            </Link>
            {shouldCollapse() &&
              navChildren &&
              navChildren.map((child, idx) => (
                <Link key={idx} href="" passHref>
                  <span
                    className={clsx(
                      isActive(child.link) && "text-[#081494]",
                      "text-sm py-1",
                      !isActive(child.link) && "hover:text-[#081494]"
                    )}
                  >
                    {child.text}
                  </span>
                </Link>
              ))}
          </section>
        </div>
        {collapsible && (
          <div className="self-start my-2">
            {shouldCollapse() ? <ChevronDown /> : <ChevronRight />}
          </div>
        )}
      </div>
    </div>
  );
}
