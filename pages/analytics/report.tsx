import AuthLayout from "@layouts/auth-layout";
import PageLayout from "@layouts/page-layout";
import ViewReport from "@layouts/view-report";
import { ReactNode } from "react";

export interface IReportProps {}

export default function Report(props: IReportProps) {
  return (
    <PageLayout title="View Reports">
      <ViewReport />
    </PageLayout>
  );
}

Report.getLayout = function getLayout(page: ReactNode) {
    return (
      <AuthLayout>
        {page}
      </AuthLayout>
    )
  }