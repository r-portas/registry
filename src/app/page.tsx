import { formatDate, formatTime, formatDateTime } from "@/registry/util/date";
import CenteredLayout from "@/registry/layouts/centered-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Introduction() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl">Registry</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-muted-foreground">
          My custom shadcn/ui registry with reusable components for my Next.js
          projects
        </p>
      </CardContent>
    </Card>
  );
}

function Dates() {
  const now = new Date();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Datetime Helpers</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Short Date: {formatDate(now, "short")}</p>
        <p>Medium Date: {formatDate(now, "medium")}</p>
        <p>Long Date: {formatDate(now, "long")}</p>
        <p>Time: {formatTime(now)}</p>
        <p>Date & Time: {formatDateTime(now)}</p>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <main>
      <CenteredLayout className="flex flex-col gap-4">
        <Introduction />
        <Dates />
      </CenteredLayout>
    </main>
  );
}
