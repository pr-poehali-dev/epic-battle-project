import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentUser] = useState({
    name: 'GamerPro',
    rating: 1847,
    level: 23,
    wins: 156,
    losses: 43,
    streak: 7
  });

  const [gameStats] = useState({
    duelRating: 1500,
    blitzRecord: '12.4',
    battleWins: 8,
    lastWinner: 'UserA'
  });

  const playSound = (type: 'click' | 'hover' | 'victory' | 'defeat') => {
    const sounds = {
      click: () => {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
      },
      hover: () => {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.05);
      },
      victory: () => {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(523, ctx.currentTime);
        osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
        osc.frequency.setValueAtTime(1047, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.4);
      },
      defeat: () => {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
      }
    };
    try {
      sounds[type]();
    } catch (error) {
      console.log('Audio not available');
    }
  };

  const createParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${3 + Math.random() * 3}s`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <div className="min-h-screen gaming-gradient relative overflow-hidden">
      <div className="particles">
        {createParticles()}
      </div>
      
      {/* Header */}
      <header className="relative z-10 border-b border-gaming-blue/20 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black text-white neon-text">
                🌍 GAMING QUIZ
              </h1>
              <nav className="hidden md:flex gap-6">
                <Button variant="ghost" className="text-gaming-blue neon-text font-semibold">
                  Главная
                </Button>
                <Button variant="ghost" className="text-white hover:text-gaming-blue">
                  <Icon name="Trophy" size={20} className="mr-2" />
                  Топы
                </Button>
                <Button variant="ghost" className="text-white hover:text-gaming-blue">
                  <Icon name="User" size={20} className="mr-2" />
                  Профиль
                </Button>
              </nav>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white">
                Вход
              </Button>
              <Button className="neon-button text-white font-semibold animate-neon-pulse">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with World Map */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-6xl font-black text-white mb-6 neon-text animate-glow">
              ГОТОВ К БИТВЕ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Выбери свою арену и докажи, что ты лучший игрок в мире географических знаний!
            </p>
          </div>
          
          {/* World Map Background */}
          <div className="relative mb-20">
            <img 
              src="/img/3e25a633-e482-4594-a716-b5365a173a73.jpg" 
              alt="Gaming World Map" 
              className="w-full max-w-4xl mx-auto rounded-2xl opacity-60 animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* 1x1 Duel */}
            <Card 
              className="game-card cursor-pointer relative overflow-hidden group"
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">⚔️</div>
                <CardTitle className="text-2xl font-black text-white neon-text">
                  1x1 ДУЭЛЬ
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Прямое столкновение умов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Ваш рейтинг:</p>
                  <p className="text-3xl font-bold text-gaming-yellow neon-text">
                    {gameStats.duelRating}
                  </p>
                </div>
                <Button 
                  className="w-full neon-button font-bold text-lg py-3"
                  onClick={() => playSound('victory')}
                >
                  В БОЙ! 🔥
                </Button>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-gaming-red to-gaming-blue transition-opacity duration-300"></div>
              </CardContent>
            </Card>

            {/* Blitz */}
            <Card 
              className="game-card cursor-pointer relative overflow-hidden group"
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <CardTitle className="text-2xl font-black text-white neon-text">
                  БЛИЦ
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Гонка на время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Рекорд:</p>
                  <p className="text-3xl font-bold text-gaming-green neon-text">
                    {gameStats.blitzRecord} сек
                  </p>
                  <Badge variant="secondary" className="mt-2">
                    UserX держит рекорд
                  </Badge>
                </div>
                <Button 
                  className="w-full neon-button font-bold text-lg py-3"
                  onClick={() => playSound('victory')}
                >
                  РАЗРУШИТЬ ⚡
                </Button>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-gaming-blue to-gaming-green transition-opacity duration-300"></div>
              </CardContent>
            </Card>

            {/* Royal Battle */}
            <Card 
              className="game-card cursor-pointer relative overflow-hidden group"
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">👑</div>
                <CardTitle className="text-2xl font-black text-white neon-text">
                  КОРОЛЕВСКАЯ БИТВА
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Только один останется
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Последний король:</p>
                  <p className="text-xl font-bold text-gaming-yellow neon-text">
                    👑 {gameStats.lastWinner}
                  </p>
                  <Badge variant="outline" className="mt-2 border-gaming-yellow text-gaming-yellow">
                    {gameStats.battleWins} побед
                  </Badge>
                </div>
                <Button 
                  className="w-full neon-button font-bold text-lg py-3"
                  onClick={() => playSound('victory')}
                >
                  БИТВА! ⚔️
                </Button>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-gaming-yellow to-gaming-purple transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Player Profile Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-black text-white text-center mb-12 neon-text">
              КАРТА ДОСТИЖЕНИЙ
            </h3>
            
            <Card className="game-card">
              <CardHeader>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gaming-blue to-gaming-purple flex items-center justify-center text-3xl animate-glow">
                      🎮
                    </div>
                    <Badge className="absolute -bottom-2 -right-2 bg-gaming-yellow text-black font-bold">
                      {currentUser.level}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-black text-white neon-text">
                      {currentUser.name}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-300">
                      Рейтинг: <span className="text-gaming-yellow font-bold">{currentUser.rating}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg bg-black/30">
                    <Icon name="Trophy" size={32} className="mx-auto mb-2 text-gaming-yellow" />
                    <p className="text-2xl font-bold text-white">{currentUser.wins}</p>
                    <p className="text-gray-400">Побед</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-black/30">
                    <Icon name="Target" size={32} className="mx-auto mb-2 text-gaming-red" />
                    <p className="text-2xl font-bold text-white">{currentUser.losses}</p>
                    <p className="text-gray-400">Поражений</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-black/30">
                    <Icon name="Zap" size={32} className="mx-auto mb-2 text-gaming-green" />
                    <p className="text-2xl font-bold text-white">{currentUser.streak}</p>
                    <p className="text-gray-400">Серия</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-semibold">Прогресс до следующего уровня</span>
                      <span className="text-gaming-blue">73%</span>
                    </div>
                    <Progress value={73} className="h-3" />
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Badge variant="outline" className="border-gaming-blue text-gaming-blue px-4 py-2">
                    🏆 Король блица
                  </Badge>
                  <Badge variant="outline" className="border-gaming-green text-gaming-green px-4 py-2">
                    ⚡ Непобедимый
                  </Badge>
                  <Badge variant="outline" className="border-gaming-yellow text-gaming-yellow px-4 py-2">
                    🎯 Марафонец
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gaming-blue/20 bg-black/40 backdrop-blur-md mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-4 neon-text">
              Готов бросить вызов миру? 🌍
            </h4>
            <p className="text-gray-400 mb-6">
              Присоединяйся к тысячам игроков в эпической битве за звание лучшего!
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm" className="text-gaming-blue hover:text-white">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Discord
              </Button>
              <Button variant="ghost" size="sm" className="text-gaming-blue hover:text-white">
                <Icon name="Youtube" size={20} className="mr-2" />
                YouTube
              </Button>
              <Button variant="ghost" size="sm" className="text-gaming-blue hover:text-white">
                <Icon name="Twitter" size={20} className="mr-2" />
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;