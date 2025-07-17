
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";
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
import Summerland from "./pages/Summerland";
import Carpinteria from "./pages/Carpinteria";
import PortHueneme from "./pages/PortHueneme";
import NewburyPark from "./pages/NewburyPark";
import WestlakeVillage from "./pages/WestlakeVillage";
import SantaPaula from "./pages/SantaPaula";
import ThousandOaksMoveOut from "./pages/ThousandOaksMoveOut";
import ThousandOaksPostConstruction from "./pages/ThousandOaksPostConstruction";
import VenturaPostConstruction from "./pages/VenturaPostConstruction";
import VenturaMoveOut from "./pages/VenturaMoveOut";
import CamarilloMoveOut from "./pages/CamarilloMoveOut";
import WestlakeVillageMoveOut from "./pages/WestlakeVillageMoveOut";
import SantaBarbaraMoveOut from "./pages/SantaBarbaraMoveOut";
import OjaiMoveOut from "./pages/OjaiMoveOut";
import OjaiPostConstruction from "./pages/OjaiPostConstruction";
import OxnardMoveOut from "./pages/OxnardMoveOut";
import OxnardPostConstruction from "./pages/OxnardPostConstruction";
import SantaPaulaMoveOut from "./pages/SantaPaulaMoveOut";
import SantaPaulaPostConstruction from "./pages/SantaPaulaPostConstruction";
import { CarpinteriaMoveOut } from "./pages/CarpinteriaMoveOut";
import CamarilloPostConstruction from "./pages/CamarilloPostConstruction";
import WestlakeVillagePostConstruction from "./pages/WestlakeVillagePostConstruction";
import SantaBarbaraPostConstruction from "./pages/SantaBarbaraPostConstruction";
import ThankYou from "./pages/ThankYou";
import ContactThankYou from "./pages/ContactThankYou";
import NotFound from "./pages/NotFound";
import RegularHouseCleaning from "./pages/services/RegularHouseCleaning";
import DeepCleaning from "./pages/services/DeepCleaning";
import MoveInMoveOut from "./pages/services/MoveInMoveOut";
import PostConstruction from "./pages/services/PostConstruction";
import CommercialCleaning from "./pages/services/CommercialCleaning";
import VacationRental from "./pages/services/VacationRental";
import Services from "./pages/Services";
import Book from "./pages/Book";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/santa-barbara" element={<SantaBarbara />} />
          <Route path="/montecito" element={<Montecito />} />
          <Route path="/thousand-oaks" element={<ThousandOaks />} />
          <Route path="/oxnard" element={<Oxnard />} />
          <Route path="/camarillo" element={<Camarillo />} />
          <Route path="/ventura" element={<Ventura />} />
          <Route path="/ojai" element={<Ojai />} />
          <Route path="/summerland" element={<Summerland />} />
          <Route path="/carpinteria" element={<Carpinteria />} />
          <Route path="/port-hueneme" element={<PortHueneme />} />
          <Route path="/newbury-park" element={<NewburyPark />} />
          <Route path="/westlake-village" element={<WestlakeVillage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/contact-thank-you" element={<ContactThankYou />} />
          {/* Service Routes */}
          <Route path="/services/regular-house-cleaning" element={<RegularHouseCleaning />} />
          <Route path="/services/deep-cleaning" element={<DeepCleaning />} />
          <Route path="/services/move-in-move-out" element={<MoveInMoveOut />} />
          <Route path="/services/post-construction" element={<PostConstruction />} />
          <Route path="/services/commercial-cleaning" element={<CommercialCleaning />} />
          <Route path="/services/vacation-rental" element={<VacationRental />} />
          {/* Location-specific service routes */}
          <Route path="/thousand-oaks/move-out-cleaning" element={<ThousandOaksMoveOut />} />
          <Route path="/thousand-oaks/post-construction-cleaning" element={<ThousandOaksPostConstruction />} />
          <Route path="/ventura/move-out-cleaning" element={<VenturaMoveOut />} />
          <Route path="/ventura/post-construction-cleaning" element={<VenturaPostConstruction />} />
          <Route path="/camarillo/move-out-cleaning" element={<CamarilloMoveOut />} />
          <Route path="/camarillo/post-construction-cleaning" element={<CamarilloPostConstruction />} />
          <Route path="/westlake-village/post-construction-cleaning" element={<WestlakeVillagePostConstruction />} />
          <Route path="/santa-barbara/post-construction-cleaning" element={<SantaBarbaraPostConstruction />} />
        <Route path="/westlake-village/move-out-cleaning" element={<WestlakeVillageMoveOut />} />
        <Route path="/santa-barbara/move-out-cleaning" element={<SantaBarbaraMoveOut />} />
          <Route path="/ojai/move-out-cleaning" element={<OjaiMoveOut />} />
          <Route path="/ojai/post-construction-cleaning" element={<OjaiPostConstruction />} />
          <Route path="/oxnard/move-out-cleaning" element={<OxnardMoveOut />} />
          <Route path="/oxnard/post-construction-cleaning" element={<OxnardPostConstruction />} />
        <Route path="/santa-paula" element={<SantaPaula />} />
        <Route path="/santa-paula/move-out-cleaning" element={<SantaPaulaMoveOut />} />
        <Route path="/santa-paula/post-construction-cleaning" element={<SantaPaulaPostConstruction />} />
        <Route path="/carpinteria/move-out-cleaning" element={<CarpinteriaMoveOut />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
