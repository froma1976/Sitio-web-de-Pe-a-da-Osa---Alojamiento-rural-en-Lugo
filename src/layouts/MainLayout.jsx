
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import AmbientBackground from "@/components/AmbientBackground";
import SchemaOrg from "@/components/SchemaOrg";
import StayPlanner from "@/components/StayPlanner";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AmbientBackground />
      <SchemaOrg />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
      <StayPlanner />
    </div>
  );
}

export default MainLayout;
