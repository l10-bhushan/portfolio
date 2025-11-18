import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TechStack from "../TechStack/TechStack";

export default function WorkExperience() {
  return (
    <div className="flex flex-col px-10 py-10 gap-2">
      <p className="text-2xl pb-10">Professional History</p>
      <p className="text-lg">Product Engineer - Lead I, UST Global - Pune</p>
      <Accordion
        type="single"
        collapsible
        className="w-full wrap"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">
            <div className="w-full flex justify-between">
              <p>Revin Core - Forecasting</p>
              <p>Jul 2022 - Oct 2025</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <TechStack />
            <p>
              - Microfrontend setup for a new module in a web project using
              Webpack, making it easier to scale and update independently.
              Connected it smoothly with the main system, and created reusable
              components for simpler maintenance.
            </p>
            <p>
              - Designed and implemented a reusable, complex grid structure
              using React.js to seamlessly visualize resource allocation across
              multiple projects.
            </p>
            <p>
              - Developed helper functions to streamline the population of
              accurate values in a complex API request payload for a large-scale
              web application. Simplified data formatting and validation.
            </p>
            <p>
              - Resolved production-level bugs in a web application, ensuring
              smooth functionality and a better user experience.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <p className="text-lg pt-5">
          Software Engineer, Innovation Incubator Advisory - Remote
        </p>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">
            <div className="w-full flex justify-between">
              <p>Revin Core</p>
              <p>Jan 2022 - Jul 2022</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <TechStack />
            <p>
              - Worked as a consultant for UST Global on the Revin Core project,
              contributing to frontend development using React.js. Collaborated
              with cross-functional teams to build user-friendly interfaces,
              integrate API payloads, and ensure seamless data visualization,
              enhancing overall system efficiency and user adoption.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <p className="text-lg pt-5">
          Frontend Web developer, SourceCode Labs - Redacted, Remote{" "}
        </p>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">
            <div className="w-full flex justify-between">
            <p>VMI</p>
            <p>Feb 2020 - Jan 2021</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <TechStack />
            <p>
              - Project focused on a card based structure, where people can add
              small notes.
            </p>
            <p>
              - Implemented a masonary layout to improve the UX and exhibit more
              data within space.
            </p>
            <p> - Implemented node backend to fetch requested data.</p>
            <p>
              - Built a CRON schedule on the backend to delete users that
              requested account deletion.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
