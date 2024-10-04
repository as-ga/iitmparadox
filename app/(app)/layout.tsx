import React from "react";
import Header from "@/components/header";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <div className="mt-24"></div>
      {children}
    </>
  );
}
export default AppLayout;
