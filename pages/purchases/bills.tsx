import { ReactNode } from "react";
import { DatePicker } from "@mantine/dates";
import { Button, Select, Table, TextInput } from "@mantine/core";

import AuthLayout from "@layouts/auth-layout";
import PageLayout from "@layouts/page-layout";

import Write from "@assets/ic/write.svg";
import Delete from "@assets/ic/trash-delete.svg";

export interface IBillsProps {}

export default function Bills(props: IBillsProps) {
  return (
    <PageLayout title="Add Bill">
      <form action="" className=" py-11">
        <div className="grid gap-5 grid-cols-3 grid-rows-3 w-2/3">
          <Select label="Vendor" data={[]} />
          <DatePicker label="Date" />
          <TextInput label="Bill" />

          <Select label="Currency" data={[]} />
          <DatePicker label="Due Date" defaultValue={new Date()} />
          <TextInput
            label="Notes"
            className="row-span-2 h-full"
            classNames={{ wrapper: "h-full", input: "h-full pt-2" }}
          />

          <TextInput label="Upload copy of bill" />
          <TextInput label="Bill" />
        </div>
      </form>

      <Table verticalSpacing="lg" className="w-5/6">
        <thead>
          <tr>
            <th>Item</th>
            <th>Expense Category</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Tax</th>
            <th>Amount</th>
            <th>{""}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="py-2">
            <td>
              <Select data={[]} placeholder="Choose" />
            </td>
            <td>
              <Select data={[]} placeholder="Choose" />
            </td>
            <td>
              <TextInput />
            </td>
            <td>
              <TextInput />
            </td>
            <td>
              <TextInput />
            </td>
            <td>
              <div className="flex gap-2 items-center">
                <TextInput /> <Write />{" "}
              </div>
            </td>
            <td>0.00</td>
            <td>
              <Delete />
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="flex flex-col items-end gap-2 border-t border-t-[#C7CFD6] py-6 pr-20 w-5/6">
          <div className="flex gap-4 flex-end"><span>Sub total:</span><span>N0.00</span></div>
          <div className="flex gap-4 flex-end"><span>Total (NGN):</span><span>N0.00</span></div>

      </div>

      <div className="flex justify-end gap-5 border-t border-t-[#C7CFD6] py-6 w-5/6">
          <Button className="border-[#667085] text-[#667085] hover:bg-transparent" size="md">Cancel</Button>
          <Button className="bg-[#3DB0FF] text-white hover:bg-[#3DB0FF]" size="md">Save</Button>
      </div>
    </PageLayout>
  );
}

Bills.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
