import { useState } from 'react';
import './Projects.css';

interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  liveLink?: string;
  githubLink: string;
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: ProjectData[] = [
    {
      id: 1,
      title: 'TechTriad',
      category: 'web',
      image: '/media/image.png',
      description: 'Web Development',
      liveLink: 'projects/edusahayak.html',
      githubLink: 'https://github.com/Arindamghosh32/techtriad'
    },
    {
      id: 2,
      title: 'Habit Tracker',
      category: 'web',
      image: '/media/WhatsApp Image 2025-08-17 at 10.27.23 AM.jpeg',
      description: 'PWA Development',
      liveLink: 'https://habit-tracker-frontend-two.vercel.app/',
      githubLink: 'https://github.com/Arindamghosh32/habit-tracker'
    },
    {
      id: 3,
      title: 'Relational Database',
      category: 'design',
      image: '/media/WhatsApp Image 2025-08-17 at 10.46.02 AM.jpeg',
      description: 'CLI Development',
      githubLink: 'https://github.com/Gourav-334/Tosbit'
    },
    {
      id: 4,
      title: 'Weather App',
      category: 'app',
      image: '/media/WhatsApp Image 2025-08-17 at 5.35.45 PM.jpeg',
      description: 'App Development(React Native)',
      githubLink: 'https://github.com/Arindamghosh32/Weatherapp'
    },
    {
      id: 5,
      title: 'House Chores',
      category: 'app',
      image: '/media/WhatsApp Image 2025-08-17 at 9.43.29 PM.jpeg',
      description: 'App Development',
      githubLink: 'https://github.com/Arindamghosh32/appreact_native'
    },
  ];

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('web')}
          >
            Web Development
          </button>
          <button 
            className={`filter-btn ${filter === 'app' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('app')}
          >
            App Development
          </button>
          <button 
            className={`filter-btn ${filter === 'design' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('design')}
          >
            CLI
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-link"></i>
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;