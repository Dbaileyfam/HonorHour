type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? <p className="hh-eyebrow">{eyebrow}</p> : null}
        <h1 className="hh-display mt-4 text-5xl text-white sm:text-7xl md:text-8xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-hh-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
