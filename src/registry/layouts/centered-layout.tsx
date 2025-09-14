import { cn } from "@/lib/utils";

export default function CenteredLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl mt-6 px-4", className)}>
      {children}
    </div>
  );
}
