import { SignedIn, SignedOut, SignInButton, UserButton, SignIn, SignUp } from "@clerk/clerk-react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Exercises from "./pages/Exercises";
import Progress from "./pages/Progress";
import NotFound from "./pages/NotFound";
import Tips from "./pages/Tips";
import WordRepition from "./pages/Wordrepition";
import ScenarioTalks from "./pages/ScenarioTalks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <header className="absolute top-4 right-4 z-10">
          <SignedOut>
            
          </SignedOut>
          <SignedIn>
            <UserButton  />
          </SignedIn>
        </header>
        <Routes>
        <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Index />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/ScenarioTalks" element={<ScenarioTalks />} />
          <Route path="/wordrepition" element={<WordRepition />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
