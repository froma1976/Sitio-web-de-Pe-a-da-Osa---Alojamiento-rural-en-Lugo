
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import AmbientBackground from "@/components/AmbientBackground";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AmbientBackground />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default MainLayout;
