/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import WeeklyCalendar from "@/components/weekly-calendar";

export default function Home() {
    return (
        <main className="container px-6 pt-5">
            <h1 className="font-bold text-xl">Good morning</h1>
            <p className="text-[#475467] text-sm font-workSans">
                You've got some tasks to do
            </p>
            <WeeklyCalendar />
        </main>
    );
}
