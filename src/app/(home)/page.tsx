
import { AboutSection, Blogs, Clients , Counter , HeroSection, Purpose, Services } from "../components";
import FormSection from "../components/shared/FormSection";
import Portfolio from "./components/Portfolio";




export default function Home() {
  return (
    <div className="overflow-hidden">
      <h1 className="hidden">Fadaa Marketing Agency</h1>
      <HeroSection/>
      <Counter/>
      <AboutSection/>
      <Purpose/>
      <Services/>
      <Portfolio/>
      <Clients/>
      
      
      <Blogs/>
      
      <FormSection firstClass="bg-primary" secondClass=""/>
    </div>
  );
}
