
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Commercial from "./pages/Commercial";
import ServiceAreas from "./pages/ServiceAreas";
import SantaBarbara from "./pages/SantaBarbara";
import Montecito from "./pages/Montecito";
import ThousandOaks from "./pages/ThousandOaks";
import Oxnard from "./pages/Oxnard";
import Camarillo from "./pages/Camarillo";
import Ventura from "./pages/Ventura";
import Ojai from "./pages/Ojai";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/santa-barbara" element={<SantaBarbara />} />
          <Route path="/montecito" element={<Montecito />} />
          <Route path="/thousand-oaks" element={<ThousandOaks />} />
          <Route path="/oxnard" element={<Oxnard />} />
          <Route path="/camarillo" element={<Camarillo />} />
          <Route path="/ventura" element={<Ventura />} />
          <Route path="/ojai" element={<Ojai />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
