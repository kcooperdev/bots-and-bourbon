import { Suspense } from "react";
import CheckInScreen from "@/components/screens/CheckInScreen";

export default function Page() {
  return (
    <Suspense>
      <CheckInScreen />
    </Suspense>
  );
}
