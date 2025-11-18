"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div className="py-10">
      <p className="text-2xl">Contact</p>
      <p className="text-lg py-5">
        Hey, so you are interested to work with me. Let's connect over a call.
      </p>
      <Cal
        namespace="30min"
        calLink="bhushan-rajput-6kjwu6/15min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
