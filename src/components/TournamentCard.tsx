
import { Calendar, Trophy, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TournamentCardProps {
  id: string;
  title: string;
  game: string;
  image: string;
  prize: string;
  date: string;
  time: string;
  playersRegistered: number;
  playersMax: number;
  isHot?: boolean;
}

const TournamentCard = ({
  id,
  title,
  game,
  image,
  prize,
  date,
  time,
  playersRegistered,
  playersMax,
  isHot = false,
}: TournamentCardProps) => {
  return (
    <div className="card-gaming overflow-hidden h-full flex flex-col hover:transform hover:-translate-y-1 transition-all duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-black via-transparent to-transparent"></div>
        
        {isHot && (
          <div className="absolute top-3 right-3 bg-gaming-orange text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
            HOT
          </div>
        )}
        
        <div className="absolute bottom-3 left-3 bg-gaming-dark-purple/80 backdrop-blur-sm rounded px-2 py-1 text-xs">
          {game}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="h-4 w-4 text-gaming-orange" />
          <span className="text-sm text-gaming-orange font-semibold">{prize}</span>
        </div>
        
        <div className="space-y-3 text-sm text-gaming-light-gray mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gaming-light-purple" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gaming-light-purple" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gaming-light-purple" />
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span>{playersRegistered} / {playersMax}</span>
                <span className="text-gaming-light-purple">{Math.round((playersRegistered / playersMax) * 100)}%</span>
              </div>
              <div className="w-full bg-gaming-dark-purple/50 rounded-full h-2">
                <div 
                  className="bg-gaming-light-purple h-2 rounded-full"
                  style={{ width: `${(playersRegistered / playersMax) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <Button className="w-full bg-gaming-dark-purple hover:bg-gaming-purple flex items-center justify-center gap-2 group">
            <span>Register</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
