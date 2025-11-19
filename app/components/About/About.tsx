import TechStack from "../TechStack/TechStack";

export default function About() {
  return (
    <div className="flex flex-col px-10 py-10 gap-2">
      <p className="text-3xl pb-7 hero-section">About me</p>
      <p className="text-lg py-2">I'm a Senior Frontend Developer with 6 years of experience building
      scalable web applications using React.js and microfrontends. I specialize
      in creating dynamic, user-focused interfaces with optimized performance
      and modular code design.
      </p>
      <p>Frontend</p>
      <TechStack
        data={{
          onlyIcons: false,
          tech: [
            {
              name: "HTML",
              icon: "/html.svg",
            },
            {
              name: "CSS",
              icon: "/css.svg",
            },
            {
              name: "React.js",
              icon: "/reactjs.svg",
            },
            {
              name: "Typescript",
              icon: "/typescript.svg",
            },
            {
              name: "Tailwindcss",
              icon: "/tailwindcss.svg",
            },
            {
              name: "ShadcnUI",
              icon: "/shadcn.svg",
            },
          ],
        }}
      />
      <p>Backend</p>
      <TechStack
        data={{
          onlyIcons: false,
          tech: [
            {
              name: "Node.js",
              icon: "/nodejs.svg",
            },
            {
              name: "Express",
              icon: "/express.svg",
            },
            {
              name: "Graphql",
              icon: "/graphql.svg",
            },
            {
              name: "Typescript",
              icon: "/typescript.svg",
            },
            {
              name: "Go",
              icon: "/go.svg",
            },
          ],
        }}
      />
      <p>Technology</p>
      <TechStack
        data={{
          onlyIcons: false,
          tech: [
            {
              name: "Git",
              icon: "/git.svg",
            },
            {
              name: "Github",
              icon: "/github.svg",
            },
            {
              name: "Docker",
              icon: "/docker.svg",
            },
            {
              name: "Supabase",
              icon: "/supabase.svg",
            },
            {
              name: "Postgres",
              icon: "/postgres.svg",
            },
          ],
        }}
      />
      {/* <Terminal className="max-w-4xl flex-wrap">
        <AnimatedSpan delay={0}>$ npm install l10-bhushan</AnimatedSpan>
        <TypingAnimation delay={1000} duration={100}>
          Fetching information l10-bhushan...
        </TypingAnimation>
        <AnimatedSpan delay={3000}>
          ✓ Information received successfully
        </AnimatedSpan>
        <AnimatedSpan delay={3500}>$ npm run l10-bhushan</AnimatedSpan>
        <TypingAnimation delay={4500} duration={80}>
          Processing information...
        </TypingAnimation>
        <AnimatedSpan delay={6500}>
          🚀 Server ready at about-me/l10-bhushan
        </AnimatedSpan>
        <AnimatedSpan delay={7500} className="flex-wrap max-w-4xl">
          <div>Hello,</div>
          <div className="flex-wrap">I'm Bhushan, I'm a Senior Frontend Developer</div>
          <div>
            With 6 years of experience building scalable web applications using
            React.js and microfrontends. I specialize in creating dynamic,
            user-focused interfaces with optimized performance and modular code
            design.
          </div>
        </AnimatedSpan>
      </Terminal> */}
    </div>
  );
}
