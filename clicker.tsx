"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertCircle, ChevronLeft, Zap, Star, Sparkles } from "lucide-react"

export default function Component() {
  const [clk, setClk] = useState(0)
  const [autoClickerCount, setAutoClickerCount] = useState(0)
  const [autoClickerCost, setAutoClickerCost] = useState(10)
  const [multiplier, setMultiplier] = useState(1)
  const [multiplierCost, setMultiplierCost] = useState(50)
  const [level, setLevel] = useState(1)
  const [showAchievement, setShowAchievement] = useState(false)
  const [clickEffect, setClickEffect] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setClk((prev) => prev + autoClickerCount * multiplier)
    }, 1000)

    return () => clearInterval(interval)
  }, [autoClickerCount, multiplier])

  useEffect(() => {
    setLevel(Math.floor(Math.log2(clk + 1)) + 1)
    if (clk >= 100 && !showAchievement) {
      setShowAchievement(true)
      setTimeout(() => setShowAchievement(false), 3000)
    }
  }, [clk])

  const handleClick = () => {
    setClk((prev) => prev + 1 * multiplier)
    setClickEffect(true)
    setTimeout(() => setClickEffect(false), 100)
  }

  const buyAutoClicker = () => {
    if (clk >= autoClickerCost) {
      setClk((prev) => prev - autoClickerCost)
      setAutoClickerCount((prev) => prev + 1)
      setAutoClickerCost((prev) => Math.floor(prev * 1.5))
    }
  }

  const buyMultiplier = () => {
    if (clk >= multiplierCost) {
      setClk((prev) => prev - multiplierCost)
      setMultiplier((prev) => prev + 1)
      setMultiplierCost((prev) => Math.floor(prev * 2))
    }
  }

  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-foreground">
        <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-blue-200 dark:border-blue-700 shadow-sm">
          <div className="container flex items-center justify-between h-16 px-4">
            <Button variant="ghost" size="icon" className="mr-4">
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">CLK Clicker</h1>
            <div className="w-10" />
          </div>
        </header>

        <main className="flex-grow container max-w-md mx-auto p-4">
          <Card className="mb-6 overflow-hidden bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-600">
            <CardHeader className="pb-2 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700">
              <CardTitle className="text-xl text-center">Your CLK Treasure</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-5xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                {clk.toFixed(0)} CLK
              </div>
              <div className="flex justify-center">
                <Badge variant="secondary" className="text-lg px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100">
                  Level {level}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Button
            size="lg"
            className={`w-full h-20 text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-200 transform ${
              clickEffect ? "scale-95" : "scale-100"
            }`}
            onClick={handleClick}
          >
            Click for CLK!
            <Sparkles className="ml-2 h-6 w-6" />
          </Button>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={buyAutoClicker}
                  disabled={clk < autoClickerCost}
                  className="h-auto flex flex-col items-center p-4 border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900"
                >
                  <Zap className="h-8 w-8 mb-2 text-yellow-500" />
                  <span className="text-sm font-medium">Auto Clicker</span>
                  <span className="text-xs text-muted-foreground">Cost: {autoClickerCost} CLK</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Automatically clicks for you. You have {autoClickerCount}.</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={buyMultiplier}
                  disabled={clk < multiplierCost}
                  className="h-auto flex flex-col items-center p-4 border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900"
                >
                  <Star className="h-8 w-8 mb-2 text-purple-500" />
                  <span className="text-sm font-medium">Multiplier</span>
                  <span className="text-xs text-muted-foreground">Cost: {multiplierCost} CLK</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Increases CLK per click. Current: {multiplier}x</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <Card className="bg-white dark:bg-gray-800 border-2 border-green-300 dark:border-green-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-center">CLK Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-2">
                <span>Auto Clickers:</span>
                <span>{autoClickerCount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Click Power:</span>
                <span>{multiplier}x</span>
              </div>
            </CardContent>
          </Card>
        </main>

        <footer className="sticky bottom-0 z-10 bg-white dark:bg-gray-800 border-t border-blue-200 dark:border-blue-700 shadow-sm">
          <div className="container flex items-center justify-center h-16">
            <p className="text-sm text-center text-muted-foreground">
              Keep clicking to unlock more achievements!
            </p>
          </div>
        </footer>

        {showAchievement && (
          <div className="fixed bottom-20 right-4 bg-yellow-400 text-yellow-900 p-4 rounded-lg shadow-lg animate-bounce">
            <AlertCircle className="w-6 h-6 inline-block mr-2" />
            Achievement: 100 CLK collected!
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}