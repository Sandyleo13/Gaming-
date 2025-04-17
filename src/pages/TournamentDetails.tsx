
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Trophy, Users, Clock, ShareIcon, BookmarkIcon, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TournamentDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we would fetch tournament data based on the ID
  const tournament = {
    id: id || '1',
    title: 'Apex Legends Global Series',
    game: 'Apex Legends',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    prize: '₹7,50,000',
    date: 'Apr 20, 2025',
    time: '6:00 PM IST',
    playersRegistered: 85,
    playersMax: 100,
    format: 'Battle Royale - Squads',
    description: 'Join the biggest Apex Legends tournament in India! Compete with the best players from across the country and win amazing prizes.',
    rules: [
      'Players must be at least 16 years old',
      'Teams must consist of exactly 3 players',
      'All players must use the tournament client',
      'Communication via Discord is mandatory',
      'Streaming is allowed but with a 2-minute delay'
    ],
    schedule: [
      { phase: 'Registration Deadline', time: 'Apr 19, 2025 - 11:59 PM IST' },
      { phase: 'Check-in', time: 'Apr 20, 2025 - 5:00 PM IST' },
      { phase: 'Tournament Start', time: 'Apr 20, 2025 - 6:00 PM IST' },
      { phase: 'Finals', time: 'Apr 20, 2025 - 9:00 PM IST' }
    ],
    prizes: [
      { rank: '1st Place', amount: '₹3,75,000' },
      { rank: '2nd Place', amount: '₹1,87,500' },
      { rank: '3rd Place', amount: '₹93,750' },
      { rank: '4th-10th Place', amount: '₹13,250 each' }
    ]
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-8 rounded-xl overflow-hidden h-64 md:h-80">
            <img 
              src={tournament.image} 
              alt={tournament.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gaming-black via-gaming-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="bg-gaming-dark-purple/80 text-white text-xs font-medium px-2.5 py-1 rounded inline-block mb-3">
                {tournament.game}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{tournament.title}</h1>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full grid grid-cols-4 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="rules">Rules</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="prizes">Prizes</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="card-gaming p-6">
                  <h2 className="text-xl font-bold mb-4">Tournament Details</h2>
                  <p className="text-gaming-light-gray mb-6">{tournament.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="text-gaming-light-purple h-5 w-5 mt-0.5" />
                      <div>
                        <p className="text-sm text-gaming-light-gray">Date</p>
                        <p className="font-medium">{tournament.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="text-gaming-light-purple h-5 w-5 mt-0.5" />
                      <div>
                        <p className="text-sm text-gaming-light-gray">Time</p>
                        <p className="font-medium">{tournament.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Trophy className="text-gaming-light-purple h-5 w-5 mt-0.5" />
                      <div>
                        <p className="text-sm text-gaming-light-gray">Prize Pool</p>
                        <p className="font-medium">{tournament.prize}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="text-gaming-light-purple h-5 w-5 mt-0.5" />
                      <div>
                        <p className="text-sm text-gaming-light-gray">Format</p>
                        <p className="font-medium">{tournament.format}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="rules" className="card-gaming p-6">
                  <h2 className="text-xl font-bold mb-4">Tournament Rules</h2>
                  <ul className="list-disc list-inside space-y-2 text-gaming-light-gray">
                    {tournament.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="schedule" className="card-gaming p-6">
                  <h2 className="text-xl font-bold mb-4">Event Schedule</h2>
                  <div className="space-y-4">
                    {tournament.schedule.map((item, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-gaming-dark-purple/30">
                        <p className="font-medium">{item.phase}</p>
                        <p className="text-gaming-light-gray">{item.time}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="prizes" className="card-gaming p-6">
                  <h2 className="text-xl font-bold mb-4">Prize Distribution</h2>
                  <div className="space-y-4">
                    {tournament.prizes.map((prize, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gaming-dark-purple/30">
                        <p className="font-medium">{prize.rank}</p>
                        <p className="text-gaming-orange font-bold">{prize.amount}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <div className="card-gaming p-6 mb-6">
                <h3 className="font-bold mb-4">Registration</h3>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-gaming-light-purple" />
                    <div className="w-full">
                      <div className="flex justify-between mb-1">
                        <span>{tournament.playersRegistered} / {tournament.playersMax}</span>
                        <span className="text-gaming-light-purple">{Math.round((tournament.playersRegistered / tournament.playersMax) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gaming-dark-purple/50 rounded-full h-2">
                        <div 
                          className="bg-gaming-light-purple h-2 rounded-full"
                          style={{ width: `${(tournament.playersRegistered / tournament.playersMax) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gaming-light-gray">Only {tournament.playersMax - tournament.playersRegistered} slots remaining!</p>
                </div>
                
                <Button className="w-full bg-gaming-light-purple hover:bg-gaming-purple mb-3">
                  Register Now
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 gap-2">
                    <BookmarkIcon className="h-4 w-4" />
                    <span>Save</span>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <ShareIcon className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
              </div>
              
              <div className="bg-gaming-orange/10 border border-gaming-orange/20 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-gaming-orange mt-1" />
                <div>
                  <p className="font-medium text-gaming-orange">Important Notice</p>
                  <p className="text-sm text-gaming-light-gray">All participants must complete check-in 60 minutes before the tournament start time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TournamentDetails;
