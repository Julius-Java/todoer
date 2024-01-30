"use client";
import { twMerge } from "tailwind-merge";
import { Button } from "@nextui-org/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import useWeeklyCalendar from "@/hooks/useWeeklyCalendar";

export default function WeeklyCalendar() {
    const { currentMonth, currentYear, date, setDate, cells } =
        useWeeklyCalendar();
    return (
        <section className="mt-5">
            <div className="flex items-center justify-between my-1">
                <p className="text-[#101828] text-[0.79631rem] font-medium">
                    {currentMonth} {currentYear}
                </p>
                <div className="flex items-center gap-x-2">
                    <Button
                        variant="flat"
                        size="sm"
                        onClick={() => {
                            // Set date to previous month
                            setDate(
                                new Date(
                                    date.getFullYear(),
                                    date.getMonth() - 1
                                )
                            );
                        }}
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="flat"
                        size="sm"
                        onClick={() => {
                            // Set date to next month
                            setDate(
                                new Date(
                                    date.getFullYear(),
                                    date.getMonth() + 1
                                )
                            );
                        }}
                    >
                        <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div className="flex justify-start items-center gap-x-3 max-w-[1300px] overflow-x-auto py-3">
                {cells.map((cell: any, index) => (
                    <div
                        key={index}
                        className={twMerge(
                            "flex flex-col gap-y-2 justify-around items-center text-gray-500 border border-gray-200 rounded-md py-1 px-3 text-sm ",
                            cell.status &&
                                "bg-[#3F5BF6] text-white font-semibold"
                        )}
                    >
                        {cell.day}
                        <span>{cell.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
