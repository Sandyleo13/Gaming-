import Toaster from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tournaments from "./pages/Tournaments";
import Games from "./pages/Games";
import TournamentDetails from "./pages/TournamentDetails";
import GameDetails from "./pages/GameDetails";
import Profile from "./pages/Profile";
import CreateTournament from "./pages/CreateTournament";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/tournaments/:id" element={<TournamentDetails />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-tournament" element={<CreateTournament />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
