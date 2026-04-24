interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  accentColor: "cyan" | "gold" | "lime";
}

const colorMap = {
  cyan: {
    border: "border-cyan",
    text: "text-cyan",
  },
  gold: {
    border: "border-gold",
    text: "text-gold",
  },
  lime: {
    border: "border-lime",
    text: "text-lime",
  },
};

export default function FeatureCard({
  icon,
  title,
  description,
  accentColor,
}: FeatureCardProps) {
  const colors = colorMap[accentColor];

  return (
    <div className="flex items-start gap-5 rounded-2xl bg-white/[0.03] p-5">
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 ${colors.border} text-2xl`}
      >
        {icon}
      </div>
      <div>
        <h3 className={`mb-1 font-semibold ${colors.text}`}>{title}</h3>
        <p className="text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
