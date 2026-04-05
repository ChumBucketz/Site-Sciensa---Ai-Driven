import { ReactNode } from "react";

interface CardGridProps {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}

export function CardGrid({ children, cols = 3, className = "" }: CardGridProps) {
  const colClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${colClasses[cols]} gap-4 ${className}`}>
      {children}
    </div>
  );
}

export function Card({
  children,
  className = "",
  large = false,
}: {
  children: ReactNode;
  className?: string;
  large?: boolean;
}) {
  return (
    <div className={`el-card${large ? "-lg" : ""} bg-white p-7 ${className}`}>
      {children}
    </div>
  );
}
