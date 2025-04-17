
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Medal, Calendar, Gamepad, ArrowUpRight } from 'lucide-react';

const Profile = () => {
  // Mock user data
  const user = {
    username: 'ProGamer123',
    name: 'Raj Sharma',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    joinDate: 'January 2024',
    totalWinnings: '₹1,87,500',
    participatedTournaments: 32,
    wonTournaments: 8,
    bio: 'Competitive gamer since 2018. Main games: Apex Legends, Valorant. Looking for a team to compete in upcoming tournaments.',
    recentResults: [
      { tournament: 'Apex Legends Weekly Cup', placement: '1st Place', prize: '₹37,500', date: 'Apr 10, 2025' },
      { tournament: 'Valorant Community Challenge', placement: '3rd Place', prize: '₹15,000', date: 'Mar 28, 2025' },
      { tournament: 'Fortnite Weekend Battle', placement: '5th Place', prize: '₹7,500', date: 'Mar 15, 2025' }
    ],
    upcomingTournaments: [
      { tournament: 'Apex Legends Global Series', game: 'Apex Legends', date: 'Apr 20, 2025' },
      { tournament: 'Valorant Champions Tour', game: 'Valorant', date: 'Apr 30, 2025' }
    ],
    achievements: [
      { title: 'Tournament Champion', description: 'Won first place in a major tournament', icon: 'Trophy' },
      { title: 'Consistent Competitor', description: 'Participated in 30+ tournaments', icon: 'Medal' },
      { title: 'Rising Star', description: 'Achieved top 10 in a national ranking', icon: 'Star' }
    ]
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="card-gaming p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <img 
                  src={user.avatar} 
                  alt={user.username} 
                  className="w-32 h-32 rounded-full object-cover border-4 border-gaming-light-purple/30"
                />
                <div className="absolute -bottom-2 -right-2 bg-gaming-light-purple text-white text-xs font-bold px-2 py-1 rounded">
                  PRO
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold">{user.username}</h1>
                <p className="text-gaming-light-gray">{user.name}</p>
                <p className="text-sm text-gaming-light-gray mt-1">Member since {user.joinDate}</p>
                
                <p className="text-gaming-light-gray mt-4">{user.bio}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                  <Button size="sm" className="bg-gaming-light-purple hover:bg-gaming-purple">
                    Edit Profile
                  </Button>
                  <Button size="sm" variant="outline">
                    Share Profile
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-row md:flex-col gap-6 md:gap-4 md:border-l md:border-gaming-purple/20 md:pl-6">
                <div className="text-center">
                  <p className="text-gaming-light-gray text-sm">Total Winnings</p>
                  <p className="text-xl md:text-2xl font-bold text-gaming-orange">{user.totalWinnings}</p>
                </div>
                
                <div className="text-center">
                  <p className="text-gaming-light-gray text-sm">Tournaments Won</p>
                  <p className="text-xl md:text-2xl font-bold">{user.wonTournaments}/{user.participatedTournaments}</p>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="stats" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="stats" className="card-gaming p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Trophy className="h-5 w-5 text-gaming-light-purple mr-2" />
                Recent Results
              </h2>
              
              <div className="space-y-4 mb-8">
                {user.recentResults.map((result, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-gaming-dark-purple/30">
                    <div>
                      <p className="font-medium">{result.tournament}</p>
                      <p className="text-sm text-gaming-light-gray">{result.date}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 sm:mt-0">
                      <p className="text-sm">{result.placement}</p>
                      <p className="text-gaming-orange font-bold">{result.prize}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Calendar className="h-5 w-5 text-gaming-light-purple mr-2" />
                Upcoming Tournaments
              </h2>
              
              <div className="space-y-4">
                {user.upcomingTournaments.map((tournament, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gaming-dark-purple/30">
                    <div>
                      <p className="font-medium">{tournament.tournament}</p>
                      <div className="flex items-center text-sm text-gaming-light-gray">
                        <Gamepad className="h-4 w-4 mr-1" />
                        <span>{tournament.game}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm">{tournament.date}</p>
                      <Button size="sm" variant="outline" className="flex items-center gap-1 h-8">
                        <span>Details</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tournaments" className="card-gaming p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Tournament History</h2>
                <Button size="sm" variant="outline">View All</Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-left border-b border-gaming-purple/20">
                    <tr>
                      <th className="pb-3">Tournament</th>
                      <th className="pb-3">Game</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3">Placement</th>
                      <th className="pb-3">Prize</th>
                    </tr>
                  </thead>
                  <tbody className="text-gaming-light-gray">
                    <tr className="border-b border-gaming-purple/10">
                      <td className="py-3">Apex Legends Weekly Cup</td>
                      <td className="py-3">Apex Legends</td>
                      <td className="py-3">Apr 10, 2025</td>
                      <td className="py-3 text-white">1st Place</td>
                      <td className="py-3 text-gaming-orange">₹37,500</td>
                    </tr>
                    <tr className="border-b border-gaming-purple/10">
                      <td className="py-3">Valorant Community Challenge</td>
                      <td className="py-3">Valorant</td>
                      <td className="py-3">Mar 28, 2025</td>
                      <td className="py-3 text-white">3rd Place</td>
                      <td className="py-3 text-gaming-orange">₹15,000</td>
                    </tr>
                    <tr className="border-b border-gaming-purple/10">
                      <td className="py-3">Fortnite Weekend Battle</td>
                      <td className="py-3">Fortnite</td>
                      <td className="py-3">Mar 15, 2025</td>
                      <td className="py-3 text-white">5th Place</td>
                      <td className="py-3 text-gaming-orange">₹7,500</td>
                    </tr>
                    <tr className="border-b border-gaming-purple/10">
                      <td className="py-3">Call of Duty Warzone Showdown</td>
                      <td className="py-3">Call of Duty</td>
                      <td className="py-3">Mar 5, 2025</td>
                      <td className="py-3 text-white">8th Place</td>
                      <td className="py-3 text-gaming-orange">₹3,750</td>
                    </tr>
                    <tr>
                      <td className="py-3">League of Legends Amateur League</td>
                      <td className="py-3">League of Legends</td>
                      <td className="py-3">Feb 20, 2025</td>
                      <td className="py-3 text-white">2nd Place</td>
                      <td className="py-3 text-gaming-orange">₹22,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="achievements" className="card-gaming p-6">
              <h2 className="text-xl font-bold mb-6">Achievements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gaming-dark-purple/30 rounded-lg p-5">
                    <div className="flex items-center gap-3">
                      {achievement.icon === 'Trophy' && 
                        <Trophy className="h-8 w-8 text-gaming-orange" />
                      }
                      {achievement.icon === 'Medal' && 
                        <Medal className="h-8 w-8 text-gaming-orange" />
                      }
                      {achievement.icon === 'Star' && 
                        <div className="h-8 w-8 flex items-center justify-center text-xl text-gaming-orange">★</div>
                      }
                      <div>
                        <h3 className="font-bold">{achievement.title}</h3>
                        <p className="text-sm text-gaming-light-gray">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gaming-light-gray mb-3">Unlock more achievements by participating in tournaments</p>
                <Button className="bg-gaming-light-purple hover:bg-gaming-purple">Browse Tournaments</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
