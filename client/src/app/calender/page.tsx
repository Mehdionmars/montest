import Calendar from "../(components)/calendar/page";
import { Metadata } from "next";
import DashboardWrapper from "../dashboardWrapper";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const CalendarPage = () => {
  return (
    <DashboardWrapper>
      <Calendar />
    </DashboardWrapper>
  );
};

export default CalendarPage;
