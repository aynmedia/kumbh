/** @format */

import Hero from './components/hero';
import Quote from './components/quote';
import Calltoaction from './components/calltoaction';
import ProgramDetails from './components/statements';
import GuidanceSection from './components/guidance';
import YagnaSchedule from './components/schedule';
import SpiritualJourneyDetails from './components/participate';
import PersonalSession from './components/personalsession';

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <Calltoaction />
      <ProgramDetails />
      <GuidanceSection />
      <YagnaSchedule />
      <SpiritualJourneyDetails />
      <PersonalSession />
    </>
  );
}
