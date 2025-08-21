import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
    const [projects, setProjects] = useState([]);
    const [coords, setCoords] = useState({ x: '0000', y: '0000', t: '00:00' });

    useEffect(() => {
        // Fetch projects from API
        axios.get('/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });

        // Mouse move handler
        const handleMouseMove = (e) => {
            setCoords(prev => ({
                ...prev,
                x: String(e.clientX).padStart(4, '0'),
                y: String(e.clientY).padStart(4, '0')
            }));

            // Create star trail
            if (Math.random() > 0.8) {
                const trail = document.createElement('div');
                trail.className = 'star-trail';
                trail.style.left = e.clientX + 'px';
                trail.style.top = e.clientY + 'px';
                document.body.appendChild(trail);
                
                setTimeout(() => trail.remove(), 1000);
            }
        };

        // Time update
        const updateTime = () => {
            const now = new Date();
            const time = now.getHours().toString().padStart(2, '0') + ':' + 
                         now.getMinutes().toString().padStart(2, '0');
            setCoords(prev => ({ ...prev, t: time }));
        };

        const timeInterval = setInterval(updateTime, 1000);
        updateTime();

        document.addEventListener('mousemove', handleMouseMove);

        // Random glitch effect
        const glitchInterval = setInterval(() => {
            const glitchables = document.querySelectorAll('.cosmic-title');
            glitchables.forEach(el => {
                if (Math.random() > 0.95) {
                    el.style.animation = 'none';
                    setTimeout(() => {
                        el.style.animation = '';
                    }, 100);
                }
            });
        }, 3000);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            clearInterval(timeInterval);
            clearInterval(glitchInterval);
        };
    }, []);

    const handleOrbitClick = (index) => {
        document.querySelectorAll('.orbit-point').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.orbit-point')[index].classList.add('active');
        
        const sections = document.querySelectorAll('.transmission');
        if (sections[index]) {
            sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <>
            {/* Cosmos Background */}
            <div className="cosmos">
                <div className="starfield"></div>
                <div className="darkness-overlay"></div>
            </div>

            {/* Orbital Navigation */}
            <nav className="orbital-nav">
                <div className="orbit-point active" data-label="transmission" onClick={() => handleOrbitClick(0)}></div>
                <div className="orbit-point" data-label="experiments" onClick={() => handleOrbitClick(1)}></div>
                <div className="orbit-point" data-label="coordinates" onClick={() => handleOrbitClick(2)}></div>
            </nav>

            {/* Main Stage */}
            <div className="stage">
                <div className="exploration-card">
                    {/* Transmission Section with Golden Record */}
                    <div className="transmission header-transmission" style={{animationDelay: '0.2s'}}>
                        <div className="transmission-content">
                            <div className="transmission-text">
                                <div className="transmission-header">incoming transmission</div>
                                <h1 className="cosmic-title glitch" data-text="Ever Explorations">Ever Explorations</h1>
                                <p className="subtitle">Digital Workshop & Creative Playground</p>
                            </div>
                            <div className="golden-record">
                                <img src="/images/explore.png" alt="Explorer Diagram" />
                            </div>
                        </div>
                    </div>

                    <div className="transmission" style={{animationDelay: '0.6s'}}>
                        <div className="transmission-header">message decode</div>
                        <p className="exploration-text">
                            Welcome to my digital workshop—a place where curiosity leads and perfection takes a backseat to discovery.
                        </p>
                        <p className="exploration-text">
                            Ever Explorations is my personal playground for ideas that won't sit still. Here, you'll find coding experiments 
                            that started as "what if?" questions, AI projects born from late-night wonderings, and various technical 
                            adventures that caught my imagination.
                        </p>
                        <p className="exploration-text">
                            Nothing here is ever truly finished, because the joy is in the journey of building, breaking, and rebuilding.
                            I'm a tinkerer at heart. I love getting lost in code, chasing down weird bugs, and staying up too late because 
                            I just need to see if something works.
                        </p>
                        <p className="exploration-text">
                            Every project here is perpetually in beta, constantly evolving as I learn something new. That's the beauty of it. 
                            There's no pressure to ship a polished product, just the freedom to experiment and the excitement of sharing 
                            discoveries along the way.
                        </p>
                        <p className="exploration-text">
                            Whether you're a fellow explorer or just curious about what I'm up to, I hope you'll find something here that 
                            sparks your own sense of wonder. The best discoveries often come from simply asking, "I wonder what would happen if..."
                        </p>
                        <p className="signature">
                            Ever exploring,<br />
                            Courtney
                        </p>
                    </div>

                    {/* Projects Section */}
                    <div className="transmission" style={{animationDelay: '1s'}}>
                        <div className="transmission-header">active experiments</div>
                        
                        {projects.length > 0 ? (
                            <div className="project-constellation">
                                {projects.map(project => (
                                    <Link to="/project/e1" key={project.id} className="project-star-link">
                                        <div className="project-star">
                                            <h3 className="project-name">{project.name}</h3>
                                            <span className="project-status">{project.status}</span>
                                            <p className="project-description">{project.description}</p>
                                            <div className="project-links">
                                                <span className="project-link">View Project</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="exploration-text" style={{textAlign: 'center', opacity: 0.5}}>
                                // New experiments loading...
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Coordinates Display */}
            <div className="coordinates">
                <div className="coord-line">X: <span id="coord-x">{coords.x}</span></div>
                <div className="coord-line">Y: <span id="coord-y">{coords.y}</span></div>
                <div className="coord-line">T: <span id="coord-t">{coords.t}</span></div>
            </div>

            {/* ASCII Art */}
            <div className="ascii-art">
                {`╔═══╗
║ E ║
╚═══╝`}
            </div>
        </>
    );
}

export default HomePage;