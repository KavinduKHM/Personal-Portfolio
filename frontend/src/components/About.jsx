import "../styles/styles.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Server, Layers, Atom, Heart, Smartphone, Wrench, CheckCircle } from "lucide-react";

export default function About() {
  const skillCards = [
    { key: "backend", title: "Backend Development", content: "Node.js, Express.js, Java, MongoDB, PHP, JavaScript, SQL, C++" },
    { key: "technologies", title: "Technologies", content: "MERN, SpringBoot, Microservices, Docker, Kubernetes, AWS" },
    { key: "frontend", title: "Frontend Development", content: "React.js, Next.js, JavaScript, HTML5/CSS, Tailwind CSS, Bootstrap" },
    { key: "soft", title: "Soft Skills", content: "Leadership, Critical Thinking, Problem Solving, Quick Learning, Project Management, Team Work, Communication, Adaptability, Experimenting" },
    { key: "mobile", title: "Mobile App Development", content: "Kotlin, Java, Android Studio" },
    { key: "tools", title: "Tools & Environment", content: "Git, GitHub, VS Code, IntelliJ IDEA, Android Studio, Postman, Jira, Trello, Figma, Canva" },
    { key: "qa", title: "QA Testing", content: "Postman, SDLC, Test Case Writing" },
  ];

  return (
    <section id="about" className="about-page" style={{ position: 'relative', zIndex: 2 }}>
      <div className="aurora-root" aria-hidden>
        <div className="aurora-blob one" />
        <div className="aurora-blob two" />
      </div>
      <div className="grain-overlay" aria-hidden />

      <div className="container about-hero">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-eyebrow"><span style={{width:8,height:8,background:'var(--accent)',borderRadius:8,display:'inline-block',boxShadow:'0 0 10px var(--accent)'}}></span><span>01 / Introduction</span></div>
            <div className="glass glass-strong" style={{padding:14,display:'inline-block',marginTop:12}}>Available for opportunities</div>
            <motion.h1 className="hero-title" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>About <span className="accent">Me.</span></motion.h1>
            <p className="hero-lede">Software Engineering undergraduate with a strong academic foundation and a passion for building efficient, scalable applications. Continuously learning and adapting to new technologies while applying theoretical concepts through practical projects. A collaborative team player focused on delivering quality solutions and growing as a professional software developer.</p>

            <div className="hero-ctas">
              <a className="btn-primary-gradient" href="#contact">Hire Me ↗</a>
              <Link to="/projects" className="btn-glass">My Projects</Link>
            </div>
          </div>

          <div className="hero-portrait">
            <motion.div className="portrait-card glass-strong" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 120 }}>
              <div className="portrait-inner">
                <img src="/photos/My2.JPG" alt="Profile" style={{width:'100%',display:'block',height: '100%', objectFit:'cover'}} />
              </div>
              <div className="portrait-overlay glass" style={{background:'linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))'}}>
                <div style={{display:'flex',alignItems:'center',gap:8}}><strong style={{fontSize:12,fontFamily:'JetBrains Mono'}}>ENGINEER</strong><span style={{fontStyle:'italic',fontFamily:'Fraunces'}}>Full-stack</span></div>
                <div style={{fontFamily:'JetBrains Mono',fontSize:12,color:'var(--muted)'}}>Open to work</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container" style={{marginTop:28}}>
        <div className="glass-strong stats-strip">
          <div className="stat"><div className="stat-number">4+</div><div className="stat-label">Years Coding</div></div>
          <div className="stat"><div className="stat-number">15+</div><div className="stat-label">Projects Built</div></div>
          <div className="stat"><div className="stat-number">5+</div><div className="stat-label">Technologies</div></div>
          <div className="stat"><div className="stat-number">∞</div><div className="stat-label">Curiosity</div></div>
        </div>
      </div>

      <div className="container marquee" style={{marginTop:22}}>
        <div className="marquee-track" aria-hidden>
          {['React.js','Node.js','TypeScript','Next.js','MongoDB','Tailwind CSS','Express.js','Java','Kotlin','Docker','Kubernetes','AWS','SpringBoot','PHP','SQL','Git','Figma','Postman'].map((t,i)=> (
            <div key={i} className="marquee-item">{t} <span style={{color:'var(--accent)'}}>✦</span></div>
          ))}
          {['React.js','Node.js','TypeScript','Next.js','MongoDB','Tailwind CSS','Express.js','Java','Kotlin','Docker','Kubernetes','AWS','SpringBoot','PHP','SQL','Git','Figma','Postman'].map((t,i)=> (
            <div key={'b'+i} className="marquee-item">{t} <span style={{color:'var(--accent)'}}>✦</span></div>
          ))}
        </div>
      </div>

      <div className="container" style={{marginTop:28}}>
        <h3 className="skills-title">Skills <span style={{fontStyle:'italic',fontFamily:'Fraunces',background:'linear-gradient(90deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',color:'transparent'}}>crafted</span> over time.</h3>
        <div className="bento-grid" style={{marginTop:18}}>
          <div className="bento-tile glass span-backend">
            <div className="tile-header"><div style={{display:'flex',alignItems:'center',gap:12}}><div className="tile-icon"><Server size={18} /></div><div className="tile-title">Backend Development</div></div><div className="tile-number" style={{fontFamily:'JetBrains Mono'}}>01</div></div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{skillCards[0].content.split(',').map(s=> <motion.div key={s} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="chip">{s.trim()}</motion.div>)}</div>
          </div>

          <div className="bento-tile glass span-frontend">
            <div className="tile-header"><div style={{display:'flex',alignItems:'center',gap:12}}><div className="tile-icon"><Atom size={18} /></div><div className="tile-title">Frontend Development</div></div><div className="tile-number" style={{fontFamily:'JetBrains Mono'}}>02</div></div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{skillCards[2].content.split(',').map(s=> <motion.div key={s} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="chip">{s.trim()}</motion.div>)}</div>
          </div>

          <div className="bento-tile glass span-technologies">
            <div className="tile-header"><div style={{display:'flex',alignItems:'center',gap:12}}><div className="tile-icon"><Layers size={18} /></div><div className="tile-title">Technologies</div></div><div className="tile-number" style={{fontFamily:'JetBrains Mono'}}>03</div></div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{skillCards[1].content.split(',').map(s=> <motion.div key={s} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="chip">{s.trim()}</motion.div>)}</div>
          </div>

          <div className="bento-tile glass span-soft">
            <div className="tile-header"><div style={{display:'flex',alignItems:'center',gap:12}}><div className="tile-icon"><Heart size={18} /></div><div className="tile-title">Soft Skills</div></div><div className="tile-number" style={{fontFamily:'JetBrains Mono'}}>04</div></div>
            <div style={{display:'flex',gap:8,flexDirection:'column'}}>{skillCards[3].content.split(',').map(s=> <div key={s} className="chip">{s.trim()}</div>)}</div>
          </div>

          <div className="bento-tile glass span-mobile">
            <div className="tile-header"><div style={{display:'flex',alignItems:'center',gap:12}}><div className="tile-icon"><Smartphone size={18} /></div><div className="tile-title">Mobile App Development</div></div><div className="tile-number" style={{fontFamily:'JetBrains Mono'}}>05</div></div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{skillCards[4].content.split(',').map(s=> <motion.div key={s} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="chip">{s.trim()}</motion.div>)}</div>
          </div>

          <div className="bento-tile glass span-tools">
            <div className="tile-header"><div style={{display:'flex',alignItems:'center',gap:12}}><div className="tile-icon"><Wrench size={18} /></div><div className="tile-title">Tools & Environment</div></div><div className="tile-number" style={{fontFamily:'JetBrains Mono'}}>06</div></div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{skillCards[5].content.split(',').map(s=> <motion.div key={s} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="chip">{s.trim()}</motion.div>)}</div>
          </div>

          <div className="bento-tile glass span-qa">
            <div className="tile-header"><div style={{display:'flex',alignItems:'center',gap:12}}><div className="tile-icon"><CheckCircle size={18} /></div><div className="tile-title">QA Testing</div></div><div className="tile-number" style={{fontFamily:'JetBrains Mono'}}>07</div></div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{skillCards[6].content.split(',').map(s=> <motion.div key={s} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="chip">{s.trim()}</motion.div>)}</div>
          </div>
        </div>
      </div>

      <div className="container" style={{marginTop:28}}>
        <h3 className="skills-title" style={{marginBottom:12}}>Beyond Code.</h3>
        <div className="beyond-grid">
          <div className="beyond-card glass"><div style={{fontFamily:'JetBrains Mono'}}>Currently Learning</div><div style={{fontFamily:'Fraunces',fontStyle:'italic',fontSize:20}}>Cloud Architecture & DevOps</div><div style={{fontFamily:'JetBrains Mono',marginTop:8}}>In progress</div></div>
          <div className="beyond-card glass"><div style={{fontFamily:'JetBrains Mono'}}>Open To</div><div style={{fontFamily:'Fraunces',fontStyle:'italic',fontSize:20}}>Full-time & Internship roles</div><div style={{fontFamily:'JetBrains Mono',marginTop:8}}>Worldwide</div></div>
          <div className="beyond-card glass"><div style={{fontFamily:'JetBrains Mono'}}>Based In</div><div style={{fontFamily:'Fraunces',fontStyle:'italic',fontSize:20}}>Available Remotely</div><div style={{fontFamily:'JetBrains Mono',marginTop:8}}>Any timezone</div></div>
        </div>
      </div>

      <div className="container" style={{marginTop:32, marginBottom:64}}>
        <div className="glass-strong cta-panel">
          <div>
            <div style={{fontFamily:'JetBrains Mono'}}>04 / Get in touch</div>
            <h2 style={{fontFamily:'Fraunces',fontSize:32}}>Let's build <span style={{fontStyle:'italic', background:'linear-gradient(90deg,var(--accent),var(--accent-2))', WebkitBackgroundClip:'text', color:'transparent'}}>something</span> together.</h2>
            <p style={{color:'var(--muted)'}}>Always open to interesting conversations, opportunities, and collaborations.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:8}}>
            <a href="mailto:you@example.com" className="btn-primary-gradient">Get in touch</a>
            <div style={{fontFamily:'JetBrains Mono',fontSize:12,color:'var(--muted)'}}>GitHub · LinkedIn · Email</div>
          </div>
        </div>
      </div>
    </section>
  );
}
