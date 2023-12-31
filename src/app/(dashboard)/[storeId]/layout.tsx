import { redirect } from "next/navigation";
import { auth } from '@clerk/nextjs';
import { useRouter } from "next/router";

import Navbar from "@/src/components/navbar";
import prismadb from "@/src/lib/prismadb";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
     
      <Navbar />
      {children}
    </>
  );
}