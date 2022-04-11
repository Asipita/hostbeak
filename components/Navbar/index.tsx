import Logo from "@assets/Logo.svg";
import Notification from "@assets/ic/notification.svg";
import ChevronDown from "@assets/ic/chevron-down.svg";
import { Text } from "@mantine/core";
export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <nav className="w-full bg-[#F9F9F9] flex justify-between px-3 py-4 pr-60">
      <div className="rounded-xl bg-white py-3 px-4 flex gap-4 items-center shadow-md">
        <Logo />
        <span className="text-2xl text-[#3A3A3A]">HostBeak</span>
      </div>

      <div className="flex items-center gap-6">
        <div className=" h-10 w-10 flex items-center justify-center rounded-full border">
          <Notification />
        </div>
        <div className="h-10 w-10 rounded-full bg-[#091E46]"></div>
        <Text className="text-[#091E46]">Ogoluwa</Text>
        <ChevronDown/>
      </div>
    </nav>
  );
}
