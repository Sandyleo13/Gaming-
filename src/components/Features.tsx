
import { Trophy, Users, Shield, BarChart, Zap, Gift } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="card-gaming p-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gaming-light-purple bg-opacity-10 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gaming-light-gray">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: <Trophy className="h-8 w-8 text-gaming-light-purple" />,
    title: "Competitive Tournaments",
    description: "Join tournaments across various skill levels and win prizes in your favorite games."
  },
  {
    icon: <Users className="h-8 w-8 text-gaming-light-purple" />,
    title: "Community Building",
    description: "Connect with other gamers, form teams, and build your gaming network."
  },
  {
    icon: <Shield className="h-8 w-8 text-gaming-light-purple" />,
    title: "Anti-Cheat Protection",
    description: "All tournaments are monitored to ensure fair play and prevent cheating."
  },
  {
    icon: <BarChart className="h-8 w-8 text-gaming-light-purple" />,
    title: "Statistics & Rankings",
    description: "Track your performance with detailed statistics and climb global leaderboards."
  },
  {
    icon: <Zap className="h-8 w-8 text-gaming-light-purple" />,
    title: "Seamless Experience",
    description: "Easy registration, match scheduling, and result reporting all in one place."
  },
  {
    icon: <Gift className="h-8 w-8 text-gaming-light-purple" />,
    title: "Valuable Prizes",
    description: "Win cash prizes, gaming gear, and exclusive in-game items across competitions."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gaming-dark-purple/10 via-transparent to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">
          Platform <span className="text-gradient">Features</span>
        </h2>
        <p className="section-subtitle text-center">
          Discover what makes GameON Universe the ultimate destination for competitive gaming
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
