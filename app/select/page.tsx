'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from 'next/image'
import { Urbanist } from 'next/font/google'
import { CalendarIcon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResultPage from '@/components/Result'

const urbanist = Urbanist({ subsets: ['latin'] })

// Hardcoded data
const teams = [
  { id: 0, name: 'India' },
  { id: 1, name: 'Australia' }
];

interface Player {
  player_name: string;
  average_fantasy_points: number;
}

interface TeamData {
  team_name: string;
  players: Player[];
}

interface ResultData {
  player_name: string;
  predicted_fantasy_points: number;
}

interface ProcessedPlayer {
  id: number;
  name: string;
  initials: string;
  team: string;
  rating: number;
  role?: string;
}

const indiaPlayers: Player[] = [
  { player_name: 'Virat Kohli', average_fantasy_points: 85 },
  { player_name: 'Rohit Sharma', average_fantasy_points: 80 },
  // Add more players as needed
];

const australiaPlayers: Player[] = [
  { player_name: 'Steve Smith', average_fantasy_points: 82 },
  { player_name: 'David Warner', average_fantasy_points: 78 },
  // Add more players as needed
];

export default function SelectPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([])
  const [matchFound, setMatchFound] = useState<boolean | "start">("start")
  const [currentStep, setCurrentStep] = useState<number>();
  const [team1players, setTeam1Players] = useState<ProcessedPlayer[]>([]);
  const [players, setPlayers] = useState<ProcessedPlayer[]>([]);
  const [team2players, setTeam2Players] = useState<ProcessedPlayer[]>([]);
  const [searchQueryteam1, setSearchQueryteam1] = useState('');
  const [searchQueryteam2, setSearchQueryteam2] = useState('');
  const [finalRatings, setFinalRatings] = useState<ProcessedPlayer[]>([]);
  const filteredteam1Players = team1players.filter((player) =>
    player.name.toLowerCase().includes(searchQueryteam1.toLowerCase())
  );
  const filteredteam2Players = team2players.filter((player) =>
    player.name.toLowerCase().includes(searchQueryteam2.toLowerCase())
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams);
    setCurrentStep(searchParams.get('review') ? 4 : searchParams.get('selectedMatch')
      ? (searchParams.get('selectedTeamA') ? 3 : 2) : 1);
    if (searchParams.get("result"))
      setCurrentStep(5);
  }, [])

  const getDialogMessage = () => {
    if (currentStep === 1) {
      if (date && date > new Date('2024-11-03'))
        return { title: "Match selected is in future!", message: "Click \"Next\" to proceed" };
      else {
        if (matchFound === true)
          return { title: "Match found!", message: "You can proceed to next step." }
        if (matchFound === false) {
          return date && date > new Date('2024-11-03')
            ? { title: "Match selected is in future!", message: "Click \"Next\" to proceed" }
            : { title: "No Match found!", message: "Change the date selected or the team" }
        }

        return {
          title: "Hi, I'm Edge 11! Let's get started.",
          message: "Step 1: Select the match date and teams you want to analyze. Click 'Next' to continue!",
          subtitle: "P.S. Dates after 3rd November 2024 are considered as future matches based on current data."
        }
      }
    }

    if (currentStep === 2) {
      const remaining = 11 - selectedPlayers.length
      return {
        title: "Match selection done! Now it's time to pick your players.",
        message: `Step 2A: Select ${remaining} more player${remaining !== 1 ? 's' : ''} from Team 1. Click 'Next' to continue selecting players from Team 2.`
      }
    }
    if (currentStep === 3) {
      const remaining = 22 - selectedPlayers.length
      return {
        title: "Team A Selection Done! Lets pick players for Team B",
        message: `Step 2B: Select ${remaining} more player${remaining !== 1 ? 's' : ''} from Team B. Click 'Next' to review.`
      }
    }

    if (currentStep === 4) {
      return {
        title: "Almost there!",
        message: "Step 3: Review your selections before proceeding to the results page."
      }
    }

    return {
      title: "Review Complete!",
      message: "Click Generate to create your team"
    }
  }

  const handleFindMatch = () => {
    if (date && team1 && team2) {
      console.log("Finding match")
      setMatchFound(true); // Hardcoded to always find a match
    }
  }

  const getPlayer = () => {
    console.log(team1);
    setTeam1Players(indiaPlayers.map((player, index) => ({
      id: index + 1,
      name: player.player_name,
      initials: player.player_name
        .split(' ')
        .map(word => word[0])
        .join(''),
      team: 'India',
      rating: player.average_fantasy_points
    })));

    console.log("Team 1: ", team1players);

    console.log(team2);
    const l = indiaPlayers.length;

    setTeam2Players(australiaPlayers.map((player, index) => ({
      id: index + l + 1,
      name: player.player_name,
      initials: player.player_name
        .split(' ')
        .map(word => word[0])
        .join(''),
      team: 'Australia',
      rating: player.average_fantasy_points
    })));

    console.log("Team 2: ", team2players);
  }

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
      getPlayer();
      console.log(players);
      router.push('/select?selectedMatch=true')
    } else if (currentStep === 2) {
      console.log(selectedPlayers);
      console.log(team2players);
      setCurrentStep(currentStep + 1);
      router.push('/select?selectedMatch=true&selectedTeamA=true')
    } else if (currentStep === 3) {
      console.log(selectedPlayers);
      console.log(players);
      setCurrentStep(currentStep + 1);
      router.push('/select?selectedMatch=true&selectedTeamA=true&review=true')
    } else if (currentStep === 4) {
      setCurrentStep(currentStep + 1);
      router.push('/result')
    }
  }

  const handlePrevious = () => {
    if (currentStep === 2) {
      setCurrentStep(currentStep - 1);
      router.push('/select')
    } else if (currentStep === 3) {
      setCurrentStep(currentStep - 1);
      router.push('/select?selectedMatch=true')
    } else if (currentStep === 4) {
      setCurrentStep(currentStep - 1);
      router.push('/select?selectedMatch=true&selectedTeamA=true')
    } else if (currentStep === 5) {
      setCurrentStep(currentStep - 1);
      router.push('/select?selectedMatch=true&selectedTeamA=true&review=true')
    }
  }

  const handleGenerate = () => {
    const t1 = team1players.filter(item => selectedPlayers.includes(item.id)).map(item => item.name);
    const t2 = team2players.filter(item => selectedPlayers.includes(item.id)).map(item => item.name);
    const playernames = [...t1, ...t2];
    const newdate = date
      ? (date > new Date('2024-11-03')
        ? new Date('2024-11-01').toISOString().split('T')[0]
        : date.toISOString().split('T')[0])
      : "2024-11-01";
    console.log({ newdate, team1, team2, playernames });

    // Hardcoded result data
    const resultdata: ResultData[] = [
      { player_name: 'Virat Kohli', predicted_fantasy_points: 90 },
      { player_name: 'Rohit Sharma', predicted_fantasy_points: 85 },
      { player_name: 'Steve Smith', predicted_fantasy_points: 88 },
      { player_name: 'David Warner', predicted_fantasy_points: 83 },
      // Add more players as needed
    ];

    const formattedData: ProcessedPlayer[] = resultdata.map((item, index) => ({
      id: index,
      name: item.player_name,
      team: index < 11 ? 'India' : 'Australia',
      initials: item.player_name.split(' ').map(word => word[0]).join(''),
      rating: item.predicted_fantasy_points
    }));

    console.log(formattedData);

    setFinalRatings(formattedData);

    const sortWithDiversity = (players: ProcessedPlayer[]): ProcessedPlayer[] => {
      players.sort((a, b) => b.rating - a.rating);

      const teamCount: Record<string, number> = {};
      const maxPerTeam = 10;
      const result: ProcessedPlayer[] = [];

      for (const player of players) {
        const team = player.team;
        if (result.length < 11) {
          if (!teamCount[team]) teamCount[team] = 0;
          if (result.length === 0)
            player.role = "captain";
          if (result.length === 1)
            player.role = "vice-captain";

          if (teamCount[team] < maxPerTeam) {
            result.push(player);
            teamCount[team]++;
          }
        }
      }

      return result;
    };

    const result = sortWithDiversity(formattedData);

    setFinalRatings(result);

    console.log(result);

    if (currentStep === 4)
      setCurrentStep(currentStep + 1);
    console.log(currentStep);
    router.push('/select?result=true')
  }

  const handlePlayerSelect = (playerId: number) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter(id => id !== playerId))
    } else if (selectedPlayers.length < 22) {
      setSelectedPlayers([...selectedPlayers, playerId])
    }
  }

  const dialogMessage = getDialogMessage()











// 'use client'

// import { useEffect, useState } from 'react'
// import { useRouter} from 'next/navigation'
// import { Calendar } from "@/components/ui/calendar"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Progress } from "@/components/ui/progress"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import Image from 'next/image'
// import { Urbanist } from 'next/font/google'
// import { CalendarIcon } from 'lucide-react'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import ResultPage from '@/components/Result'

// const urbanist = Urbanist({ subsets: ['latin'] })

// // Mock data

// const team_response = await fetch("https://bdream11.team57.in/unique_teams", {
//     method: "GET",
//     headers: { 'Content-Type': 'application/json' }
// }

    
// );
// const data = await team_response.json();
// console.log()

// const teams : {id: number, name: string}[] = data.unique_teams.map((name: string, index: number) => ({
//     id: index,
//     name: name
//   }));
//   interface Player {
//     player_name: string;
//     average_fantasy_points: number;
// }

// interface TeamData {
//     team_name: string;
//     players: Player[];
// }
// interface ResultData {
//   player_name: string;
//   predicted_fantasy_points: number;
// }

// interface ProcessedPlayer {
//     id: number;
//     name: string;
//     initials: string;
//     team: string;
//     rating: number;
//     role?:string;
// }



  
  


// export default function SelectPage() {
//   const router = useRouter()
//   const [date, setDate] = useState<Date>()
//   const [team1, setTeam1] = useState('')
//   const [team2, setTeam2] = useState('')
//   const [selectedPlayers, setSelectedPlayers] = useState<number[]>([])
//   const [matchFound, setMatchFound] = useState<boolean | "start">("start")
//   const [currentStep, setCurrentStep] = useState<number>();
//   const [team1players, setTeam1Players] = useState<ProcessedPlayer[]>([]);
//   const [players, setPlayers] = useState<ProcessedPlayer[]>([]);
//   const [team2players, setTeam2Players] = useState<ProcessedPlayer[]>([]);
//   const [searchQueryteam1, setSearchQueryteam1] = useState('');
//   const [searchQueryteam2, setSearchQueryteam2] = useState('');
//   const[finalRatings, setFinalRatings] = useState<ProcessedPlayer[]>([]);
//   const filteredteam1Players = team1players.filter((player) =>
//     player.name.toLowerCase().includes(searchQueryteam1.toLowerCase())
//   );
//   const filteredteam2Players = team2players.filter((player) =>
//     player.name.toLowerCase().includes(searchQueryteam2.toLowerCase())
//   );
  

//   useEffect(()=>{
//     const searchParams = new URLSearchParams(window.location.search);
//     console.log(searchParams);
//     setCurrentStep(searchParams.get('review') ? 4 : searchParams.get('selectedMatch') 
//     ? (searchParams.get('selectedTeamA') ? 3 : 2): 1);
//     if (searchParams.get("result"))
//       setCurrentStep(5);
//   }, [])

  

//  const getDialogMessage = () => {
//     if (currentStep === 1) {
//       if(date && date > new Date('2024-11-03'))
//         return { title: "Match selected is in future!", message: "Click \"Next\" to proceed" };
//       else{
//         if(matchFound===true)
//             return { title: "Match found!", message: "You can proceed to next step." }
//         if (matchFound===false) {
//           return date && date > new Date('2024-11-03')
//             ? { title: "Match selected is in future!", message: "Click \"Next\" to proceed" }
//             : { title: "No Match found!", message: "Change the date selected or the team" }
//         }
      
//         return {
//           title: "Hi, I'm Edge 11! Let's get started.",
//           message: "Step 1: Select the match date and teams you want to analyze. Click 'Next' to continue!",
//           subtitle: "P.S. Dates after 3rd November 2024 are considered as future matches based on current data."
//         }
//       }
      
      

      
//     }
    
//     if (currentStep === 2) {
//       const remaining = 11 - selectedPlayers.length
//       return {
//         title: "Match selection done! Now it's time to pick your players.",
//         message: `Step 2A: Select ${remaining} more player${remaining !== 1 ? 's' : ''} from Team 1. Click 'Next' to continue selecting players from Team 2.`
//       }
//     }
//     if (currentStep === 3) {
//       const remaining = 22 - selectedPlayers.length
//       return {
//         title: "Team A Selection Done! Lets pick players for Team B",
//         message: `Step 2B: Select ${remaining} more player${remaining !== 1 ? 's' : ''} from Team B. Click 'Next' to review.`
//       }
//     }

//     if (currentStep === 4) {
//       return {
//         title: "Almost there!",
//         message: "Step 3: Review your selections before proceeding to the results page."
//       }
//     }

//     return {
//       title: "Review Complete!",
//       message: "Click Generate to create your team"
//     }
//   }


//   const handleFindMatch = async() => {
//     if (date && team1 && team2) {
//         console.log("Finding match")
//       const matchresponse = await fetch('https://bdream11.team57.in/get-match-details', {
//         method:'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body:
//             JSON.stringify({
//                 date: date.toLocaleDateString(),
//                 team_a:team1,
//                 team_b:team2
//             })
        
//       });
//       const matchdata = (await matchresponse.json());
//       if(matchdata.matches)
//       setMatchFound(true)
//       else
//       setMatchFound(false);
//     }
//   }


  
//   const getPlayer = async ()=> {
//     console.log(team1);
//     const team1res = await fetch('https://bdream11.team57.in/get-unique-players', {
//         method: 'POST',
//         headers: {"Content-Type": "application/json",},
//         body: JSON.stringify({
//           team_name: team1
//         })
//     });
//     const team1data: TeamData = await team1res.json();
    

//         setTeam1Players( team1data.players.map((player, index) => ({
//             id: index + 1, 
//             name: player.player_name, 
//             initials: player.player_name
//                 .split(' ') 
//                 .map(word => word[0])
//                 .join(''),
//             team: team1data.team_name, 
//             rating: player.average_fantasy_points
//         })));

//         console.log("Team 1: ", team1players);


        

  

//     console.log(team2);
//     const team2res = await fetch('https://bdream11.team57.in/get-unique-players', {
//       method: 'POST',
//       headers: {"Content-Type": "application/json",},
//       body: JSON.stringify({
//         team_name: team2
//       })
//   });
//   const team2data: TeamData = (await team2res.json());
//   console.log(team2data);
//   const l = team1data.players.length;

//   setTeam2Players( team2data.players.map((player, index) => ({
//     id: index + l +1, 
//     name: player.player_name, 
//     initials: player.player_name
//         .split(' ') 
//         .map(word => word[0])
//         .join(''),
//     team: team2data.team_name, 
//     rating: player.average_fantasy_points
// })));

// console.log("Team 2: ", team2players);
//   }


//   const handleNext = () => {
      
//     if (currentStep === 1) {
//       setCurrentStep(currentStep+1);
//       getPlayer();
//       console.log(players);
//       router.push('/select?selectedMatch=true')
//     } else if (currentStep === 2) {
//       console.log(selectedPlayers);
//       console.log(team2players);
//       setCurrentStep(currentStep+1);
//       router.push('/select?selectedMatch=true&selectedTeamA=true')
//     } else if (currentStep === 3) {
//       console.log(selectedPlayers);
//       console.log(players);
//       setCurrentStep(currentStep+1);
//       router.push('/select?selectedMatch=true&selectedTeamA=true&review=true')
//     } else if (currentStep === 4) {
//       setCurrentStep(currentStep+1);
//       router.push('/result')
//     }
//   }

//   const handlePrevious = () => {
      
//     if (currentStep === 2) {
//       setCurrentStep(currentStep-1);
//       router.push('/select')
//     } else if (currentStep === 3) {
//       setCurrentStep(currentStep-1);
//       router.push('/select?selectedMatch=true')
//     } else if (currentStep === 4) {
//       setCurrentStep(currentStep-1);
//       router.push('/select?selectedMatch=true&selectedTeamA=true')
//     } else if (currentStep === 5) {
//       setCurrentStep(currentStep-1);
//       router.push('/select?selectedMatch=true&selectedTeamA=true&review=true')
//     }
//   }

//   const handleGenerate = async ()=>{
//     const t1 = team1players.filter(item => selectedPlayers.includes(item.id)).map(item => item.name);
//     const t2 = team2players.filter(item => selectedPlayers.includes(item.id)).map(item => item.name);
//     const playernames = [...t1, ...t2];
//     const newdate = date
//     ? (date > new Date('2024-11-03') 
//         ? new Date('2024-11-01').toISOString().split('T')[0] 
//         : date.toISOString().split('T')[0])
//     : "2024-11-01";
//     console.log({newdate, team1, team2, playernames});
//     const response = await fetch("https://bdream11.team57.in/predict", {
//         method:"POST",
//         headers: { 'Content-Type': 'application/json' },
//         body:JSON.stringify({
//             date: newdate,
//             match_type:"T20",
//             team:team1,
//             opponent:team2,
//             player_names: playernames,
//             weather: "Rainy"
//         })
        
//     });
//     const resultdata: ResultData[] = await response.json();

//     const formattedData: ProcessedPlayer[] = resultdata.map((item, index)=>({
//         id: index,
//         name: item.player_name,
//         team: index<11?team1:team2,
//         initials: item.player_name.split(' ') .map(word => word[0]).join(''),
//         rating: item.predicted_fantasy_points
      
//     }));

//     console.log(formattedData);

//     setFinalRatings(formattedData);

//     const sortWithDiversity = (players: ProcessedPlayer[]): ProcessedPlayer[] => {
      
//       players.sort((a, b) => b.rating - a.rating);
  
      
//       const teamCount: Record<string, number> = {};
//       const maxPerTeam = 10; 
//       const result: ProcessedPlayer[] = [];
  
//       for (const player of players) {
//           const team = player.team;
//           if (result.length < 11) {
//               if (!teamCount[team]) teamCount[team] = 0;
//               if(result.length===0)
//                 player.role="captain";
//               if(result.length===1)
//                 player.role="vice-captain";
  
//               if (teamCount[team] < maxPerTeam) {
//                   result.push(player);
//                   teamCount[team]++;
//               }
//           }
//       }
  
//       return result;
//   };

//   const result = sortWithDiversity(formattedData);

//   setFinalRatings(result);

//   console.log(result);
  
//     // router.push('/result');
//     if(currentStep===4)
//     setCurrentStep(currentStep+1);
//     console.log(currentStep);
//     router.push('/select?result=true')
    
//   }


//   const handlePlayerSelect = (playerId: number) => {
//     if (selectedPlayers.includes(playerId)) {
//       setSelectedPlayers(selectedPlayers.filter(id => id !== playerId))
//     } else if (selectedPlayers.length < 22) {
//       setSelectedPlayers([...selectedPlayers, playerId])
//     }
//   }

//   const dialogMessage = getDialogMessage()

  return (
    
    
    <div className={`min-h-screen bg-[#0d0d0d] text-white p-4 md:p-8 ml-20 mr-20 ${urbanist.className}`}>
      {currentStep === 5? (<>
      <ResultPage selectedPlayers={finalRatings}/>
      </>): (
        <>
        <Progress 
        value={currentStep! * 25} 
        className="mb-8 bg-white mt-20"
      />

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-[40%] space-y-8 touch">
          <Card className="bg-transparent border border-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-white">{dialogMessage.title}</h2>
              <p className="text-white">{dialogMessage.message}</p>
              {dialogMessage.subtitle && (
                <p className="text-sm text-white mt-2">{dialogMessage.subtitle}</p>
              )}
            </CardContent>
          </Card>

          <div className="hidden md:block">
            <Image
              src="/robot.png"
              alt="Edge 11 Assistant"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="md:w-[80%]">
          {currentStep === 1 ? (
            <Card className="bg-transparent border border-white">
              <CardContent className="p-6">
                <h2 className="text-2xl mb-6 font-bold text-white">Team and Date Selection</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg mb-2 text-white">Select Date</h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                            
                          className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"} bg-transparent border border-white text-white`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? date.toLocaleDateString() : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-zinc-800">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="bg-transparent text-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <h3 className="text-lg mb-2 text-white">Select the First Team</h3>
                    <Select onValueChange={setTeam1} value={team1}>
                      <SelectTrigger className="w-full bg-black border border-white text-white">
                        <SelectValue placeholder="Select team" />
                      </SelectTrigger>
                      <SelectContent className='bg-black text-white absolute top-full mt-1'>
                        {teams.map(team => (
                          <SelectItem key={team.id} value={team.name} className='hover:bg-white data-[highlighted]:bg-white data-[highlighted]:text-black'>
                            {team.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <h3 className="text-lg mb-2 text-white">Select the Second Team</h3>
                    <Select onValueChange={setTeam2} value={team2}>
                      <SelectTrigger className="w-full bg-black border border-white text-white">
                        <SelectValue placeholder="Select team" />
                      </SelectTrigger>
                      <SelectContent className='bg-black text-white absolute top-full mt-1'>
                        {teams.map(team => (
                          <SelectItem key={team.id} value={team.name} className='hover:bg-white data-[highlighted]:bg-white data-[highlighted]:text-black'>
                            {team.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='w-full flex justify-center items-center'>
                  <Button 
                    onClick={handleFindMatch}
                    className="w-[40%] text-white bg-[#33101A] hover:bg-[#33101A]/80"
                  >
                    Click To Find Match
                  </Button>
                  </div>

                  
                </div>
              </CardContent>
            </Card>
          ) : (
            currentStep === 2 ? (
              <div>
                {/* Search Bar */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search for a player..."
                    value={searchQueryteam1}
                    onChange={(e) => setSearchQueryteam1(e.target.value)}
                    className="w-full px-4 py-2 text-sm border border-white text-white bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
            
                {/* Player Cards */}
                <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md overflow-hidden max-h-[400px] overflow-y-auto scrollbar scrollbar-thumb-[#33101A] scrollbar-track-gray-200">
              {filteredteam1Players.map((player) => (
                    <Card
                      key={player.id}
                      className={`relative bg-black rounded-lg border-2 transition-all overflow-hidden ${
                        selectedPlayers.includes(player.id)
                          ? 'border-green-500'
                          : 'border-white'
                      }`}
                    >
                      {/* Top Section (Black Background) */}
                      <div className="bg-black px-4 py-5">
                        {/* Top Left Label */}
                        <div className="absolute top-2 left-2 text-xs text-gray-400">
                          {team1}
                        </div>
            
                        {/* Player Initials */}
                        <div className="text-5xl font-bold mb-1 text-white text-center">
                          {player.initials}
                        </div>
            
                        {/* Player Name */}
                        <div className="text-base text-white text-center mb-3">
                          {player.name}
                        </div>
                      </div>
            
                      {/* Bottom Section (White Background) */}
                      <div className="bg-white px-4 py-4">
                        {/* Fantasy Points */}
                        <div className="text-3xl font-bold text-black text-center">
                          {player.rating}
                        </div>
                        <div className="text-xs text-gray-500 text-center mb-4">
                          Avg. Fantasy Point
                        </div>
            
                        {/* Add/Remove Button */}
                        <Button
                          onClick={() => handlePlayerSelect(player.id)}
                          className={`w-full text-sm font-semibold rounded-md ${
                            selectedPlayers.includes(player.id)
                              ? 'bg-red-600 hover:bg-red-700 text-white'
                              : 'bg-black hover:bg-[#552030] text-white'
                          }`}
                          disabled={
                            selectedPlayers.length >= 11 &&
                            !selectedPlayers.includes(player.id)
                          }
                        >
                          {selectedPlayers.includes(player.id) ? 'Remove' : 'Add to Team'}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ): currentStep === 3 ? (
            <>
                {/* Search Bar */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search for a player..."
                    value={searchQueryteam2}
                    onChange={(e) => setSearchQueryteam2(e.target.value)}
                    className="w-full px-4 py-2 text-sm border  text-white bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
            
                {/* Player Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto scrollbar scrollbar-thumb-[#33101A] scrollbar-track-gray-200">
                  {filteredteam2Players.map((player) => (
                    <Card
                      key={player.id}
                      className={`relative bg-black rounded-lg border-2 transition-all overflow-hidden ${
                        selectedPlayers.includes(player.id)
                          ? 'border-green-500'
                          : 'border-white'
                      }`}
                    >
                      {/* Top Section (Black Background) */}
                      <div className="bg-black px-4 py-5">
                        {/* Top Left Label */}
                        <div className="absolute top-2 left-2 text-xs text-gray-400">
                          {player.team}
                        </div>
            
                        {/* Player Initials */}
                        <div className="text-5xl font-bold mb-1 text-white text-center">
                          {player.initials}
                        </div>
            
                        {/* Player Name */}
                        <div className="text-base text-white text-center mb-3">
                          {player.name}
                        </div>
                      </div>
            
                      {/* Bottom Section (White Background) */}
                      <div className="bg-white px-4 py-4">
                        {/* Fantasy Points */}
                        <div className="text-3xl font-bold text-black text-center">
                          {player.rating}
                        </div>
                        <div className="text-xs text-gray-500 text-center mb-4">
                          Avg. Fantasy Point
                        </div>
            
                        {/* Add/Remove Button */}
                        <Button
                          onClick={() => handlePlayerSelect(player.id)}
                          className={`w-full text-sm font-semibold rounded-md ${
                            selectedPlayers.includes(player.id)
                              ? 'bg-red-600 hover:bg-red-700 text-white'
                              : 'bg-black hover:bg-[#552030] text-white'
                          }`}
                          disabled={
                            selectedPlayers.length >= 22 &&
                            !selectedPlayers.includes(player.id)
                          }
                        >
                          {selectedPlayers.includes(player.id) ? 'Remove' : 'Add to Team'}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
                </>
            ):currentStep===4 ?(
                <Tabs defaultValue={team1} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-[#0D0D0D]">
                  <TabsTrigger value={team1} className='hover:bg-black'>{team1}</TabsTrigger>
                  <TabsTrigger value={team2} className='hover:bg-black'>{team2}</TabsTrigger>
                </TabsList>
                <TabsContent value={team1}>
                <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border border-white p-6 rounded-md overflow-hidden max-h-[500px] overflow-y-auto scrollbar scrollbar-thumb-[#33101A] scrollbar-track-gray-200">

                    {team1players
                      .filter(player => selectedPlayers.includes(player.id))
                      .map(player => (
                        <Card
                        key={player.id}
                        className={`relative bg-black rounded-lg border-2 transition-all overflow-hidden ${
                          selectedPlayers.includes(player.id)
                            ? 'border-green-500'
                            : 'border-white'
                        }`}
                      >
                        {/* Top Section (Black Background) */}
                        <div className="bg-black px-4 py-5">
                          {/* Top Left Label */}
                          <div className="absolute top-2 left-2 text-xs text-gray-400">
                            {player.team}
                          </div>
                      
                          {/* Player Initials */}
                          <div className="text-5xl font-bold mb-1 text-white text-center">
                            {player.initials}
                          </div>
                      
                          {/* Player Name */}
                          <div className="text-base text-white text-center mb-3">
                            {player.name}
                          </div>
                        </div>
                      
                        {/* Bottom Section (White Background) */}
                        <div className="bg-white px-4 py-4">
                          {/* Fantasy Points */}
                          <div className="text-3xl font-bold text-black text-center">
                            {player.rating}
                          </div>
                          <div className="text-xs text-gray-500 text-center mb-4">
                            Avg. Fantasy Point
                          </div>
                          </div>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value={team2}>
                <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border border-white p-6 rounded-md overflow-hidden max-h-[500px] overflow-y-auto scrollbar scrollbar-thumb-[#33101A] scrollbar-track-gray-200">

                    {team2players
                      .filter(player => selectedPlayers.includes(player.id))
                      .map(player => (
                        <Card
                key={player.id}
                className={`relative bg-black rounded-lg border-2 transition-all overflow-hidden ${
                  selectedPlayers.includes(player.id)
                    ? 'border-green-500'
                    : 'border-white'
                }`}
              >
                {/* Top Section (Black Background) */}
                <div className="bg-black px-4 py-5">
                  {/* Top Left Label */}
                  <div className="absolute top-2 left-2 text-xs text-gray-400">
                    {player.team}
                  </div>
              
                  {/* Player Initials */}
                  <div className="text-5xl font-bold mb-1 text-white text-center">
                    {player.initials}
                  </div>
              
                  {/* Player Name */}
                  <div className="text-base text-white text-center mb-3">
                    {player.name}
                  </div>
                </div>
              
                {/* Bottom Section (White Background) */}
                <div className="bg-white px-4 py-4">
                  {/* Fantasy Points */}
                  <div className="text-3xl font-bold text-black text-center">
                    {player.rating}
                  </div>
                  <div className="text-xs text-gray-500 text-center mb-4">
                    Avg. Fantasy Point
                  </div>
                  </div>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            ): (<></>)
          )}
          <div className="flex justify-between mt-8">
            
        <Button
          onClick={handlePrevious}
          className="text-white border border-[#33101A] hover:bg-[#33101A]/80"
        >
          Previous
        </Button>

        {currentStep === 4 ? (
            <Button
            onClick={handleGenerate}
            className="text-white bg-[#33101A] hover:bg-[#33101A]/80 disabled:bg-[#33101A]/50"
          >
            Generate
          </Button>
        ):(
        <Button
          onClick={handleNext}
          disabled={
            (currentStep === 1 && (!matchFound && (date && date < new Date('2024-11-03')))) ||
            (currentStep === 2 && selectedPlayers.length !== 11)
          }
          className="text-white bg-[#33101A] hover:bg-[#33101A]/80 disabled:bg-[#33101A]/50"
        >
          Next
        </Button>
        )}
        
      </div>
        </div>
      </div>

      </>
      )}
      
    </div>

  )
}

function axios(arg0: string, arg1: { method: string; headers: { 'Content-Type': string }; body: {} }) {
    throw new Error('Function not implemented.')
}

