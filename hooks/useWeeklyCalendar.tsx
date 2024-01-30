"use client";
import { useState } from "react";

export default function useWeeklyCalendar() {
    const currentDate = new Date(); // Current date and time
    const [date, setDate] = useState(currentDate); // Save current date to state

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
    }).format(currentDate);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let cells = [];

    let currentMonthEndDate = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    let prevMonthEndDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    let currentMonth = months[date.getMonth()];

    let currentYear = date.getFullYear();

    for (let j = 1; j <= currentMonthEndDate; j++) {
        let objData = {};

        let statusColor;

        let dayDate = new Date(currentYear, date.getMonth(), j);
        let currentDate = new Date();

        if (currentDate.toDateString() === dayDate.toDateString()) {
            statusColor = true;
        } else {
            statusColor = false;
        }

        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Get index of day of the week
        const dayOfWeekIndex = dayDate.getDay();

        const dayOfWeek = daysOfWeek[dayOfWeekIndex];

        objData = { date: j, day: dayOfWeek, status: statusColor };

        cells.push(objData);
    }

    return {
        currentMonth,
        currentYear,
        date,
        setDate,
        cells,
    };
}
