interface CardGridProps {
  children: React.ReactNode;
}

export default function CardGrid({ children }: CardGridProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-[50px]">
      {children}
    </ul>
  );
}
