"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Star, Trophy } from "lucide-react"

export default function Component() {
  const [wld, setWld] = useState(0)
  const [autoClickerCount, setAutoClickerCount] = useState(0)
  const [autoClickerCost, setAutoClickerCost] = useState(10)
  const [multiplier, setMultiplier] = useState(1)
  const [multiplierCost, setMultiplierCost] = useState(50)
  const [progress, setProgress] = useState(0)
  const [level, setLevel] = useState(1)
  const [showAchievement, setShowAchievement] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setWld((prev) => prev + autoClickerCount * multiplier)
      setProgress((prev) => (prev + 5) % 100)
    }, 1000)

    return () => clearInterval(interval)
  }, [autoClickerCount, multiplier])

  useEffect(() => {
    setLevel(Math.floor(Math.log2(wld + 1)) + 1)
    if (wld >= 100 && !showAchievement) {
      setShowAchievement(true)
      setTimeout(() => setShowAchievement(false), 3000)
    }
  }, [wld])

  const handleClick = () => {
    setWld((prev) => prev + 1 * multiplier)
    setProgress((prev) => (prev + 10) % 100)
  }

  const buyAutoClicker = () => {
    if (wld >= autoClickerCost) {
      setWld((prev) => prev - autoClickerCost)
      setAutoClickerCount((prev) => prev + 1)
      setAutoClickerCost((prev) => Math.floor(prev * 1.5))
    }
  }

  const buyMultiplier = () => {
    if (wld >= multiplierCost) {
      setWld((prev) => prev - multiplierCost)
      setMultiplier((prev) => prev + 1)
      setMultiplierCost((prev) => Math.floor(prev * 2))
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <Card className="shadow-lg bg-gradient-to-br from-purple-400 to-pink-500 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-2">WLD Clicker Pop!</CardTitle>
          <div className="flex justify-center gap-2 mb-2">
            <Badge variant="secondary" className="text-lg bg-white text-purple-600 animate-pulse">
              <Sparkles className="w-4 h-4 mr-1" />
              {wld.toFixed(0)} WLD
            </Badge>
            <Badge variant="secondary" className="text-lg bg-white text-pink-600">
              <Star className="w-4 h-4 mr-1" />
              Level {level}
            </Badge>
          </div>
          <Progress value={progress} className="w-full h-2 bg-white/50" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            size="lg"
            className="w-full h-24 text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            onClick={handleClick}
          >
            Click Me! 🎉
          </Button>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="secondary"
              onClick={buyAutoClicker}
              disabled={wld < autoClickerCost}
              className="h-auto flex flex-col p-4 bg-blue-400 hover:bg-blue-500 text-white transition-all duration-200 transform hover:scale-105"
            >
              <span className="text-lg font-bold">Auto Clicker</span>
              <span className="text-sm">Cost: {autoClickerCost} WLD</span>
              <span className="text-xs">Owned: {autoClickerCount}</span>
            </Button>
            <Button
              variant="secondary"
              onClick={buyMultiplier}
              disabled={wld < multiplierCost}
              className="h-auto flex flex-col p-4 bg-green-400 hover:bg-green-500 text-white transition-all duration-200 transform hover:scale-105"
            >
              <span className="text-lg font-bold">Multiplier</span>
              <span className="text-sm">Cost: {multiplierCost} WLD</span>
              <span className="text-xs">Current: {multiplier}x</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="text-center text-sm bg-white/20 rounded-b-lg">
          Keep clicking to level up and unlock achievements!
        </CardFooter>
      </Card>
      {showAchievement && (
        <div className="fixed bottom-4 right-4 bg-yellow-400 text-purple-800 p-4 rounded-lg shadow-lg animate-bounce">
          <Trophy className="w-6 h-6 inline-block mr-2" />
          Achievement Unlocked: 100 WLD!
        </div>
      )}
    </div>
  )
}