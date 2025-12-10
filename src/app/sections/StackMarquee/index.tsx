import Icon from "@/components/Icon";
import PlanetIllustration from "@/components/PlanetIllustration";

const logos = [
  { name: "FaReact", label: "React" },
  { name: "FaNodeJs", label: "Node.js" },
  { name: "FaAws", label: "AWS" },
  { name: "FaGitAlt", label: "Git" },
  { name: "FaDatabase", label: "DB" },
];

export function StackMarquee() {
  return (
    <section
      className="relative border-y overflow-hidden py-16 sm:py-20"
      id="stack"
    >
      <div className="absolute inset-0 grid-line opacity-15" />
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/70 to-background" />
        <div
          className="pointer-events-none absolute top-0 h-[520px] w-[520px] max-w-[90vw] scale-110 opacity-80"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        >
          <PlanetIllustration />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center mx-auto text-center space-y-8">
        <h2 className="text-xl max-w-2xl sm:text-2xl font-bold text-foreground">
          Tecnologia moderna, preparada para crescer junto com o seu negócio.
        </h2>
        <div className="relative flex flex-wrap justify-center gap-6 sm:gap-10">
          {logos.map((logo, idx) => (
            <div key={`${logo.name}-${idx}`}>
              <Icon
                family="FontAwesome6"
                name={logo.name}
                size={48}
                className="text-foreground"
              />
              <span className="sr-only">{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StackMarquee;
