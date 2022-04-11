import { ListItem } from "@components/Report";
import * as React from "react";

export interface IViewReportProps {}

export default function ViewReport(props: IViewReportProps) {
    const items = [
        {
            title: 'February Report',
            date: '4th , October 2021 11:20am'
        },{
            title: 'March Report',
            date: '4th , October 2021 11:20am'
        },{
            title: 'March Report',
            date: '4th , October 2021 11:20am'
        },{
            title: 'March Report',
            date: '4th , October 2021 11:20am'
        },{
            title: 'March Report',
            date: '4th , October 2021 11:20am'
        },{
            title: 'March Report',
            date: '4th , October 2021 11:20am'
        },{
            title: 'March Report',
            date: '4th , October 2021 11:20am'
        },{
            title: 'March Report',
            date: '4th , October 2021 11:20am'
        },{
            title: 'March Report',
            date: '4th , October 2021 11:20am'
        },{
            title: 'February Report',
            date: '4th , October 2021 11:20am'
        },
    ]
    return (
    <section className="p-4">
        {items.map((item, idx)=> <ListItem key={idx} title={item.title} date={item.date}/>)}
    </section>
  );
}
