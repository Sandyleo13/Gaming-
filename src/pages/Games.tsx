
import Navbar from '@/components/Navbar';
import GameCategories from '@/components/GameCategories';
import Footer from '@/components/Footer';

const Games = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Game</span> Categories
          </h1>
          <p className="text-lg text-gaming-light-gray max-w-3xl">
            Browse all available games on our platform. Each game features its own tournaments, leaderboards, and community.
          </p>
        </div>
      </div>
      
      <GameCategories showHeading={false} />
      <Footer />
    </div>
  );
};

export default Games;
