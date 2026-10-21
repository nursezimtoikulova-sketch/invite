import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Greeting } from "./components/Greeting";
import { Countdown } from "./components/Countdown";
import { Program } from "./components/Program";
import { Dastarkon } from "./components/Dastarkon";
import { DressCode } from "./components/DressCode";
import { Location } from "./components/Location";
import { RSVP } from "./components/RSVP";
import { Contacts } from "./components/Contacts";
import { MusicPlayer } from "./components/MusicPlayer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Greeting />
        <Countdown />
        <Program />
        <Dastarkon />
        <DressCode />
        <Location />
        <RSVP />
        <Contacts />
      </main>
      <MusicPlayer />
    </div>
  );
}
