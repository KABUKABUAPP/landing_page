import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import RideWithUs from "./pages/RideWithUs";
import DriveWithUs from "./pages/DriveWithUs";
import DriveForUs from "./pages/DriveForUs";
import About from "./pages/About";
import Support from "./pages/Support";
import SupportCategory from "./pages/SupportCategory";
import SupportArticle from "./pages/SupportArticle";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ride-with-us" element={<RideWithUs />} />
            <Route path="/drive-with-us" element={<DriveWithUs />} />
            <Route path="/drive-for-us" element={<DriveForUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/support/:category" element={<SupportCategory />} />
            <Route path="/support/:category/article" element={<SupportArticle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
