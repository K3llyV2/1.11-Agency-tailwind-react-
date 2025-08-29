import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsScetion } from "../components/ProjectsSection";
import { ContactsSection } from "../components/ContactsSection";
import { Footer } from "../components/Footer";


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
            {/*THEME TOGGLE*/} 
            
            <ThemeToggle />


            {/*BACKGROUND*/}
            <StarBackground/>

            {/*NAVBAR*/}

            <Navbar />

            {/*MAIN CONTENT*/}

            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection/>
                <ProjectsScetion/>
                <ContactsSection/>
            </main>

            {/*FOOTER*/}
                <Footer/>
        
        </div>
    );    
};

export default  Home
  