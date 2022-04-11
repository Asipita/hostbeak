import { Button, Checkbox, Text } from "@mantine/core";
import AuthLayout from "@layouts/auth-layout";
import MessageSquare from "@assets/ic/message-square.svg"
import ViewReport from "@layouts/view-report";
import PageLayout from "@layouts/page-layout";
import { NextPage } from "next";
import { ReactNode } from "react";

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
        <Text size="lg">Dashboard</Text>
  );
}

App.getLayout = function getLayout(page: ReactNode) {
    return (
      <AuthLayout>
        {page}
      </AuthLayout>
    )
  }
