
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CalendarIcon, Clock, ListChecks, Trophy, Upload } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  title: z.string().min(5, { message: 'Tournament title must be at least 5 characters' }),
  game: z.string().min(1, { message: 'Please select a game' }),
  description: z.string().min(20, { message: 'Description must be at least 20 characters' }),
  format: z.string().min(1, { message: 'Please select a format' }),
  date: z.date({ required_error: 'Please select a date' }),
  time: z.string().min(1, { message: 'Please select a time' }),
  maxPlayers: z.string().min(1, { message: 'Please specify maximum players' }),
  prizePool: z.string().min(1, { message: 'Please specify prize pool amount' }),
  rules: z.string().min(10, { message: 'Please provide tournament rules' }),
});

const CreateTournament = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      rules: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real app, we would submit the form data to create a tournament
    // Then redirect to the tournament page
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Create a <span className="text-gradient">Tournament</span>
          </h1>
          <p className="text-gaming-light-gray mb-8">
            Fill in the details below to create your own custom tournament.
          </p>
          
          <div className="card-gaming p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tournament Title</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter tournament title" 
                            {...field}
                            className="bg-gaming-dark-purple/30 border-gaming-purple/20 focus-visible:ring-gaming-light-purple"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="game"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Game</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gaming-dark-purple/30 border-gaming-purple/20">
                              <SelectValue placeholder="Select a game" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="apex">Apex Legends</SelectItem>
                            <SelectItem value="valorant">Valorant</SelectItem>
                            <SelectItem value="fortnite">Fortnite</SelectItem>
                            <SelectItem value="cod">Call of Duty</SelectItem>
                            <SelectItem value="lol">League of Legends</SelectItem>
                            <SelectItem value="rocket">Rocket League</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your tournament..." 
                          className="bg-gaming-dark-purple/30 border-gaming-purple/20 focus-visible:ring-gaming-light-purple min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="format"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tournament Format</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gaming-dark-purple/30 border-gaming-purple/20">
                              <SelectValue placeholder="Select format" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="elimination">Single Elimination</SelectItem>
                            <SelectItem value="double">Double Elimination</SelectItem>
                            <SelectItem value="round">Round Robin</SelectItem>
                            <SelectItem value="swiss">Swiss System</SelectItem>
                            <SelectItem value="battle">Battle Royale</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="maxPlayers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Maximum Players/Teams</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gaming-dark-purple/30 border-gaming-purple/20">
                              <SelectValue placeholder="Select player cap" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="8">8</SelectItem>
                            <SelectItem value="16">16</SelectItem>
                            <SelectItem value="32">32</SelectItem>
                            <SelectItem value="64">64</SelectItem>
                            <SelectItem value="100">100</SelectItem>
                            <SelectItem value="128">128</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Tournament Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal bg-gaming-dark-purple/30 border-gaming-purple/20",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gaming-dark-purple/30 border-gaming-purple/20">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="16:00">4:00 PM</SelectItem>
                            <SelectItem value="18:00">6:00 PM</SelectItem>
                            <SelectItem value="20:00">8:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="prizePool"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prize Pool (₹)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gaming-light-gray">₹</span>
                            <Input 
                              placeholder="Amount in Rupees" 
                              {...field}
                              className="bg-gaming-dark-purple/30 border-gaming-purple/20 focus-visible:ring-gaming-light-purple pl-8"
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Enter the total prize pool amount
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="rules"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tournament Rules</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter tournament rules and guidelines..." 
                          className="bg-gaming-dark-purple/30 border-gaming-purple/20 focus-visible:ring-gaming-light-purple min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="border border-dashed border-gaming-purple/30 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-gaming-light-gray mb-4" />
                    <h3 className="text-lg font-medium mb-1">Upload Tournament Banner</h3>
                    <p className="text-sm text-gaming-light-gray mb-4">Drag and drop an image or click to browse</p>
                    <Button type="button" variant="outline">Choose File</Button>
                  </div>
                </div>
                
                <div className="flex justify-end gap-4">
                  <Button type="button" variant="outline">Save as Draft</Button>
                  <Button type="submit" className="bg-gaming-light-purple hover:bg-gaming-purple">Create Tournament</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreateTournament;
