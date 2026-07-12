type SectionTitleProps = {
  subtitle?: string
  title: string
  description?: string
  center?: boolean
}

export function SectionTitle({
  subtitle,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {subtitle && (
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-hospital-green">
          {subtitle}
        </span>
      )}

      <h2 className="mt-3 text-3xl font-bold leading-tight text-hospital-dark md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-hospital-text">
          {description}
        </p>
      )}
    </div>
  )
}