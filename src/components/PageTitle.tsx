interface PageTitleProps {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div>
      <h1 className="font-bold text-[44px] mb-4">{title}</h1>
      {description && <p className="text-[#A09F9C]">{description}</p>}
    </div>
  );
}
