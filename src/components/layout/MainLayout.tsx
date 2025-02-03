const maxWidthVariants = {
  "720": "max-w-720",
  "900": "max-w-900",
  "1100": "max-w-1100",
};

const MainLayout = ({
  children,
  maxWidth,
}: {
  children: React.ReactNode;
  maxWidth: keyof typeof maxWidthVariants;
}) => {
  return (
    <main className="w-full">
      <div className="my-header mx-auto">
        <div
          className={`${maxWidthVariants[maxWidth]} pt-12 mx-auto text-text-primary`}
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
