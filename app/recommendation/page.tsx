import { Suspense } from "react";
import RecommendationScreen from "@/components/screens/RecommendationScreen";

export default function Page() {
    return (
        <Suspense>
            <RecommendationScreen />
        </Suspense>
    );
}
