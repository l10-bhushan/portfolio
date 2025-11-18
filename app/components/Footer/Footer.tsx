import { PAGE } from "@/lib/utils";
import SocialMediaSection from "../SocialMediaSection/SocialMediaSection";

export default function Footer() {
    return(
        <div className="flex justify-between items-center pt-5">
            <div>
            <p className="text-sm text-gray-400">&#169; 2025 / L1O-Bhushan </p>
            </div>
            <div>
            <SocialMediaSection
                footer={true}
             />
            </div>
        </div>
    )
}