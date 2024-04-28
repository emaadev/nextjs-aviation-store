import AdminLayout from "@/components/admin/AdminLayout";

import "../globals.css";

export const metadata = {
  title: "Admin Dashboard for ISEAP's Store",
  description: "These are the admin pages for the ISEAP Store.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}
