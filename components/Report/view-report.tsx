import * as React from "react";
import MessageSquare from "@assets/ic/message-square.svg"
import { Button, Checkbox, Text } from "@mantine/core";
export interface IListItemProps {
    title: string,
    date: string,
}

export function ListItem({title, date}: IListItemProps) {
  return (
    <div className="flex items-center gap-8 border-b border-b-[#E1E1E1] py-3">
      <Checkbox />
      <Text className="text-[#304156] font-medium basis-40">{title}</Text>
      <Text className="mx-auto text-[#667085]">{date}</Text>
      <Button className="bg-[#3DB0FF] ml-auto px-4">View</Button>
      <MessageSquare />
    </div>
  );
}
