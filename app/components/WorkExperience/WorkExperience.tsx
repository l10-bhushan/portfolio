import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WorkExperience() {
  return (
    <div className="flex flex-col items-center px-10 py-10 gap-2">
      <p className="text-4xl pb-10">Professional History</p>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            Product Engineer - Lead I, UST Global - Pune{" "}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Revin Core - Forecasting</p>
            <ul className="list-disc">
              <li>
                Microfrontend setup for a new module in a web project using
                Webpack, making it easier to scale and update independently.
                Connected it smoothly with the main system, and created reusable
                components for simpler maintenance.
              </li>
              <li>
                Designed and implemented a reusable, complex grid structure
                using React.js to seamlessly visualize resource allocation
                across multiple projects.
              </li>
              <li>
                Developed helper functions to streamline the population of
                accurate values in a complex API request payload for a
                large-scale web application. Simplified data formatting and
                validation.
              </li>
              <li>
                Resolved production-level bugs in a web application, ensuring
                smooth functionality and a better user experience.
              </li>
            </ul>
            <p>Deluxe Ltd.</p>
            <ul className="list-decimal">
              <li>
                Led the development of a new module for a web application using
                React.js, guiding the team to build a user-friendly feature from
                scratch. Coordinated tasks, ensured smooth integration with
                existing systems, and delivered the module on time.
              </li>
              <li>
                Designed a JavaScript Web Worker to handle resource-intensive
                calculation tasks on a separate thread, improving application
                performance by offloading complex computations on the main
                thread.
              </li>
              <li>
                Managed on-call responsibilities, swiftly resolving critical bug
                fixes and application build issues in a React.js-based web
                application.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            {" "}
            <p>Software Engineer, Innovation Incubator Advisory - Remote</p>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Worked as a consultant for UST Global on the Revin Core project,
              contributing to frontend development using React.js. Collaborated
              with cross-functional teams to build user-friendly interfaces,
              integrate API payloads, and ensure seamless data visualization,
              enhancing overall system efficiency and user adoption.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <p className="text-lg">
              Frontend Web developer, SourceCode Labs - Redacted, Remote{" "}
            </p>{" "}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>VMI</p>
            <ul>
              <li>
                Project focused on a card based structure, where people can add
                small notes.
              </li>
              <li>
                Implemented a masonary layout to improve the UX and exhibit more
                data within space.
              </li>
              <li>Implemented node backend to fetch requested data.</li>
              <li>
                Built a CRON schedule on the backend to delete users that
                requested account deletion.
              </li>
            </ul>   
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
