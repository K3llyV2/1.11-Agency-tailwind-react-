import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects=[
    {
        id:1,
        title:"On-witi Landing Page",
        description:"A responsive landing page for On-witi, a fictional tech startup, built using React and Tailwind CSS",
        image:"/projects/web1 image.png",
        tags:["React","Tailwind","Responsive"],
        demoURL:"#",
        githubURL:"#",
    },

    {
        id:2,
        title:"E-commerce Website",
        description:"A full-featured e-commerce website with product listings, shopping cart, and checkout functionality, built using Next.js and Stripe for payments.",
        image:"/projects/web 2 image.png",
        tags:["Next.js","Stripe","E-commerce"],
        demoURL:"#",
        githubURL:"#",
    },

    {
        id:3,
        title:"Portfolio Website",
        description:"A personal portfolio website to showcase projects and skills, built using Gatsby and GraphQL for data management.",
        image:"/projects/web 3 image.png",
        tags:["Gatsby","GraphQL","Portfolio"],
        demoURL:"#",
        githubURL:"#",
    }

];



export const ProjectsScetion = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured 
                    <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-lg mb-12 text-muted-foreground">
                    A selection of my recent work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key)=>(
                        <div 
                            key={key}
                            className=" group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 border-none " >
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag, key) => (
                                            <span 
                                                className=" px-2 py-1 text-xs border font-medium rounded-full bg-secondary/50 text-muted-foreground" 
                                                key={key}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                        <div className="flex space-x-3 ">
                                            <a 
                                                href={project.demoURL}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                                            >                                        
                                                <ExternalLink size={20}/>
                                            </a>
                                            <a 
                                                href={project.githubURL}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                                            >                                    
                                                <GithubIcon size={20}/>
                                            </a>
                                        </div>
                                </div>  
                            </div>
                        </div>    
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a                         
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com"
                    > 
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>

        </section>

    );
};