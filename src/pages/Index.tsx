
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TournamentList from '@/components/TournamentList';
import GameCategories from '@/components/GameCategories';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TournamentList />
      <GameCategories />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
