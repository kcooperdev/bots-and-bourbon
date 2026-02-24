import { Suspense } from "react";
import CheckInScreen from "@/components/screens/CheckInScreen";

export const metadata = {
  title: "Check In — Bots & Bourbon Experience",
  description: "Scan your ticket to check in to the Bots & Bourbon Experience.",
};

export default function CheckInPage() {
  return (
    <Suspense>
      <CheckInScreen />
    </Suspense>
  );
}
