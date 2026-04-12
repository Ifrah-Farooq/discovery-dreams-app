interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
}

const PageBanner = ({ title, subtitle, image, breadcrumb }: PageBannerProps) => (
  <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
    <div className="relative container mx-auto px-4 pb-10">
      {breadcrumb && (
        <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-2">
          Home &rsaquo; {breadcrumb}
        </p>
      )}
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">{title}</h1>
      {subtitle && <p className="text-white/70 text-sm md:text-base max-w-xl">{subtitle}</p>}
    </div>
  </section>
);

export default PageBanner;
