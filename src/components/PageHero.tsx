type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl text-center">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-hh-red">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="hh-display mt-3 text-5xl text-white sm:text-7xl">{title}</h1>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-hh-silver">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
