interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return <div className="font-semibold text-[20px] mb-4">{children}</div>;
}
