'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot } from 'lucide-react'
import { Urbanist } from 'next/font/google'
import { useState } from "react"
import { ChatWindow } from "./chat-window"
import { Cell, Label, Pie, PieChart } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
import React from "react"

const urbanist = Urbanist({ subsets: ['latin'] })

interface ProcessedPlayer {
    id: number;
    name: string;
    initials: string;
    team: string;
    rating: number;
    role?:string;
}

type ResultProps = {
    selectedPlayers: ProcessedPlayer[];
}

const COLORS = ['#240b12','#33101a', '#472831', '#5c4048', '#70585f', '#857076', '#99888d', '#ad9fa3', '#c2b7ba', '#d6cfd1', '#ebe7e8', '#ffffff']

export default function ResultPage({selectedPlayers}: ResultProps) {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const total = React.useMemo(() => {
        return selectedPlayers.reduce((acc, curr) => acc + (curr.role==="captain"?curr.rating*2:curr.role==="vice-captain"?curr.rating*1.5:curr.rating), 0)
      }, [selectedPlayers])
  return (
    <>
    <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    <div className={`min-h-screen bg-[#0d0d0d] text-white p-4 md:p-8 ml-20 mr-20 ${urbanist.className}`}>
      <div className="flex flex-col md:flex-row gap-8 mt-20">
        {/* Left Section - AI Dialog */}
        <div className="md:w-[40%] space-y-6 mt-8">
        
          
          <Card className="bg-transparent border border-white max-h-[450px]">
            <CardContent className="p-6">
              <p className="text-white text-2xl font-bold">Fantasy Points Statistics</p>
              <p className="text-white text-sm">Explore the fantasy points distribution of each player in the dream team, by hovering over the pie chart</p>
              <ChartContainer
          config={{
            rating: {
              label: "Rating",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="mx-auto text-white aspect-square max-h-[400px]">
<PieChart>
<ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-black" hideLabel />}
            />
            <Pie
              data={selectedPlayers}
              dataKey="rating"
              nameKey="name"
              innerRadius={80}
              strokeWidth={5}
            >
                {selectedPlayers.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}

                <Label
                className="text-white"
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-white fill-white"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold text-white"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-white"
                        >
                          Total Fantasy Points
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
</PieChart>
            
          </ChartContainer>
            </CardContent>
          </Card>
          <Button
                      className="bg-[#33101A] hover:bg-[#33101A]/80 text-white  font-bold text-2xl w-full p-6"
                      onClick={() => setIsChatOpen(true)}
                    >
                        
                        <Bot className="scale-150" />
                        Consult With Edge 11
                    </Button>
        </div>

        {/* Right Section - Team Players */}
        <div className="md:w-[60%] space-y-8 p-6 rounded-md overflow-hidden max-h-[520px] overflow-y-auto scrollbar scrollbar-thumb-[#33101A] scrollbar-track-gray-200">
          {/* Captain and Vice Captain Section */}
          <h1 className="text-2xl font-bold">Here is you Dream Team</h1>
          <div className="grid grid-cols-2 gap-4">
            {selectedPlayers
              .filter(player => player.role === 'captain' || player.role === 'vice-captain')
              .map(player => (
                <Card
                  key={player.id}
                  className="relative bg-black rounded-lg border-2 border-[#33101A] transition-all overflow-hidden"
                >
                  <div className="absolute top-2 right-2 px-2 py-1 bg-[#33101A] text-xs rounded-full text-white">
                    {player.role === 'captain' ? 'Captain' : 'Vice Captain'}
                  </div>
                  <div className="bg-black px-4 py-5">
                    <div className="absolute top-2 left-2 text-xs text-gray-400">
                      {player.team}
                    </div>
                    <div className="text-5xl font-bold mb-1 text-white text-center">
                      {player.initials}
                    </div>
                    <div className="text-base text-white text-center mb-3">
                      {player.name}
                    </div>
                  </div>
                  <div className="bg-white px-4 py-4">
                    <div className="text-3xl font-bold text-black text-center">
                      {player.rating}
                    </div>
                    <div className="text-xs text-gray-500 text-center mb-4">
                      Predicted Fantasy Point
                    </div>
                    <Button
                      className="w-full bg-[#33101A] hover:bg-[#33101A]/80 text-white"
                      onClick={() => setIsChatOpen(true)}
                    >
                      Why Selected?
                    </Button>
                  </div>
                </Card>
              ))}
          </div>

          {/* Other Players Rows */}
          <div className="space-y-4">
            {selectedPlayers
              .filter(player => !player.role)
              .map(player => (
                <Card
                  key={player.id}
                  className="relative bg-black rounded-lg border-2 border-white transition-all overflow-hidden flex"
                >
                  <div className="bg-black px-4 py-5 flex items-center justify-center w-1/4">
                    <div>
                    
                      
                      <div className="text-4xl font-bold mb-1 text-white text-center">
                        {player.initials}
                      </div>
                      <div className="text-sm text-white text-center">
                        {player.name}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white px-4 py-4 flex items-center justify-between w-3/4">
                    <div>
                        
                      <div className="text-xl font-bold text-black text-center">
                        {player.team}
                      </div>
                      <div className="text-xs text-gray-500">
                        Team Name
                      </div>
                    </div>
                    <div>
                        
                      <div className="text-3xl font-bold text-black text-center">
                        {player.rating}
                      </div>
                      <div className="text-xs text-gray-500">
                        Predicted Fantasy Point
                      </div>
                    </div>
                    <Button
                      className="bg-[#33101A] hover:bg-[#33101A]/80 text-white"
                      onClick={() => setIsChatOpen(true)}
                    >
                      Why Selected?
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

