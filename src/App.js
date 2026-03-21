import { useState, useEffect, useRef } from "react";
import nikhilPhoto from "./nkhil_photo.jpeg";
import ai1 from "./CERTS/ai.png";
import ibm from "./CERTS/ibm.png";
import oracle from "./CERTS/oracle.png";
import python from "./CERTS/python.png";
import ml from "./CERTS/ml.png";
import ethical_hacking from "./CERTS/ethical.png";
import data_analytic from "./CERTS/ds.png";
import hr_internship from "./CERTS/hr.png";
import ai_internship from "./CERTS/swacha.png";
import app_expo from "./CERTS/app.png";
import AI_ML from "./CERTS/ai-ml.png";
import annadhaataVid from "./videos/annadhaatha.mp4";
import whatsappVid from "./videos/whatsapp.mp4";
import app_expo_project from "./videos/app_expo.mp4";
import irrigationVid from "./videos/irrigation.mp4";
import revenueVid from "./videos/revenu.mp4";
import khl_app from "./videos/klh.mp4";
import praVid from "./videos/pra.mp4";
import pra_img from "./pics/pra.png";  
import khl_img from "./pics/klh.png";
import annadhaata_img from "./pics/agri.png";
import whatsapp_img from "./pics/what.png";
import irrigation_img from "./pics/irri.png";
import revenue_img from "./pics/revenue.png";
import app_expo_img from "./pics/app_expo.png";
/* ═══════════════════════════════════════════════════════════
   DESIGN SYSTEM
   Fonts: Syne (display/headings) + JetBrains Mono (labels/code) + Outfit (body)
   Theme: Deep cosmos — near-black bg, electric cyan accent, violet-rose secondary
═══════════════════════════════════════════════════════════ */

const C = {
  bg0: "#020409", bg1: "#060b14", bg2: "#0a1120", bg3: "#0f1a30",
  cyan: "#00e5ff", cyan2: "#00b8cc", cyanDim: "#00e5ff22",
  violet: "#8b5cf6", violet2: "#6d28d9",
  rose: "#f43f5e", rose2: "#be123c",
  amber: "#f59e0b", amber2: "#d97706",
  emerald: "#10b981", emerald2: "#059669",
  sky: "#38bdf8",
  text: "#f0f6fc", muted: "rgba(240,246,252,0.5)", muted2: "rgba(240,246,252,0.22)",
  border: "rgba(0,229,255,0.07)", bord2: "rgba(0,229,255,0.18)", bord3: "rgba(0,229,255,0.35)",
};

const F = {
  display: "'Syne', sans-serif",
  mono: "'JetBrains Mono', monospace",
  body: "'Outfit', sans-serif",
};

/* ═══════════════════════════════════════════════════════════
   GLOBAL CSS
═══════════════════════════════════════════════════════════ */
const GLOBAL = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Outfit:wght@300;400;500;600;700&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Outfit',sans-serif;background:#020409;color:#f0f6fc;overflow-x:hidden}
::-webkit-scrollbar{width:2px}
::-webkit-scrollbar-track{background:#020409}
::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#00e5ff,#8b5cf6);border-radius:2px}
::selection{background:rgba(0,229,255,0.2);color:#f0f6fc}

/* NOISE TEXTURE OVERLAY */
body::before{content:'';position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.025;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  background-repeat:repeat;background-size:200px}

/* PARTICLE CANVAS */
#particle-canvas{position:fixed;inset:0;z-index:0;pointer-events:none}

/* ANIMATIONS */
@keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}33%{transform:translateY(-14px) rotate(1deg)}66%{transform:translateY(-6px) rotate(-1deg)}}
@keyframes spin-slow{to{transform:rotate(360deg)}}
@keyframes spin-rev{to{transform:rotate(-360deg)}}
@keyframes pulse-glow{0%,100%{box-shadow:0 0 0 0 rgba(0,229,255,.4)}50%{box-shadow:0 0 0 10px rgba(0,229,255,0)}}
@keyframes shimmer-x{to{background-position:200% center}}
@keyframes beam{0%{opacity:0;transform:scaleX(0)}50%{opacity:1}100%{opacity:0;transform:scaleX(1)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes scanline{0%{transform:translateY(-100%)}100%{transform:translateY(100vh)}}
@keyframes morphBg{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}}
@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes modalIn{from{opacity:0;transform:scale(.96) translateY(12px)}to{opacity:1;transform:scale(1) translateY(0)}}
@keyframes glitch1{0%,100%{clip-path:inset(0 0 100% 0)}10%{clip-path:inset(8% 0 82% 0)}20%{clip-path:inset(0 0 100% 0)}30%{clip-path:inset(22% 0 55% 0)}}
@keyframes countUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
@keyframes borderFlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

/* EXTRA BACKGROUND ANIMATIONS */
@keyframes nebula-drift{
  0%{transform:translate(0,0) scale(1);opacity:.55}
  33%{transform:translate(30px,-20px) scale(1.08);opacity:.7}
  66%{transform:translate(-15px,25px) scale(.96);opacity:.5}
  100%{transform:translate(0,0) scale(1);opacity:.55}
}
@keyframes aurora{
  0%{transform:translateX(0) skewX(0deg);opacity:.18}
  50%{transform:translateX(60px) skewX(6deg);opacity:.32}
  100%{transform:translateX(0) skewX(0deg);opacity:.18}
}
@keyframes hex-spin{
  0%{transform:rotate(0deg) scale(1)}
  50%{transform:rotate(180deg) scale(1.12)}
  100%{transform:rotate(360deg) scale(1)}
}
@keyframes star-pulse{
  0%,100%{opacity:0;transform:scale(0)}
  50%{opacity:1;transform:scale(1)}
}
@keyframes grid-breathe{
  0%,100%{opacity:.03}
  50%{opacity:.07}
}
@keyframes orb-wander{
  0%{transform:translate(0,0)}
  25%{transform:translate(40px,-30px)}
  50%{transform:translate(-20px,50px)}
  75%{transform:translate(60px,20px)}
  100%{transform:translate(0,0)}
}
@keyframes laser-h{
  0%{transform:scaleX(0);opacity:0}
  10%{opacity:.6}
  90%{opacity:.6}
  100%{transform:scaleX(1);opacity:0}
}
@keyframes laser-v{
  0%{transform:scaleY(0);opacity:0}
  10%{opacity:.4}
  90%{opacity:.4}
  100%{transform:scaleY(1);opacity:0}
}

/* BG LAYER ELEMENTS */
.bg-nebula{position:fixed;border-radius:50%;filter:blur(110px);pointer-events:none;z-index:0}
.bg-aurora{position:fixed;pointer-events:none;z-index:0;filter:blur(60px)}
.bg-ring{position:fixed;border-radius:50%;border:1px solid;pointer-events:none;z-index:0;opacity:.06}
.bg-laser-h{position:fixed;left:0;right:0;height:1px;pointer-events:none;z-index:0;transform-origin:left center}
.bg-laser-v{position:fixed;top:0;bottom:0;width:1px;pointer-events:none;z-index:0;transform-origin:center top}

/* REVEAL SYSTEM */
.rv{opacity:0;transform:translateY(22px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
.rvL{opacity:0;transform:translateX(-22px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
.rvR{opacity:0;transform:translateX(22px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
.rvS{opacity:0;transform:scale(.95);transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1)}
.rv.on,.rvL.on,.rvR.on,.rvS.on{opacity:1;transform:none}
.d1{transition-delay:.06s}.d2{transition-delay:.12s}.d3{transition-delay:.18s}
.d4{transition-delay:.24s}.d5{transition-delay:.30s}.d6{transition-delay:.36s}

/* NAV */
.navlink{color:rgba(240,246,252,.3);text-decoration:none;font-size:.65rem;font-weight:500;
  letter-spacing:.14em;text-transform:uppercase;transition:color .2s;position:relative;
  padding-bottom:3px;background:none;border:none;cursor:pointer;font-family:'JetBrains Mono',monospace}
.navlink::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;
  background:linear-gradient(90deg,#00e5ff,#8b5cf6);transition:width .3s cubic-bezier(.22,1,.36,1)}
.navlink:hover,.navlink.act{color:#f0f6fc}
.navlink:hover::after,.navlink.act::after{width:100%}
.navlink.act{color:#00e5ff}

/* HAMBURGER */
.ham span{display:block;width:22px;height:1px;background:#f0f6fc;
  transition:all .3s cubic-bezier(.22,1,.36,1);transform-origin:center}
.ham.open span:nth-child(1){transform:translateY(5.5px) rotate(45deg)}
.ham.open span:nth-child(2){opacity:0;transform:scaleX(0)}
.ham.open span:nth-child(3){transform:translateY(-5.5px) rotate(-45deg)}
.mobmenu{transform:translateX(100%);transition:transform .42s cubic-bezier(.22,1,.36,1)}
.mobmenu.open{transform:translateX(0)}
.moblink{font-family:'Syne',sans-serif;font-size:clamp(2rem,8vw,3.2rem);font-weight:800;
  color:rgba(240,246,252,.25);text-decoration:none;letter-spacing:-.03em;
  transition:color .2s,transform .25s;display:block;background:none;border:none;cursor:pointer}
.moblink:hover{color:#00e5ff;transform:translateX(12px)}

/* CARDS */
.pcard{transition:transform .3s cubic-bezier(.22,1,.36,1),border-color .25s,background .25s,box-shadow .3s}
.pcard:hover{transform:translateY(-6px);box-shadow:0 24px 48px rgba(0,0,0,.5)}
.skch{transition:all .2s cubic-bezier(.34,1.56,.64,1)}
.skch:hover{transform:scale(1.05)}
.educ{transition:transform .25s cubic-bezier(.22,1,.36,1),border-color .25s}
.educ:hover{transform:translateX(4px)}
.expc{transition:transform .25s cubic-bezier(.22,1,.36,1),border-color .25s}
.expc:hover{transform:translateX(4px)}
.ccrd{transition:transform .25s cubic-bezier(.22,1,.36,1),border-color .25s,background .25s}
.ccrd:hover{transform:translateX(4px)}
.ccrd:hover .ccarr{transform:translateX(4px);color:#00e5ff}
.ccarr{transition:transform .2s,color .2s}

/* BUTTONS */
.btnp{transition:transform .2s cubic-bezier(.34,1.56,.64,1),box-shadow .2s}
.btnp:hover{transform:translateY(-2px) scale(1.02);box-shadow:0 12px 32px rgba(0,229,255,.25)!important}
.btno{transition:transform .2s cubic-bezier(.34,1.56,.64,1),border-color .2s,background .2s}
.btno:hover{transform:translateY(-2px);border-color:rgba(0,229,255,.4)!important;background:rgba(0,229,255,.06)!important}
.chp{transition:transform .2s cubic-bezier(.34,1.56,.64,1),box-shadow .2s}
.chp:hover{transform:translateY(-2px);box-shadow:0 4px 16px rgba(0,229,255,.12)!important}
.footlink{transition:color .2s}
.footlink:hover{color:#00e5ff!important}
.picobtn{transition:border-color .2s,color .2s,background .2s}
.picobtn:hover{border-color:#00e5ff!important;color:#00e5ff!important;background:rgba(0,229,255,.08)!important}

/* MODAL */
.modal-scroll::-webkit-scrollbar{width:2px}
.modal-scroll::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#00e5ff,#8b5cf6);border-radius:2px}

/* MARQUEE */
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.marquee-track{animation:marquee 36s linear infinite}
.marquee-track:hover{animation-play-state:paused}

/* GLOWING BORDER */
.glow-border{position:relative}
.glow-border::before{content:'';position:absolute;inset:-1px;border-radius:inherit;
  padding:1px;background:linear-gradient(135deg,#00e5ff33,#8b5cf622,#00e5ff11);
  -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude}

/* SCAN LINE */
.scanline{position:fixed;inset:0;z-index:2;pointer-events:none;overflow:hidden;opacity:.03}
.scanline::after{content:'';position:absolute;left:0;right:0;height:2px;
  background:linear-gradient(transparent,#00e5ff,transparent);
  animation:scanline 8s linear infinite}

/* RESPONSIVE */
@media(max-width:900px){
  .desknav{display:none!important}
  .hambtn{display:flex!important}
  .abtgrid{grid-template-columns:1fr!important}
  .ctcgrid{grid-template-columns:1fr!important}
  .hero-inner{flex-direction:column!important;align-items:center!important}
  .hero-photo{order:-1!important;margin-bottom:2rem!important}
  .hero-left{align-items:center!important;text-align:center!important}
  .herobtns{justify-content:center!important}
  .hstats{justify-content:center!important}
}
@media(max-width:620px){
  .prjgrid{grid-template-columns:1fr!important}
  .skgrid{grid-template-columns:1fr 1fr!important}
  .crtgrid{grid-template-columns:1fr!important}
  .hstats{gap:1.5rem!important}
  .sval{font-size:1.9rem!important}
  .modalact{flex-direction:column!important}
  .herobtns{flex-direction:column!important;align-items:flex-start!important}
  .hero-photo-img{width:180px!important;height:210px!important}
}
@media(max-width:400px){
  .skgrid{grid-template-columns:1fr!important}
}
`;

/* ═══════════════════════════════════════════════════════════
   PARTICLE SYSTEM
═══════════════════════════════════════════════════════════ */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const stateRef = useRef({ particles: [], stars: [], shooters: [], rings: [] });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = window.innerWidth, H = window.innerHeight;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["#00e5ff", "#8b5cf6", "#f43f5e", "#f59e0b", "#38bdf8"];

    // ── Layered network particles ──
    const COUNT = Math.min(60, Math.floor((W * H) / 18000));
    stateRef.current.particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.5 + 0.3,
      clr: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.4 + 0.1,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.008 + Math.random() * 0.012,
      depth: Math.random(), // 0=far, 1=near
    }));

    // ── Twinkling background stars ──
    stateRef.current.stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 0.8 + 0.1,
      alpha: Math.random() * 0.5 + 0.05,
      pulse: Math.random() * Math.PI * 2,
      ps: 0.005 + Math.random() * 0.02,
    }));

    // ── Shooting stars ──
    const newShooter = () => ({
      x: Math.random() * W * 0.6,
      y: Math.random() * H * 0.4,
      vx: 6 + Math.random() * 5,
      vy: 2 + Math.random() * 3,
      len: 80 + Math.random() * 120,
      alpha: 1,
      life: 0,
      maxLife: 60 + Math.random() * 40,
      clr: COLORS[Math.floor(Math.random() * COLORS.length)],
    });
    stateRef.current.shooters = [];
    let shooterTimer = 0;

    // ── Floating hex/diamond rings ──
    stateRef.current.rings = Array.from({ length: 4 }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 40 + i * 28,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (0.002 + Math.random() * 0.004) * (Math.random() > 0.5 ? 1 : -1),
      clr: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      alpha: 0.04 + Math.random() * 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const { particles, stars, shooters, rings } = stateRef.current;

      // ── Stars ──
      stars.forEach(s => {
        s.pulse += s.ps;
        const a = s.alpha * (0.5 + 0.5 * Math.sin(s.pulse));
        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      });

      // ── Floating hex rings ──
      rings.forEach(ring => {
        ring.rot += ring.rotSpeed;
        ring.x += ring.vx; ring.y += ring.vy;
        if (ring.x < -ring.r) ring.x = W + ring.r;
        if (ring.x > W + ring.r) ring.x = -ring.r;
        if (ring.y < -ring.r) ring.y = H + ring.r;
        if (ring.y > H + ring.r) ring.y = -ring.r;

        ctx.save();
        ctx.globalAlpha = ring.alpha;
        ctx.translate(ring.x, ring.y);
        ctx.rotate(ring.rot);
        ctx.beginPath();
        for (let k = 0; k < 6; k++) {
          const angle = (k / 6) * Math.PI * 2;
          const px = Math.cos(angle) * ring.r;
          const py = Math.sin(angle) * ring.r;
          k === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = ring.clr;
        ctx.lineWidth = 0.7;
        ctx.stroke();
        ctx.restore();
      });

      // ── Shooting stars ──
      shooterTimer++;
      if (shooterTimer > 180 + Math.random() * 240) {
        shooters.push(newShooter());
        shooterTimer = 0;
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.life++;
        s.alpha = Math.max(0, 1 - s.life / s.maxLife);
        s.x += s.vx; s.y += s.vy;

        // Head — bright point
        ctx.globalAlpha = s.alpha * 0.9;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = s.clr;
        ctx.fill();

        // Tail — fading line
        ctx.globalAlpha = s.alpha * 0.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * (s.len / 7), s.y - s.vy * (s.len / 7));
        ctx.strokeStyle = s.clr;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.globalAlpha = s.alpha * 0.15;
        ctx.beginPath();
        ctx.moveTo(s.x - s.vx * (s.len / 7), s.y - s.vy * (s.len / 7));
        ctx.lineTo(s.x - s.vx * (s.len / 3), s.y - s.vy * (s.len / 3));
        ctx.lineWidth = 0.6;
        ctx.stroke();

        if (s.life >= s.maxLife) shooters.splice(i, 1);
      }

      // ── Depth connections ──
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;
          if (dist < maxDist) {
            const depthFactor = (particles[i].depth + particles[j].depth) / 2;
            ctx.globalAlpha = 0.05 * (1 - dist / maxDist) * depthFactor;
            ctx.beginPath();
            ctx.strokeStyle = "#00e5ff";
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // ── Particles ──
      particles.forEach(p => {
        p.pulse += p.pulseSpeed;
        p.x += p.vx * (0.5 + p.depth * 0.5);
        p.y += p.vy * (0.5 + p.depth * 0.5);
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        const alpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.5 + p.depth * 0.7), 0, Math.PI * 2);
        ctx.fillStyle = p.clr;
        ctx.fill();

        // Glow on near particles
        if (p.depth > 0.7) {
          ctx.globalAlpha = alpha * 0.3;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = p.clr;
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */
const SKILLS = [
  { cat: "Languages", clr: C.cyan, items: ["Python", "JavaScript", "Java"] },
  { cat: "Frontend", clr: C.violet, items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { cat: "Backend", clr: C.amber, items: ["Flask", "Spring Boot", "REST APIs", "MVC", "CRUD"] },
  { cat: "Databases", clr: C.rose, items: ["MySQL", "MongoDB"] },
  { cat: "Tools & DevOps", clr: C.sky, items: ["Git", "GitHub", "Docker", "VS Code", "IntelliJ IDEA", "Firebase"] },
  { cat: "Integrations", clr: C.emerald, items: ["Stripe", "Twilio SMS", "OpenWeather API", "Gemini AI", "SMTP / Email", "Firebase Auth", "Firebase Firestore"] },
  { cat: "AI / ML", clr: "#a78bfa", items: ["scikit-learn", "TensorFlow", "Pandas", "Matplotlib", "Power BI"] },
  { cat: "Soft Skills", clr: "#94a3b8", items: ["Leadership", "Planning", "Teamwork", "Problem Solving"] },
];

const PROJECTS = [
  {
    clr: C.cyan, icon: "🌾",
    name: "Annadhaata Agent", tag: "AI Smart Agriculture Platform",
    short: "Full-stack AI platform delivering crop recommendations, plant disease detection, yield prediction, and live market insights for Indian farmers.",
    tech: ["Python", "Flask", "React.js", "MySQL", "ML"],
    video: annadhaataVid,
    gh: "https://github.com/nikhil-1642/annadhaata-agent",
    demo: "https://github.com/nikhil-1642/annadhaata-agent",
    role: "Full Stack ML Developer",
    img:annadhaata_img,
    overview: "Annadhaata Agent is a comprehensive AI-powered smart agriculture platform engineered to help Indian farmers make data-driven decisions across the full crop lifecycle — from soil analysis to market price insights. Built with a Flask REST API backend and a React.js SPA frontend, backed by a MySQL relational database.",
    features: [
      "Crop recommendation engine using soil parameters and real-time climate data",
      "Fertilizer optimization module to minimize cost and maximize yield",
      "ML-based smart irrigation scheduling with sensor integration support",
      "Plant disease detection via image upload and a CNN inference model",
      "Yield prediction combining historical data with real-time environmental inputs",
      "Live market price lookup and profit estimation per crop type",
      "Secure JWT-based user authentication with role-based access control",
      "Flask REST API backend · React.js SPA frontend · MySQL relational schema",
    ],
  },
  
  {
    clr: C.amber, icon: "🛵",
    name: "Multi vendor System", tag: "Multi-Role Mobile Delivery App",
    short: "Cross-platform Flutter app with three distinct dashboards — customer, shop owner, and delivery personnel — featuring live map tracking and order management.",
    tech: ["Flutter", "Dart", "REST APIs", "Python", "Google Maps"],
    gh: "https://github.com/nikhil-1642/flutter",
    demo: "https://github.com/nikhil-1642/flutter",
    role: "Mobile Application Developer",
    video: app_expo_project,
    img: app_expo_img,
    overview: "A production-grade multi-role Flutter application built for a local pickle business, featuring three distinct dashboards — customer, shop owner, and delivery person — each powered by a Python REST API backend with live map-based tracking.",
    features: [
      "Customer dashboard: product browsing, cart management, order placement & live tracking",
      "Shop owner dashboard: inventory management, order overview, delivery assignment",
      "Delivery dashboard: assigned orders view, real-time status updates, route navigation",
      "Google Maps SDK integration for live delivery location tracking",
      "Python REST API backend handling all business logic and data persistence",
      "Order history, push notifications, and downloadable invoice generation",
    ],
  },
  {
    clr: "#f97316", icon: "🎫",
    name: "KLH Ticket System", tag: "AI-Powered Customer Support Platform",
    short: "Full-stack support ticket platform with Gemini AI classification, automated email routing to specialist teams, order management, and real-time issue tracking.",
    tech: ["Python", "Flask", "MySQL", "Gemini AI", "React.js", "SMTP"],
    video: khl_app,
    img:khl_img,
    gh: "https://github.com/nikhil-1642/klh-ticket",
    demo: "https://github.com/nikhil-1642/klh-ticket",
    role: "Full Stack Developer & AI Integration Engineer",
    overview: "A production-grade AI-powered customer support platform for an e-commerce business. Customers raise tickets via a React.js frontend; Gemini AI automatically classifies the issue category, composes a professional response, and routes the ticket to the correct specialist team via SMTP — all in under two seconds.",
    features: [
      "Gemini AI classifies support issues into 6 categories with strict enum validation",
      "Natural language issue input auto-mapped to structured, routable ticket data",
      "Automated SMTP routing to Payment, Refund, Damage, or Pickup specialist teams",
      "AI-generated professional response email composed and dispatched with every ticket",
      "Full order management: place, track, cancel, and initiate return workflows",
      "Return requests trigger Gemini analysis and automatic team notification",
      "Duplicate order prevention via 15-second idempotency window",
      "Session-based authentication with Werkzeug bcrypt password hashing",
    ],
  },
  {
    clr: C.violet, icon: "💬",
    name: "WhatsApp Chat Analyzer", tag: "Data Analytics Web Application",
    short: "Upload any exported WhatsApp chat to get deep analytics — message trends, word frequency clouds, emoji usage stats, and interactive visual charts.",
    tech: ["Python", "Flask", "Pandas", "Matplotlib", "Plotly"],
    video: whatsappVid,
    img:whatsapp_img,
    gh: "https://github.com/nikhil-1642/whatsapp_chat_analysis",
    demo: "https://github.com/nikhil-1642/whatsapp_chat_analysis",
    role: "Data Analyst & Backend Developer",
    overview: "A Flask web application that parses raw exported WhatsApp chat files and generates rich, interactive analytics dashboards. Simply upload a .txt export to instantly visualise message patterns, activity heatmaps, and contributor statistics.",
    features: [
      "Parses raw WhatsApp .txt exports with robust Python preprocessing",
      "Message trend analysis across daily, weekly, and monthly timescales",
      "Word frequency heatmap and most-used vocabulary visualisation",
      "Per-user emoji usage statistics, frequency ranking, and emoji clouds",
      "Most-active user identification and contribution charts for group chats",
      "Interactive charts built with Matplotlib and Plotly for export-ready visuals",
    ],
  },
  {
    clr: C.rose, icon: "🛒",
    name: "Nikki Store", tag: "Production-Ready Flask REST API",
    short: "Fully featured Flask e-commerce backend with complete REST APIs for product catalog, cart, orders, and automated Twilio SMS order confirmations.",
    tech: ["Python", "Flask", "MySQL", "Twilio", "REST API"],
    gh: "https://github.com/nikhil-1642/prashanth",
    demo: "https://github.com/nikhil-1642/prashanth",
    role: "Backend Developer",
    video: praVid,
    img:pra_img,
    overview: "A production-grade e-commerce backend built with Flask and MySQL, exposing a complete REST API suite covering every shopping workflow — from product catalog discovery to order fulfilment — with automated SMS notifications on every transaction.",
    features: [
      "Full product catalog API with search, filter, sort, and pagination",
      "Cart management with dynamic quantity updates and price computation",
      "Order placement, real-time status tracking, and update endpoints",
      "Secure CRUD operations with comprehensive server-side input validation",
      "Twilio SMS confirmation dispatched automatically on every order",
      "Normalised MySQL schema with enforced relational integrity",
    ],
  },
  {
    clr: C.sky, icon: "💧",
    name: "Smart Irrigation System", tag: "IoT + ML Irrigation Prediction",
    short: "ML system predicting irrigation needs from real-time sensor data with automated Twilio SMS alerts to farmers — reducing water wastage by up to 40%.",
    tech: ["Python", "Flask", "Machine Learning", "Twilio", "IoT"],
    gh: "https://github.com/nikhil-1642/smart_irrigation",
    demo: "https://github.com/nikhil-1642/smart_irrigation",
    role: "ML Engineer & Backend Developer",
    video: irrigationVid,
    img:irrigation_img,
    overview: "An end-to-end ML system that analyses real-time soil moisture, temperature, and humidity sensor inputs to predict irrigation requirements. Farmers are notified instantly via Twilio SMS, significantly reducing water wastage and manual labour.",
    features: [
      "ML classifier trained on soil and weather sensor data with high accuracy",
      "Real-time Flask REST API for live sensor input ingestion and prediction",
      "Automated Twilio SMS alerts triggered when irrigation is required",
      "Lightweight Flask UI for manual data entry and threshold configuration",
      "Historical data logging and trend analysis dashboard",
      "Designed for plug-and-play IoT sensor integration at field scale",
    ],
  },
  {
    clr: "#06b6d4", icon: "📊",
    name: "Revenue & Customer Ageing", tag: "Power BI Executive Dashboard",
    short: "Interactive Power BI dashboard delivering revenue trend analysis and customer payment ageing buckets across 3 branches for executive decision-making.",
    tech: ["Power BI", "DAX", "Power Query", "Excel", "Data Modelling"],
    video: revenueVid,
    img:revenue_img,
    gh: "https://github.com/nikhil-1642/Revenue-and-Customer-Ageing",
    demo: "https://github.com/nikhil-1642/Revenue-and-Customer-Ageing",
    role: "BI Developer & Data Analyst",
    overview: "An end-to-end Power BI executive dashboard built for an equipment supply company operating across 3 branches. Covers revenue trend analysis and customer payment ageing — enabling prioritisation of overdue accounts and branch-level performance benchmarking.",
    features: [
      "Revenue analysis across 3 branches with dynamic time-period filtering",
      "Customer ageing report with automated overdue payment bucket classification",
      "Star schema data model built from identified fact and dimension tables",
      "Custom DAX measures for ageing bucket logic and revenue KPI calculations",
      "Power Query M transformations for data cleaning, shaping, and merging",
      "Interactive slicers for branch, customer segment, and date range filtering",
      "Dynamic visuals: bar charts, matrix tables, trend lines, KPI cards",
      "Executive-ready layout optimised for C-suite reporting and presentation",
    ],
  },
  
];

const INTERNSHIPS = [
  {
    clr: C.violet,
    role: "Software Development Intern — Tech Lead",
    company: "VISWAM.AI · Swecha Telangana",
    period: "May 2025 – Jul 2025",
    img: ai_internship,
    pts: [
      "Led backend development for a national-scale open-source AI platform using Python and REST APIs, coordinating delivery across a distributed team",
      "Mentored and code-reviewed junior interns on backend architecture, debugging strategies, and engineering best practices",
      "Contributed key modules to the VISWAM.AI platform, actively participating in sprint planning and stakeholder demos",
    ],
  },
  {
    clr: "#94a3b8",
    role: "HR Operations Intern",
    company: "Talentelse",
    period: "2024",
    img: hr_internship,
    pts: [
      "Supported end-to-end talent acquisition workflows: sourcing, screening, scheduling, and candidate communication",
      "Managed HR documentation, onboarding materials, and digital record-keeping for new hire cohorts",
      "Liaised with cross-functional teams to streamline people operations and improve process turnaround time",
    ],
  },
  {
    clr: C.cyan,
    role: "Python Full Stack Developer Intern",
    company: "EduSkills Academy",
    period: "Apr 2025 – Jun 2025",
    img: python,
    pts: [
      "Architected and delivered full-stack web modules using Python, Flask, React.js, and REST APIs, meeting all sprint deadlines in an Agile environment",
      "Designed and optimised MySQL relational schemas; improved query performance through indexing and query restructuring",
      "Produced production-ready, peer-reviewed code with documented APIs and unit test coverage",
    ],
  },
  {
    clr: "#a78bfa",
    role: "AI / ML Engineer Intern",
    company: "EduSkills Academy",
    period: "2025",
    img: AI_ML,
    pts: [
      "Built and fine-tuned machine learning models for real-world classification and regression tasks using Python, scikit-learn, and TensorFlow",
      "Designed end-to-end AI pipelines covering data ingestion, feature engineering, model training, evaluation, and inference serving",
      "Explored deep learning architectures (CNNs, MLPs) and applied them to project-level image and tabular datasets",
    ],
  },
  
];

const CERTS = [
  { icon: "🏆", clr: C.amber, bg: "rgba(245,158,11,.12)", name: "SPARKCAMP Runner-Up", iss: "AI Days 2025", img: ai1 },
  { icon: "🥈", clr: C.violet, bg: "rgba(139,92,246,.12)", name: "App Expo — 2nd Prize", iss: "Tech Sampratini 2026, NNRG", img: app_expo },
  { icon: "🤖", clr: C.sky, bg: "rgba(56,189,248,.12)", name: "AI Agent Architect", iss: "IBM", img: ibm },
  { icon: "🐍", clr: C.cyan, bg: "rgba(0,229,255,.12)", name: "Python Full Stack Developer", iss: "EduSkills Virtual Internship", img: python },
  { icon: "☁️", clr: C.rose, bg: "rgba(244,63,94,.12)", name: "Oracle AI Foundations", iss: "Oracle", img: oracle },
  { icon: "🧠", clr: "#a78bfa", bg: "rgba(167,139,250,.12)", name: "Introduction to Machine Learning", iss: "NPTEL", img: ml },
  { icon: "🔐", clr: "#e879f9", bg: "rgba(232,121,249,.12)", name: "Ethical Hacking", iss: "NPTEL", img: ethical_hacking },
  { icon: "📊", clr: C.emerald, bg: "rgba(16,185,129,.12)", name: "Data Analytics — Grade C", iss: "Infosys Foundation · ICT Academy", img: data_analytic },
  { icon: "🌐", clr: C.cyan, bg: "rgba(0,229,255,.12)", name: "AI Internship Certificate", iss: "VISWAM.AI", img: ai_internship },
  { icon: "👔", clr: "#94a3b8", bg: "rgba(148,163,184,.12)", name: "HR Internship Certificate", iss: "Talentelse", img: hr_internship },
  { icon: "🤖", clr: C.sky, bg: "rgba(56,189,248,.12)", name: "AI/ML Internship Certificate", iss: "EduSkills Virtual Internship", img: AI_ML },
];

const EDUCATION = [
  { degree: "B.Tech — Computer Science & Engineering", school: "Nalla Narsimha Reddy Educational Society Group of Institutions, Hyderabad", yr: "Aug 2022 – May 2026", score: "CGPA: 8.94 / 10", clr: C.cyan },
  { degree: "Intermediate (MPC)", school: "Gnana Saraswathi Junior College", yr: "2020 – 2022", score: "804 / 1000", clr: C.amber },
  { degree: "SSC — Telangana State Board", school: "Krishnaveni Talent School, Nirmal", yr: "Batch 2020", score: "GPA: 9.7 / 10", clr: C.rose },
];

const ACHIEVEMENTS = [
  {
    clr: C.amber, icon: "🏆",
    title: "SPARKCAMP Runner-Up",
    event: "AI Days 2025",
    org: "AI Days — National Level",
    date: "2025",
    img: ai1,
    tag: "National Competition",
    tagClr: C.amber,
    desc: "Secured Runner-Up position at SPARKCAMP, a national-level AI innovation challenge hosted at AI Days 2025. Presented a fully working AI-powered solution evaluated on technical depth, real-world impact, scalability, and presentation quality by a panel of industry experts.",
    highlights: [
      "Competed against teams from top-ranked engineering institutions across India",
      "Presented a working AI prototype with live demonstration to expert judges",
      "Recognised for technical innovation, execution quality, and presentation clarity",
    ],
  },
  {
    clr: C.violet, icon: "🥈",
    title: "App Expo — 2nd Prize",
    event: "Tech Sampratini 2026",
    org: "NNRG — Tech Sampratini 2026",
    date: "2026",
    img: app_expo,
    tag: "Hackathon",
    tagClr: C.violet,
    desc: "Won 2nd Prize at the App Expo held during Tech Sampratini 2026 at NNRG. Showcased a fully functional, end-to-end application that was evaluated on UI/UX quality, feature completeness, technical stack sophistication, and real-world applicability.",
    highlights: [
      "Developed and demonstrated a complete full-stack application within competition constraints",
      "Judged on UI/UX design quality, technical depth, and overall innovation",
      "Competed against final-year project teams from multiple departments",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════════════════════ */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -28px 0px" }
    );
    document.querySelectorAll(".rv,.rvL,.rvR,.rvS").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useNavState() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 32);
      const secs = ["about", "skills", "projects", "experience", "achievements", "certifications", "contact"];
      for (let i = secs.length - 1; i >= 0; i--) {
        const el = document.getElementById(secs[i]);
        if (el && el.getBoundingClientRect().top < 130) { setActive(secs[i]); return; }
      }
      setActive("");
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return { scrolled, active };
}

/* ═══════════════════════════════════════════════════════════
   ATOMS
═══════════════════════════════════════════════════════════ */
function Pill({ clr = C.cyan, children, sm }) {
  return (
    <span style={{
      fontFamily: F.mono, fontSize: sm ? ".56rem" : ".62rem", fontWeight: 400,
      padding: sm ? "2px 8px" : "3px 10px", borderRadius: 4,
      background: `${clr}12`, color: clr, border: `0.5px solid ${clr}28`,
      letterSpacing: ".04em",
    }}>{children}</span>
  );
}

function MonoLabel({ children, clr = C.cyan, style: ex }) {
  return (
    <p className="rv" style={{
      fontFamily: F.mono, fontSize: ".62rem", fontWeight: 400,
      color: clr, letterSpacing: ".18em", textTransform: "uppercase",
      display: "flex", alignItems: "center", gap: 12, marginBottom: ".85rem", ...ex,
    }}>
      <span style={{ width: 28, height: 1, background: `linear-gradient(90deg,${clr},${clr}44)`, display: "inline-block", flexShrink: 0 }} />
      {children}
      <span style={{ width: 16, height: 1, background: `linear-gradient(90deg,${clr}44,transparent)`, display: "inline-block", flexShrink: 0 }} />
    </p>
  );
}

function DisplayTitle({ children, delay = "d1", style: ex }) {
  return (
    <h2 className={`rv ${delay}`} style={{
      fontFamily: F.display,
      fontSize: "clamp(2rem,4.5vw,3.4rem)",
      fontWeight: 800, letterSpacing: "-.03em",
      lineHeight: 1.08, marginBottom: "clamp(2rem,4vh,3.5rem)",
      color: C.text, ...ex,
    }}>{children}</h2>
  );
}

function BtnP({ href, onClick, children, sm, style: ex }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: sm ? "9px 20px" : "clamp(11px,1.5vw,14px) clamp(22px,3vw,32px)",
    background: `linear-gradient(135deg, ${C.cyan}, ${C.cyan2})`,
    color: C.bg0, border: "none", borderRadius: 6,
    fontFamily: F.body, fontSize: sm ? ".76rem" : ".875rem", fontWeight: 600,
    cursor: "pointer", textDecoration: "none", lineHeight: 1,
    position: "relative", overflow: "hidden", ...ex,
  };
  return href
    ? <a href={href} target="_blank" rel="noreferrer" style={base} className="btnp">{children}</a>
    : <button onClick={onClick} style={base} className="btnp">{children}</button>;
}

function BtnO({ href, onClick, children, sm, style: ex }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: sm ? "9px 20px" : "clamp(11px,1.5vw,14px) clamp(22px,3vw,32px)",
    background: "transparent", color: C.text, border: `0.5px solid ${C.bord2}`, borderRadius: 6,
    fontFamily: F.body, fontSize: sm ? ".76rem" : ".875rem", fontWeight: 500,
    cursor: "pointer", textDecoration: "none", lineHeight: 1, ...ex,
  };
  return href
    ? <a href={href} target="_blank" rel="noreferrer" style={base} className="btno">{children}</a>
    : <button onClick={onClick} style={base} className="btno">{children}</button>;
}

const HR = () => (
  <div style={{ padding: "0 clamp(1.2rem,6vw,3.5rem)" }}>
    <div style={{ height: ".5px", background: `linear-gradient(90deg,transparent,${C.border} 20%,${C.bord2} 50%,${C.border} 80%,transparent)`, maxWidth: 1200, margin: "0 auto" }} />
  </div>
);

/* ═══════════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════════ */
function Nav() {
  const { scrolled, active } = useNavState();
  const [open, setOpen] = useState(false);
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  const links = ["about", "skills", "projects", "experience", "achievements", "certifications", "contact"];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(1.2rem,5vw,3rem)", height: 60,
        background: scrolled ? "rgba(2,4,9,.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? `0.5px solid ${C.border}` : "none",
        transition: "all .4s cubic-bezier(.22,1,.36,1)",
      }}>
        <a href="#hero" style={{
          fontFamily: F.display, fontWeight: 800, fontSize: "1.2rem",
          color: C.cyan, textDecoration: "none", letterSpacing: ".08em",
          textTransform: "uppercase",
        }}>PN<span style={{ color: C.violet }}>.</span></a>

        <ul className="desknav" style={{ display: "flex", gap: "clamp(1.4rem,2.5vw,2.4rem)", listStyle: "none" }}>
          {links.map(l => (
            <li key={l}>
              <button onClick={() => go(l)} className={`navlink${active === l ? " act" : ""}`}>{l}</button>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(o => !o)} className={`ham hambtn${open ? " open" : ""}`}
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}
          aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobmenu${open ? " open" : ""}`} style={{
        position: "fixed", inset: 0, zIndex: 400,
        background: "rgba(2,4,9,.97)", backdropFilter: "blur(28px)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: "clamp(1.2rem,3.5vh,2rem)",
      }}>
        {/* Decorative bg element */}
        <div style={{
          position: "absolute", width: 400, height: 400,
          background: `radial-gradient(circle,${C.cyan}08 0%,transparent 70%)`,
          borderRadius: "50%", pointerEvents: "none",
        }} />
        {links.map(l => (
          <button key={l} onClick={() => go(l)} className="moblink">
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </button>
        ))}
      </div>
    </>
  );
}

const HERO_ROLES = ["Python Full Stack Developer", "Mobile App Developer","Java Developer", "AI / ML Engineer", "Data Analyst"];

/* ═══════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════ */
function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const charIdx = useRef(0);

  useEffect(() => {
    let timeout;
    const current = HERO_ROLES[roleIdx];
    if (typing) {
      if (charIdx.current < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx.current + 1));
          charIdx.current++;
        }, 55);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (charIdx.current > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx.current - 1));
          charIdx.current--;
        }, 28);
      } else {
        charIdx.current = 0;
        setRoleIdx(i => (i + 1) % HERO_ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="hero" style={{
      minHeight: "100dvh", display: "grid", gridTemplateRows: "1fr auto",
      padding: "0 clamp(1.2rem,6vw,3.5rem)", paddingTop: 60,
      position: "relative", overflow: "hidden",
    }}>
      {/* Animated mesh gradient */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 60% 50% at 20% 30%, ${C.cyan}07 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 80% 20%, ${C.violet}06 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 70% 80%, ${C.rose}05 0%, transparent 60%)
        `,
      }} />

      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(${C.cyan}04 1px, transparent 1px),
          linear-gradient(90deg, ${C.cyan}04 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 90% 70% at 50% 50%, black 0%, transparent 100%)",
      }} />

      {/* Morphing glow blobs */}
      <div style={{
        position: "absolute", width: 500, height: 500, left: "-10%", top: "5%",
        background: `radial-gradient(circle, ${C.cyan}09 0%, transparent 70%)`,
        filter: "blur(80px)", animation: "morphBg 14s ease-in-out infinite", pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", width: 400, height: 400, right: "5%", top: "20%",
        background: `radial-gradient(circle, ${C.violet}08 0%, transparent 70%)`,
        filter: "blur(80px)", animation: "morphBg 18s ease-in-out -7s infinite", pointerEvents: "none", zIndex: 0,
      }} />

      {/* ── HERO INNER ── */}
      <div className="hero-inner" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: "clamp(2rem,5vw,4rem)",
        maxWidth: 1200, margin: "0 auto", width: "100%",
        padding: "clamp(2rem,8vh,5rem) 0", position: "relative", zIndex: 1,
        flexWrap: "wrap",
      }}>

        {/* ── LEFT ── */}
        <div className="hero-left" style={{
          flex: "1 1 360px", minWidth: 0,
          display: "flex", flexDirection: "column", alignItems: "flex-start",
        }}>
          {/* Status badge */}
          <div style={{ animation: "fadeUp .7s cubic-bezier(.22,1,.36,1) .1s both", marginBottom: "clamp(1.4rem,3vh,2rem)" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: `${C.cyan}0a`, border: `0.5px solid ${C.cyan}30`,
              color: C.cyan, fontFamily: F.mono, fontSize: ".6rem", fontWeight: 400,
              padding: "6px 16px", borderRadius: 4, letterSpacing: ".14em", textTransform: "uppercase",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: C.cyan,
                display: "inline-block", animation: "pulse-glow 2s infinite",
              }} />
              available for hire · batch 2026 · cse
            </div>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: F.display, fontWeight: 800,
            fontSize: "clamp(3rem,9.5vw,7.5rem)", lineHeight: .92,
            letterSpacing: "-.04em", marginBottom: "clamp(.5rem,1.2vh,1rem)",
            animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .25s both",
          }}>
            <span style={{ display: "block", color: C.text }}>Pateri</span>
            <span style={{
              display: "block",
              background: `linear-gradient(90deg, ${C.cyan} 0%, ${C.violet} 50%, ${C.cyan} 100%)`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              animation: "shimmer-x 4s linear 1s infinite",
            }}>Nikhil.</span>
          </h1>

          {/* Typewriter role */}
          <div style={{
            fontFamily: F.mono, fontWeight: 400,
            fontSize: "clamp(.88rem,1.8vw,1.2rem)", color: C.muted,
            marginBottom: "clamp(1.2rem,2.5vh,1.8rem)", minHeight: "1.6em",
            animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .4s both",
            display: "flex", alignItems: "center", gap: 2,
          }}>
            <span style={{ color: C.violet }}>{"// "}</span>
            <span style={{ color: C.cyan }}>{displayed}</span>
            <span style={{
              display: "inline-block", width: 2, height: "1em",
              background: C.cyan, marginLeft: 2,
              animation: "fadeIn .6s step-end infinite alternate",
            }} />
          </div>

          {/* Description */}
          <p style={{
            fontFamily: F.body, fontSize: "clamp(.88rem,1.4vw,.98rem)",
            color: C.muted, maxWidth: 520, lineHeight: 1.9,
            marginBottom: "clamp(2rem,4vh,3rem)",
            animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .55s both",
          }}>
            Final-year Computer Science student at NNRG Hyderabad with hands-on experience in
            Python full-stack development, mobile app engineering, and AI/ML integration.
            I build clean, production-ready systems that solve real problems at scale.
          </p>

          {/* Buttons */}
          <div className="herobtns" style={{
            display: "flex", gap: "1rem", flexWrap: "wrap",
            marginBottom: "clamp(2.5rem,5vh,4.5rem)",
            animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .7s both",
          }}>
            <BtnP onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </BtnP>
           
          </div>

          {/* Stats */}
          <div className="hstats" style={{
            display: "flex", gap: "clamp(1.5rem,4vw,3.5rem)",
            paddingTop: "clamp(1.5rem,2.5vh,2rem)",
            borderTop: `0.5px solid ${C.border}`,
            flexWrap: "wrap",
            animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .85s both",
          }}>
            {[["7+", "Projects"], ["8.94", "CGPA"], ["4", "Internships"], ["11+", "Certifications"]].map(([v, l]) => (
              <div key={l}>
                <div className="sval" style={{
                  fontFamily: F.display,
                  fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 800,
                  lineHeight: 1, color: C.text, letterSpacing: "-.03em",
                }}>
                  {v.split("").map((ch, i) =>
                    /[0-9.]/.test(ch) ? <span key={i} style={{ color: C.cyan }}>{ch}</span> : ch
                  )}
                </div>
                <div style={{
                  fontFamily: F.mono, fontSize: ".58rem", fontWeight: 400,
                  color: C.muted2, marginTop: 4, letterSpacing: ".1em", textTransform: "uppercase",
                }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <div className="hero-photo" style={{
          flex: "0 0 auto",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "fadeUp .9s cubic-bezier(.22,1,.36,1) .45s both",
        }}>
          <div style={{ position: "relative" }}>
            {/* Outer glow */}
            <div style={{
              position: "absolute", inset: -40,
              background: `radial-gradient(circle, ${C.cyan}14 0%, ${C.violet}0a 50%, transparent 72%)`,
              filter: "blur(24px)", borderRadius: "50%", zIndex: 0,
            }} />
            {/* Spinning ring */}
            <div style={{
              position: "absolute", inset: -18, borderRadius: 28,
              border: `1px solid ${C.cyan}20`,
              animation: "spin-slow 16s linear infinite", zIndex: 0,
            }}>
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <div key={i} style={{
                  position: "absolute", width: 6, height: 6, borderRadius: "50%",
                  background: i === 0 ? C.cyan : i === 1 ? C.violet : C.rose,
                  top: "50%", left: "50%",
                  transform: `rotate(${deg}deg) translateX(${(280 / 2) + 18}px) translate(-50%,-50%)`,
                }} />
              ))}
            </div>
            {/* Counter ring */}
            <div style={{
              position: "absolute", inset: -8, borderRadius: 24,
              border: `1px dashed ${C.violet}18`,
              animation: "spin-rev 10s linear infinite", zIndex: 0,
            }} />

            {/* Corner brackets */}
            {[
              { top: -8, left: -8, borderTop: `2px solid ${C.cyan}`, borderLeft: `2px solid ${C.cyan}` },
              { top: -8, right: -8, borderTop: `2px solid ${C.violet}`, borderRight: `2px solid ${C.violet}` },
              { bottom: -8, left: -8, borderBottom: `2px solid ${C.violet}`, borderLeft: `2px solid ${C.violet}` },
              { bottom: -8, right: -8, borderBottom: `2px solid ${C.cyan}`, borderRight: `2px solid ${C.cyan}` },
            ].map((s, i) => (
              <div key={i} style={{ position: "absolute", width: 20, height: 20, borderRadius: 2, zIndex: 3, ...s }} />
            ))}

            {/* Photo */}
            <div className="hero-photo-img" style={{
              position: "relative", zIndex: 1,
              width: "clamp(200px,24vw,310px)",
              height: "clamp(230px,28vw,370px)",
              borderRadius: 20, overflow: "hidden",
              border: `1.5px solid ${C.cyan}25`,
              boxShadow: `0 0 0 4px ${C.bg0}, 0 0 0 5px ${C.cyan}15, 0 24px 64px rgba(0,0,0,.6), 0 0 40px ${C.cyan}08`,
            }}>
              <img
                src={nikhilPhoto}
                alt="Pateri Nikhil"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "top center",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(180deg, ${C.cyan}05 0%, transparent 40%, rgba(2,4,9,.12) 100%)`,
              }} />
            </div>

            {/* Status badge */}
            <div style={{
              position: "absolute", bottom: -14, left: "50%",
              transform: "translateX(-50%)",
              background: C.bg0, border: `1px solid ${C.cyan}40`,
              borderRadius: 4, padding: "5px 14px",
              display: "flex", alignItems: "center", gap: 7, zIndex: 4,
              whiteSpace: "nowrap",
              boxShadow: `0 4px 20px ${C.cyan}12`,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: C.cyan,
                display: "inline-block", animation: "pulse-glow 2s infinite",
              }} />
              <span style={{ fontFamily: F.mono, fontSize: ".54rem", color: C.cyan, letterSpacing: ".14em" }}>
                OPEN TO WORK
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        display: "flex", alignItems: "center", gap: 12, color: C.muted2,
        fontFamily: F.mono, fontSize: ".58rem", letterSpacing: ".14em", textTransform: "uppercase",
        paddingBottom: "1.5rem", position: "relative", zIndex: 1,
        animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) 1s both",
      }}>
        <div style={{ position: "relative", width: 40, height: 1, background: C.bord2, overflow: "hidden" }}>
          <span style={{
            position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
            background: C.cyan, animation: "beam 2s ease-in-out 1.5s infinite",
          }} />
        </div>
        scroll to explore
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════════ */
function About() {
  return (
    <section id="about" style={{ padding: "clamp(4rem,8vh,7rem) clamp(1.2rem,6vw,3.5rem)", maxWidth: 1200, margin: "0 auto" }}>
      <MonoLabel>About Me</MonoLabel>
      <div className="abtgrid" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "clamp(2.5rem,5vw,5rem)", alignItems: "start" }}>

        <div className="rvL">
          <h2 style={{
            fontFamily: F.display, fontWeight: 800,
            fontSize: "clamp(1.9rem,4.5vw,3.2rem)", letterSpacing: "-.03em",
            lineHeight: 1.08, marginBottom: "clamp(1.8rem,4vh,3rem)", color: C.text,
          }}>
            Engineering{" "}
            <span style={{
              background: `linear-gradient(90deg,${C.cyan},${C.violet})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>scalable</span>
            {" "}software<br />from first principles.
          </h2>

          {[
            "Final-year Computer Science student (Batch 2026) at Nalla Narsimha Reddy Educational Society Group of Institutions, Hyderabad, maintaining a CGPA of 8.94/10. I specialise in Python full-stack web development, mobile application engineering, and AI/ML integration.",
            "I've completed four internships — including roles as a Python Full Stack Developer at EduSkills Academy and Tech Lead at VISWAM.AI (Swecha Telangana), where I led backend development for a national-scale open-source AI platform and mentored a team of junior engineers.",
            "I take pride in writing clean, maintainable, and well-tested code that delivers real value. From AI-driven agriculture platforms to cross-platform mobile apps, I enjoy the full journey from idea to production.",
          ].map((t, i) => (
            <p key={i} style={{
              fontFamily: F.body, fontSize: "clamp(.88rem,1.4vw,.98rem)",
              color: C.muted, lineHeight: 1.92, marginBottom: "1.1rem",
            }}>{t}</p>
          ))}

          <div style={{ display: "flex", gap: ".8rem", flexWrap: "wrap", marginTop: "1.75rem" }}>
            {[
              { l: "GitHub ↗", h: "https://github.com/nikhil-1642", p: true },
              { l: "LinkedIn ↗", h: "https://linkedin.com/in/paterinikhil1642", p: false },
            ].map(({ l, h, p }) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" className="chp"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 18px",
                  borderRadius: 6, fontFamily: F.mono, fontSize: ".64rem", fontWeight: 400,
                  textDecoration: "none", letterSpacing: ".06em",
                  background: p ? `${C.cyan}10` : "rgba(255,255,255,.04)",
                  border: p ? `0.5px solid ${C.cyan}30` : `0.5px solid ${C.bord2}`,
                  color: p ? C.cyan : C.muted,
                }}>{l}</a>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="rvR" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {EDUCATION.map((e, i) => (
            <div key={i} className="educ" style={{
              background: C.bg1, border: `0.5px solid ${C.border}`, borderRadius: 12,
              padding: "clamp(.95rem,2vw,1.35rem) clamp(1rem,2vw,1.5rem)",
              borderLeft: `2px solid ${e.clr}`,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0, width: 80, height: 80,
                background: `radial-gradient(circle at top right, ${e.clr}08 0%, transparent 70%)`,
              }} />
              <div style={{
                fontFamily: F.display, fontWeight: 700,
                fontSize: "clamp(.82rem,1.3vw,.92rem)", marginBottom: 4, color: C.text,
              }}>{e.degree}</div>
              <div style={{
                fontFamily: F.body, fontSize: ".76rem", color: C.muted,
                marginBottom: 10, lineHeight: 1.5,
              }}>{e.school}</div>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                <Pill clr={e.clr}>{e.yr}</Pill>
                <Pill clr={e.clr}>{e.score}</Pill>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════════════════ */
function Skills() {
  return (
    <section id="skills" style={{ padding: "clamp(4rem,8vh,7rem) clamp(1.2rem,6vw,3.5rem)", maxWidth: 1200, margin: "0 auto" }}>
      <MonoLabel>Technical Skills</MonoLabel>
      <DisplayTitle>The tools I <span style={{ color: C.cyan }}>build with</span>.</DisplayTitle>
      <div className="skgrid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "1rem" }}>
        {SKILLS.map((sk, i) => (
          <div key={sk.cat} className={`rvS d${Math.min(i + 1, 6)}`} style={{
            background: C.bg1, border: `0.5px solid ${C.border}`,
            borderRadius: 12, padding: "clamp(.95rem,2vw,1.35rem)",
            position: "relative", overflow: "hidden",
            transition: "border-color .25s, background .25s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = sk.clr + "30"; e.currentTarget.style.background = C.bg2; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.background = C.bg1; }}
          >
            <div style={{
              position: "absolute", top: 0, right: 0, width: 60, height: 60,
              background: `radial-gradient(circle at top right, ${sk.clr}10 0%, transparent 70%)`,
            }} />
            <div style={{
              display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem",
              fontFamily: F.mono, fontSize: ".6rem", fontWeight: 400,
              letterSpacing: ".14em", textTransform: "uppercase", color: C.muted2,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: sk.clr, flexShrink: 0 }} />
              {sk.cat}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {sk.items.map(it => (
                <span key={it} className="skch" style={{
                  fontFamily: F.body, fontSize: ".74rem", fontWeight: 500,
                  padding: "4px 10px", borderRadius: 4,
                  background: "rgba(255,255,255,.04)", border: `0.5px solid ${C.border}`,
                  color: C.text, cursor: "default",
                }}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   VIDEO MODAL
═══════════════════════════════════════════════════════════ */
function VideoModal({ src, clr, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [onClose]);

  return (
    <div onClick={e => { if (e.target === e.currentTarget) onClose(); }} style={{
      position: "fixed", inset: 0, zIndex: 800,
      background: "rgba(0,0,0,.96)", backdropFilter: "blur(20px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "clamp(1rem,4vw,2rem)",
    }}>
      <div style={{
        position: "relative", width: "100%", maxWidth: 900,
        background: C.bg0, borderRadius: 16,
        border: `0.5px solid ${clr}40`,
        overflow: "hidden",
        animation: "modalIn .35s cubic-bezier(.22,1,.36,1) both",
        boxShadow: `0 0 80px ${clr}14`,
      }}>
        <div style={{ height: 2, background: `linear-gradient(90deg,${clr},${clr}33)` }} />
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px", borderBottom: `0.5px solid ${C.border}`,
          background: C.bg1,
        }}>
          <span style={{ fontFamily: F.mono, fontSize: ".6rem", color: clr, letterSpacing: ".12em" }}>
            ▶ DEMO PREVIEW
          </span>
          <button onClick={onClose} style={{
            width: 28, height: 28, borderRadius: 4,
            background: "rgba(255,255,255,.05)", border: `0.5px solid ${C.bord2}`,
            color: C.muted, fontSize: ".85rem", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: F.mono,
          }}>✕</button>
        </div>
        <video src={src} controls autoPlay style={{ width: "100%", display: "block", maxHeight: "75vh", background: "#000" }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECT MODAL
═══════════════════════════════════════════════════════════ */
function Modal({ p, onClose }) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [onClose]);

  return (
    <>
      <div onClick={e => { if (e.target === e.currentTarget) onClose(); }} style={{
        position: "fixed", inset: 0, zIndex: 700,
        background: "rgba(0,0,0,.88)", backdropFilter: "blur(16px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "clamp(1rem,4vw,2rem)", overflowY: "auto",
      }}>
        <div className="modal-scroll" style={{
          background: C.bg2, border: `0.5px solid ${p.clr}35`,
          borderRadius: 20, width: "100%", maxWidth: 700,
          maxHeight: "88vh", overflowY: "auto",
          padding: "clamp(1.5rem,4vw,2.5rem)", position: "relative",
          animation: "modalIn .35s cubic-bezier(.22,1,.36,1) both",
        }}>
          {/* Top accent */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${p.clr},${p.clr}33)`, borderRadius: "20px 20px 0 0" }} />

          <button onClick={onClose} style={{
            position: "absolute", top: "1.2rem", right: "1.2rem",
            width: 32, height: 32, borderRadius: 6,
            background: "rgba(255,255,255,.05)", border: `0.5px solid ${C.bord2}`,
            color: C.muted, fontSize: ".9rem", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: F.mono,
          }}>✕</button>

          <div style={{ fontSize: "2rem", marginBottom: ".6rem" }}>{p.icon}</div>
          <h2 style={{
            fontFamily: F.display, fontWeight: 800,
            fontSize: "clamp(1.5rem,3.5vw,2rem)", letterSpacing: "-.03em",
            marginBottom: 5, color: C.text,
          }}>{p.name}</h2>
          <p style={{ fontFamily: F.mono, fontSize: ".62rem", color: p.clr, marginBottom: "1.5rem", letterSpacing: ".06em" }}>
            {p.role} · {p.tag}
          </p>

          {p.video && (
            <div style={{ marginBottom: "1.6rem", borderRadius: 12, overflow: "hidden", border: `0.5px solid ${p.clr}28` }}>
              <div style={{ height: 2, background: `linear-gradient(90deg,${p.clr},${p.clr}22)` }} />
              <video src={p.video} controls style={{ width: "100%", display: "block", background: "#000", maxHeight: 300 }} />
              <div style={{ padding: "8px 12px", background: C.bg1, borderTop: `0.5px solid ${C.border}` }}>
                <span style={{ fontFamily: F.mono, fontSize: ".56rem", color: p.clr, letterSpacing: ".12em" }}>▶ DEMO VIDEO</span>
              </div>
            </div>
          )}

          {[
            ["Overview", <p style={{ fontFamily: F.body, fontSize: ".88rem", color: C.muted, lineHeight: 1.88 }}>{p.overview}</p>],
            ["Key Features",
              <ul style={{ listStyle: "none" }}>
                {p.features.map((f, i) => (
                  <li key={i} style={{ fontFamily: F.body, fontSize: ".86rem", color: C.muted, lineHeight: 1.8, padding: "3px 0 3px 1.1rem", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: p.clr, fontFamily: F.mono, fontSize: ".64rem", top: 7 }}>→</span>{f}
                  </li>
                ))}
              </ul>],
            ["Tech Stack",
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {p.tech.map(t => <Pill key={t} clr={p.clr}>{t}</Pill>)}
              </div>],
          ].map(([lbl, content]) => (
            <div key={lbl} style={{ marginBottom: "1.4rem" }}>
              <p style={{ fontFamily: F.mono, fontSize: ".58rem", fontWeight: 400, letterSpacing: ".16em", textTransform: "uppercase", color: C.muted2, marginBottom: ".65rem" }}>{lbl}</p>
              {content}
            </div>
          ))}

          <div className="modalact" style={{ display: "flex", gap: ".85rem", flexWrap: "wrap" }}>
            <BtnP href={p.gh} sm style={{ background: `linear-gradient(135deg,${p.clr},${p.clr}bb)` }}>GitHub ↗</BtnP>
            {p.video
              ? <BtnO sm onClick={() => setShowVideo(true)}>▶ Live Demo</BtnO>
              : <BtnO href={p.gh} sm>Live Demo ↗</BtnO>
            }
          </div>
        </div>
      </div>
      {showVideo && <VideoModal src={p.video} clr={p.clr} onClose={() => setShowVideo(false)} />}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════════════════ */
function Projects() {
  const [sel, setSel] = useState(null);
  return (
    <section id="projects" style={{ padding: "clamp(4rem,8vh,7rem) clamp(1.2rem,6vw,3.5rem)", maxWidth: 1200, margin: "0 auto" }}>
      <MonoLabel>Projects</MonoLabel>
      <DisplayTitle>Things I've <span style={{ color: C.cyan }}>built.</span></DisplayTitle>
      <div className="prjgrid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,330px),1fr))", gap: "clamp(1rem,2vw,1.4rem)" }}>
        {PROJECTS.map((p, i) => <PCard key={p.name} p={p} i={i} onOpen={() => setSel(p)} />)}
      </div>
      {sel && <Modal p={sel} onClose={() => setSel(null)} />}
    </section>
  );
}

function PCard({ p, i, onOpen }) {
  const [hov, setHov] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (hov) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => {}); }
    else { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  }, [hov]);

  return (
    <>
      <div
        className={`pcard rv d${Math.min((i % 3) + 1, 3)}`}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? C.bg2 : C.bg1,
          border: `0.5px solid ${hov ? p.clr + "40" : C.border}`,
          borderRadius: 16,
          display: "flex", flexDirection: "column",
          position: "relative", overflow: "hidden", cursor: "pointer",
        }}>

        <div style={{
          position: "relative", width: "100%", height: 190,
          overflow: "hidden", flexShrink: 0,
          background: `${p.clr}0a`,
        }}>

          {p.img && (
            <img
              src={p.img}
              alt={p.name}
              loading="lazy"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "top center",
                display: "block",
                position: "absolute", inset: 0,
                transition: "transform .5s cubic-bezier(.22,1,.36,1), opacity .4s ease",
                transform: hov ? "scale(1.06)" : "scale(1)",
                opacity: (hov && p.video) ? 0 : 1,
              }}
            />
          )}

          {!p.img && (
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: 8,
            }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `
                  linear-gradient(${p.clr}08 1px, transparent 1px),
                  linear-gradient(90deg, ${p.clr}08 1px, transparent 1px)
                `,
                backgroundSize: "22px 22px",
              }} />
              <div style={{
                fontSize: "2.8rem", position: "relative", zIndex: 1,
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,.4))",
              }}>{p.icon}</div>
              <span style={{
                fontFamily: F.mono, fontSize: ".55rem",
                color: `${p.clr}88`, letterSpacing: ".12em",
                textTransform: "uppercase", position: "relative", zIndex: 1,
              }}>no preview</span>
            </div>
          )}

          {p.video && (
            <video
              ref={videoRef}
              src={p.video}
              muted loop playsInline
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", display: "block",
                position: "absolute", inset: 0,
                opacity: hov ? 1 : 0,
                transition: "opacity .5s ease",
                filter: "brightness(.2) saturate(.4)",
              }}
            />
          )}

          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(
              180deg,
              transparent 0%,
              transparent 40%,
              ${hov ? C.bg2 : C.bg1}bb 72%,
              ${hov ? C.bg2 : C.bg1} 100%
            )`,
            transition: "background .3s",
          }} />

          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg, ${p.clr}, ${p.clr}44)`,
            opacity: hov ? 1 : 0.45,
            transition: "opacity .3s",
          }} />

          <div style={{
            position: "absolute", bottom: 14, left: 14, zIndex: 2,
            background: `${C.bg0}dd`, backdropFilter: "blur(12px)",
            border: `0.5px solid ${p.clr}40`,
            borderRadius: 4, padding: "4px 10px",
            display: "flex", alignItems: "center", gap: 7,
          }}>
            <span style={{ fontSize: "1rem", lineHeight: 1 }}>{p.icon}</span>
            <span style={{
              fontFamily: F.mono, fontSize: ".52rem",
              color: p.clr, letterSpacing: ".1em", whiteSpace: "nowrap",
            }}>{p.tag}</span>
          </div>

          <a
            href={p.gh}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="picobtn"
            style={{
              position: "absolute", top: 12, right: 12, zIndex: 2,
              width: 30, height: 30, borderRadius: 6,
              border: `0.5px solid ${C.bord2}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: ".58rem", color: C.muted,
              textDecoration: "none",
              background: `${C.bg0}cc`, backdropFilter: "blur(10px)",
              fontFamily: F.mono,
            }}
          >GH</a>

          {p.video && hov && (
            <div style={{
              position: "absolute", top: 12, left: 12, zIndex: 2,
              background: `${C.bg0}cc`, backdropFilter: "blur(10px)",
              border: `0.5px solid ${p.clr}40`,
              borderRadius: 4, padding: "4px 10px",
              display: "flex", alignItems: "center", gap: 5,
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%",
                background: p.clr, animation: "pulse-glow 1.5s infinite",
                display: "inline-block",
              }} />
              <span style={{
                fontFamily: F.mono, fontSize: ".5rem",
                color: p.clr, letterSpacing: ".1em",
              }}>LIVE</span>
            </div>
          )}
        </div>

        <div style={{
          padding: "clamp(.9rem,2vw,1.2rem) clamp(1rem,2vw,1.35rem)",
          display: "flex", flexDirection: "column", gap: ".7rem", flex: 1,
        }}>

          <div style={{
            fontFamily: F.display, fontWeight: 700,
            fontSize: "clamp(.94rem,1.8vw,1.08rem)",
            letterSpacing: "-.02em", color: C.text, lineHeight: 1.2,
          }}>{p.name}</div>

          <div style={{
            fontFamily: F.body, fontSize: ".83rem",
            color: C.muted, lineHeight: 1.78,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>{p.short}</div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "auto" }}>
            {p.tech.map(t => (
              <span key={t} style={{
                fontFamily: F.mono, fontSize: ".56rem", padding: "3px 8px", borderRadius: 3,
                letterSpacing: ".04em", background: "rgba(255,255,255,.04)",
                border: `0.5px solid ${C.border}`, color: C.muted2,
              }}>{t}</span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 7 }}>
            <button
              onClick={onOpen}
              style={{
                flex: 1, padding: "10px", borderRadius: 8,
                fontFamily: F.body, fontSize: ".76rem", fontWeight: 600,
                background: `${p.clr}10`, color: p.clr,
                border: `0.5px solid ${p.clr}25`, cursor: "pointer",
                textAlign: "center", transition: "background .2s, border-color .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${p.clr}20`; e.currentTarget.style.borderColor = `${p.clr}45`; }}
              onMouseLeave={e => { e.currentTarget.style.background = `${p.clr}10`; e.currentTarget.style.borderColor = `${p.clr}25`; }}
            >Details →</button>

            {p.video ? (
              <button
                onClick={e => { e.stopPropagation(); setShowVideo(true); }}
                style={{
                  flex: 1, padding: "10px", borderRadius: 8,
                  fontFamily: F.body, fontSize: ".76rem", fontWeight: 600,
                  background: `${p.clr}18`, color: p.clr,
                  border: `0.5px solid ${p.clr}45`, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                  transition: "background .2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `${p.clr}28`; }}
                onMouseLeave={e => { e.currentTarget.style.background = `${p.clr}18`; }}
              >▶ Demo</button>
           ) : (
              <a
                href={p.gh}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  flex: 1, padding: "10px", borderRadius: 8,
                  fontFamily: F.body, fontSize: ".76rem", fontWeight: 600,
                  background: "rgba(255,255,255,.04)", color: C.muted,
                  border: `0.5px solid ${C.border}`, textDecoration: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >GitHub ↗</a>
            )}
          </div>
        </div>
      </div>

      {showVideo && <VideoModal src={p.video} clr={p.clr} onClose={() => setShowVideo(false)} />}
    </>
  );
}
/* ═══════════════════════════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════════════════════════ */
function Experience() {
  const [selImg, setSelImg] = useState(null); // { src, name, clr }
  return (
    <>
    <section id="experience" style={{ padding: "clamp(4rem,8vh,7rem) clamp(1.2rem,6vw,3.5rem)", maxWidth: 1200, margin: "0 auto" }}>
      <MonoLabel>Experience</MonoLabel>
      <DisplayTitle>Where I've <span style={{ color: C.cyan }}>worked.</span></DisplayTitle>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
        {INTERNSHIPS.map((e, i) => (
          <div key={e.company + e.role} style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: "0 1.4rem" }}>
            {/* Timeline */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className={`rv d${Math.min(i + 1, 6)}`} style={{
                width: 24, height: 24, borderRadius: "50%",
                border: `1.5px solid ${e.clr}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: 2, background: `${e.clr}0e`,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: e.clr }} />
              </div>
              {i < INTERNSHIPS.length - 1 && (
                <div style={{
                  width: 1, flex: 1,
                  background: `linear-gradient(to bottom,${e.clr}55,${INTERNSHIPS[i + 1].clr}22)`,
                  minHeight: 40,
                }} />
              )}
            </div>

            {/* Card */}
            <div className={`expc rv d${Math.min(i + 1, 6)}`} style={{
              background: C.bg1, border: `0.5px solid ${C.border}`,
              borderRadius: 14, overflow: "hidden", marginBottom: "1.4rem",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, bottom: 0, width: 2,
                background: `linear-gradient(to bottom, ${e.clr}, ${e.clr}18)`, zIndex: 1,
              }} />

              {/* Image banner */}
              {e.img && (
                <div
                  onClick={() => setSelImg({ src: e.img, name: e.role, company: e.company, clr: e.clr })}
                  style={{
                    position: "relative", width: "100%",
                    maxHeight: 190, minHeight: 110, overflow: "hidden",
                    background: `${e.clr}08`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                  }}>
                  <img src={e.img} alt={e.company} style={{
                    width: "100%", height: "auto",
                    maxHeight: 190, minHeight: 110,
                    objectFit: "contain", objectPosition: "center",
                    display: "block", padding: "10px 14px",
                    transition: "transform .35s cubic-bezier(.22,1,.36,1)",
                  }}
                    onMouseEnter={ev => { ev.currentTarget.style.transform = "scale(1.03)"; }}
                    onMouseLeave={ev => { ev.currentTarget.style.transform = ""; }}
                  />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 48,
                    background: `linear-gradient(to bottom, transparent, ${C.bg1})`,
                  }} />
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${e.clr}, ${e.clr}33)` }} />
                  {/* Period pill */}
                  <div style={{
                    position: "absolute", top: 10, right: 10,
                    background: `${C.bg0}cc`, backdropFilter: "blur(10px)",
                    border: `0.5px solid ${e.clr}35`, borderRadius: 4,
                    padding: "4px 10px",
                    display: "flex", alignItems: "center", gap: 6, zIndex: 2,
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: e.clr, animation: "pulse-glow 2s infinite" }} />
                    <span style={{ fontFamily: F.mono, fontSize: ".54rem", color: e.clr, letterSpacing: ".1em", whiteSpace: "nowrap" }}>{e.period}</span>
                  </div>
                  {/* VIEW hint overlay */}
                  <div className="cert-view-overlay" style={{
                    position: "absolute", inset: 0, zIndex: 3,
                    background: "rgba(0,0,0,.5)",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                    opacity: 0, transition: "opacity .22s",
                  }}
                    onMouseEnter={ev => { ev.currentTarget.style.opacity = "1"; }}
                    onMouseLeave={ev => { ev.currentTarget.style.opacity = "0"; }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={e.clr} strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span style={{ fontFamily: F.mono, fontSize: ".58rem", color: e.clr, letterSpacing: ".1em" }}>VIEW CERTIFICATE</span>
                  </div>
                </div>
              )}

              {/* Text body */}
              <div style={{ padding: "clamp(.95rem,2vw,1.3rem) clamp(1rem,2vw,1.5rem)", paddingLeft: "calc(clamp(1rem,2vw,1.5rem) + 8px)" }}>
                <div style={{
                  fontFamily: F.display, fontWeight: 700,
                  fontSize: "clamp(.88rem,1.5vw,1rem)", letterSpacing: "-.02em",
                  color: C.text, marginBottom: 4,
                }}>{e.role}</div>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  flexWrap: "wrap", gap: ".4rem", marginBottom: "1rem",
                }}>
                  <div style={{
                    fontFamily: F.body, fontSize: ".78rem", color: e.clr, fontWeight: 600,
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: e.clr }} />
                    {e.company}
                  </div>
                  {!e.img && <Pill clr={e.clr}>{e.period}</Pill>}
                </div>
                <div style={{ height: ".5px", background: `linear-gradient(90deg, ${e.clr}30, transparent)`, marginBottom: "1rem" }} />
                <ul style={{ listStyle: "none" }}>
                  {e.pts.map((pt, j) => (
                    <li key={j} style={{
                      fontFamily: F.body, fontSize: ".86rem", color: C.muted,
                      lineHeight: 1.82, padding: "3px 0 3px 1.1rem", position: "relative",
                    }}>
                      <span style={{ position: "absolute", left: 0, color: e.clr, fontFamily: F.mono, fontSize: ".6rem", top: 8 }}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Internship certificate image modal */}
    {selImg && (
      <CertModal
        cert={{ img: selImg.src, name: selImg.name, iss: selImg.company, clr: selImg.clr, icon: "🎓" }}
        onClose={() => setSelImg(null)}
      />
    )}
  </>
  );
}

/* ═══════════════════════════════════════════════════════════
   ACHIEVEMENTS
═══════════════════════════════════════════════════════════ */
function AchievementModal({ a, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [onClose]);

  return (
    <div onClick={e => { if (e.target === e.currentTarget) onClose(); }} style={{
      position: "fixed", inset: 0, zIndex: 700,
      background: "rgba(0,0,0,.88)", backdropFilter: "blur(16px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "clamp(1rem,4vw,2rem)", overflowY: "auto",
    }}>
      <div className="modal-scroll" style={{
        background: C.bg2, border: `0.5px solid ${a.clr}35`,
        borderRadius: 20, width: "100%", maxWidth: 640,
        maxHeight: "88vh", overflowY: "auto",
        position: "relative",
        animation: "modalIn .35s cubic-bezier(.22,1,.36,1) both",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${a.clr},${a.clr}33)` }} />
        <button onClick={onClose} style={{
          position: "absolute", top: "1.2rem", right: "1.2rem",
          width: 32, height: 32, borderRadius: 6,
          background: "rgba(255,255,255,.05)", border: `0.5px solid ${C.bord2}`,
          color: C.muted, fontSize: ".9rem", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: F.mono, zIndex: 10,
        }}>✕</button>

        <div style={{
          position: "relative", width: "100%",
          background: `${a.clr}08`,
          display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: 170, maxHeight: 260, overflow: "hidden",
        }}>
          <img src={a.img} alt={a.title} style={{
            width: "100%", height: "auto", maxHeight: 260, minHeight: 170,
            objectFit: "contain", objectPosition: "center",
            display: "block", padding: "14px 18px",
          }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: `linear-gradient(to bottom, transparent, ${C.bg2})` }} />
          <div style={{
            position: "absolute", top: 12, left: 12,
            background: `${C.bg0}cc`, backdropFilter: "blur(10px)",
            border: `0.5px solid ${a.clr}40`, borderRadius: 4,
            padding: "4px 10px",
            display: "flex", alignItems: "center", gap: 6, zIndex: 2,
          }}>
            <span style={{ fontSize: ".8rem" }}>{a.icon}</span>
            <span style={{ fontFamily: F.mono, fontSize: ".54rem", color: a.clr, letterSpacing: ".1em" }}>{a.tag}</span>
          </div>
        </div>

        <div style={{ padding: "clamp(1.4rem,3vw,2rem)", paddingTop: "1.2rem" }}>
          <h2 style={{
            fontFamily: F.display, fontWeight: 800,
            fontSize: "clamp(1.4rem,3vw,1.9rem)", letterSpacing: "-.03em",
            color: C.text, marginBottom: 4,
          }}>{a.title}</h2>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: F.mono, fontSize: ".6rem", color: a.clr,
            letterSpacing: ".06em", marginBottom: "1.4rem", flexWrap: "wrap",
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: a.clr, animation: "pulse-glow 2s infinite" }} />
            {a.org} · {a.date}
          </div>

          {[["Overview", <p style={{ fontFamily: F.body, fontSize: ".88rem", color: C.muted, lineHeight: 1.88 }}>{a.desc}</p>],
            ["Highlights",
              <ul style={{ listStyle: "none" }}>
                {a.highlights.map((h, i) => (
                  <li key={i} style={{
                    fontFamily: F.body, fontSize: ".86rem", color: C.muted,
                    lineHeight: 1.82, padding: "3px 0 3px 1.1rem", position: "relative",
                  }}>
                    <span style={{ position: "absolute", left: 0, color: a.clr, fontFamily: F.mono, fontSize: ".64rem", top: 7 }}>→</span>{h}
                  </li>
                ))}
              </ul>]
          ].map(([lbl, content]) => (
            <div key={lbl} style={{ marginBottom: "1.4rem" }}>
              <p style={{ fontFamily: F.mono, fontSize: ".58rem", letterSpacing: ".16em", textTransform: "uppercase", color: C.muted2, marginBottom: ".65rem" }}>{lbl}</p>
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Achievements() {
  const [sel, setSel] = useState(null);
  return (
    <section id="achievements" style={{ padding: "clamp(4rem,8vh,7rem) clamp(1.2rem,6vw,3.5rem)", maxWidth: 1200, margin: "0 auto" }}>
      <MonoLabel clr={C.amber}>Achievements</MonoLabel>
      <DisplayTitle>Moments I'm <span style={{ color: C.amber }}>proud of.</span></DisplayTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(1rem,2vw,1.4rem)" }}>
        {ACHIEVEMENTS.map((a, i) => <AchCard key={a.title} a={a} i={i} onOpen={() => setSel(a)} />)}
      </div>
      {sel && <AchievementModal a={sel} onClose={() => setSel(null)} />}
    </section>
  );
}

function AchCard({ a, i, onOpen }) {
  const [hov, setHov] = useState(false);
  const [showImg, setShowImg] = useState(false);
  return (
    <>
    <div
      className={`pcard rv d${i + 1}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? C.bg2 : C.bg1,
        border: `0.5px solid ${hov ? a.clr + "50" : C.border}`,
        borderRadius: 16, overflow: "hidden",
        display: "flex", flexDirection: "column", cursor: "pointer", position: "relative",
      }}>
      <div style={{ height: 2, background: `linear-gradient(90deg, ${a.clr}, ${a.clr}33)`, opacity: hov ? 1 : 0.5, transition: "opacity .3s" }} />

      {/* Image — click opens full-size viewer */}
      <div
        onClick={e => { e.stopPropagation(); setShowImg(true); }}
        style={{
          position: "relative", width: "100%",
          minHeight: 160, maxHeight: 220, background: `${a.clr}08`,
          display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
        }}>
        <img src={a.img} alt={a.title} style={{
          width: "100%", height: "auto", maxHeight: 220, minHeight: 160,
          objectFit: "contain", objectPosition: "center",
          display: "block", padding: "12px 16px",
          transition: "transform .4s cubic-bezier(.22,1,.36,1)",
          transform: hov ? "scale(1.04)" : "scale(1)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 50,
          background: `linear-gradient(to bottom, transparent, ${hov ? C.bg2 : C.bg1})`,
          transition: "background .3s",
        }} />
        <div style={{
          position: "absolute", top: 10, left: 10,
          background: `${C.bg0}cc`, backdropFilter: "blur(10px)",
          border: `0.5px solid ${a.clr}35`, borderRadius: 4,
          padding: "4px 10px",
          display: "flex", alignItems: "center", gap: 6, zIndex: 2,
        }}>
          <span style={{ fontSize: ".8rem" }}>{a.icon}</span>
          <span style={{ fontFamily: F.mono, fontSize: ".54rem", color: a.clr, letterSpacing: ".1em" }}>{a.tag}</span>
        </div>
        <div style={{
          position: "absolute", top: 10, right: 10,
          background: `${C.bg0}cc`, backdropFilter: "blur(10px)",
          border: `0.5px solid ${a.clr}25`, borderRadius: 4, padding: "4px 9px", zIndex: 2,
        }}>
          <span style={{ fontFamily: F.mono, fontSize: ".54rem", color: C.muted2, letterSpacing: ".08em" }}>{a.date}</span>
        </div>
        {/* VIEW overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 3,
          background: "rgba(0,0,0,.5)",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
          opacity: hov ? 1 : 0, transition: "opacity .22s",
          pointerEvents: hov ? "auto" : "none",
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={a.clr} strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span style={{ fontFamily: F.mono, fontSize: ".56rem", color: a.clr, letterSpacing: ".1em" }}>VIEW IMAGE</span>
        </div>
      </div>

      <div style={{ padding: "clamp(1rem,2vw,1.3rem) clamp(1rem,2vw,1.35rem)", display: "flex", flexDirection: "column", gap: ".7rem", flex: 1 }}>
        <div style={{ fontFamily: F.mono, fontSize: ".56rem", color: a.clr, letterSpacing: ".12em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: a.clr, animation: "pulse-glow 2s infinite" }} />
          {a.event}
        </div>
        <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(1rem,2vw,1.2rem)", letterSpacing: "-.02em", color: C.text, lineHeight: 1.15 }}>{a.title}</div>
        <p style={{
          fontFamily: F.body, fontSize: ".84rem", color: C.muted, lineHeight: 1.75,
          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{a.desc}</p>
        <button onClick={onOpen} style={{
          marginTop: "auto", padding: "10px", borderRadius: 8,
          fontFamily: F.body, fontSize: ".76rem", fontWeight: 600,
          background: `${a.clr}10`, color: a.clr,
          border: `0.5px solid ${a.clr}25`, cursor: "pointer", width: "100%", textAlign: "center",
          transition: "background .2s, border-color .2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = `${a.clr}20`; e.currentTarget.style.borderColor = `${a.clr}45`; }}
          onMouseLeave={e => { e.currentTarget.style.background = `${a.clr}10`; e.currentTarget.style.borderColor = `${a.clr}25`; }}
        >View Full Details →</button>
      </div>
    </div>

    {showImg && (
      <CertModal
        cert={{ img: a.img, name: a.title, iss: a.org, clr: a.clr, icon: a.icon }}
        onClose={() => setShowImg(false)}
      />
    )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   CERTIFICATIONS
═══════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════
   CERTIFICATE IMAGE MODAL
═══════════════════════════════════════════════════════════ */
function CertModal({ cert, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [onClose]);

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 900,
        background: "rgba(0,0,0,.92)", backdropFilter: "blur(20px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "clamp(1rem,4vw,2rem)",
      }}
    >
      <div style={{
        position: "relative", width: "100%", maxWidth: 780,
        background: C.bg2,
        border: `0.5px solid ${cert.clr}40`,
        borderRadius: 20, overflow: "hidden",
        animation: "modalIn .35s cubic-bezier(.22,1,.36,1) both",
        boxShadow: `0 0 80px ${cert.clr}18, 0 32px 80px rgba(0,0,0,.7)`,
      }}>
        {/* Top accent bar */}
        <div style={{ height: 2, background: `linear-gradient(90deg,${cert.clr},${cert.clr}33)` }} />

        {/* Header row */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px",
          background: C.bg1,
          borderBottom: `0.5px solid ${C.border}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: "1.2rem" }}>{cert.icon}</span>
            <div>
              <div style={{
                fontFamily: F.display, fontWeight: 700, fontSize: ".92rem",
                letterSpacing: "-.01em", color: C.text,
              }}>{cert.name}</div>
              <div style={{
                fontFamily: F.mono, fontSize: ".56rem", color: cert.clr,
                letterSpacing: ".1em", textTransform: "uppercase", marginTop: 2,
              }}>{cert.iss}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 30, height: 30, borderRadius: 6,
              background: "rgba(255,255,255,.05)", border: `0.5px solid ${C.bord2}`,
              color: C.muted, fontSize: ".85rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: F.mono, flexShrink: 0,
            }}
          >✕</button>
        </div>

        {/* Certificate image */}
        <div style={{
          background: `${cert.clr}06`,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "clamp(1rem,3vw,2rem)",
          minHeight: 300,
        }}>
          {cert.img ? (
            <img
              src={cert.img}
              alt={cert.name}
              style={{
                width: "100%", height: "auto",
                maxHeight: "70vh",
                objectFit: "contain",
                borderRadius: 10,
                display: "block",
                boxShadow: `0 8px 40px rgba(0,0,0,.5), 0 0 0 1px ${cert.clr}20`,
              }}
            />
          ) : (
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              padding: "3rem",
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: 16,
                background: cert.bg, border: `1px solid ${cert.clr}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "2rem",
              }}>{cert.icon}</div>
              <p style={{ fontFamily: F.mono, fontSize: ".7rem", color: C.muted2, letterSpacing: ".08em" }}>
                No image available
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: "12px 18px",
          borderTop: `0.5px solid ${C.border}`,
          background: C.bg1,
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
          flexWrap: "wrap",
        }}>
          <div style={{ fontFamily: F.mono, fontSize: ".6rem", color: C.muted2, letterSpacing: ".06em" }}>
            Click outside or press <kbd style={{
              background: "rgba(255,255,255,.06)", border: `0.5px solid ${C.bord2}`,
              borderRadius: 4, padding: "1px 5px", fontFamily: F.mono, fontSize: ".58rem",
              color: C.muted,
            }}>Esc</kbd> to close
          </div>
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  const [selCert, setSelCert] = useState(null);
  const all = [...CERTS, ...CERTS];

  return (
    <section id="certifications" style={{ padding: "clamp(4rem,8vh,7rem) 0", overflow: "hidden" }}>
      <div style={{ padding: "0 clamp(1.2rem,6vw,3.5rem)", maxWidth: 1200, margin: "0 auto" }}>
        <MonoLabel>Certifications &amp; Credentials</MonoLabel>
        <DisplayTitle>Credentials <span style={{ color: C.cyan }}>earned.</span></DisplayTitle>
      </div>

      <div style={{
        position: "relative", width: "100%", overflow: "hidden",
        maskImage: "linear-gradient(90deg,transparent 0%,black 6%,black 94%,transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg,transparent 0%,black 6%,black 94%,transparent 100%)",
      }}>
        <div className="marquee-track" style={{ display: "flex", gap: "1.1rem", width: "max-content", padding: "1rem 0 1.5rem" }}>
          {all.map((c, i) => {
            // Use the original cert (not duplicate) for modal — deduplicate by index
            const originalCert = CERTS[i % CERTS.length];
            return (
              <div
                key={i}
                onClick={() => setSelCert(originalCert)}
                style={{
                  flexShrink: 0, width: 250, background: C.bg1,
                  border: `0.5px solid ${C.border}`, borderRadius: 14,
                  overflow: "hidden", position: "relative",
                  transition: "border-color .3s, transform .3s",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = c.clr + "45";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.transform = "";
                }}
              >
                <div style={{ height: 2, background: `linear-gradient(90deg,${c.clr},${c.clr}44)` }} />

                {/* Image area with zoom-hint overlay on hover */}
                <div style={{
                  height: 140, background: c.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  {c.img ? (
                    <img src={c.img} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <>
                      <div style={{
                        position: "absolute", inset: 0,
                        backgroundImage: `linear-gradient(${c.clr}06 1px,transparent 1px),linear-gradient(90deg,${c.clr}06 1px,transparent 1px)`,
                        backgroundSize: "18px 18px",
                      }} />
                      <div style={{
                        width: 56, height: 56, borderRadius: 12, background: c.bg,
                        border: `1px solid ${c.clr}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.6rem", position: "relative", zIndex: 1,
                      }}>{c.icon}</div>
                    </>
                  )}

                  {/* "View" hint overlay */}
                  <div style={{
                    position: "absolute", inset: 0, zIndex: 2,
                    background: "rgba(0,0,0,.55)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: 6, opacity: 0,
                    transition: "opacity .22s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "1"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "0"; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.clr} strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span style={{ fontFamily: F.mono, fontSize: ".6rem", color: c.clr, letterSpacing: ".1em" }}>VIEW</span>
                  </div>
                </div>

                <div style={{ padding: ".9rem 1rem 1rem" }}>
                  <div style={{ fontFamily: F.body, fontWeight: 700, fontSize: ".83rem", lineHeight: 1.35, marginBottom: 5, color: C.text }}>{c.name}</div>
                  <div style={{ fontFamily: F.mono, fontSize: ".56rem", color: c.clr, letterSpacing: ".08em", textTransform: "uppercase" }}>{c.iss}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate image modal */}
      {selCert && <CertModal cert={selCert} onClose={() => setSelCert(null)} />}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════════ */
function Contact() {
  const links = [
    { l: "GitHub", sub: "github.com/nikhil-1642", href: "https://github.com/nikhil-1642", icon: "GH", clr: C.cyan, bg: `${C.cyan}10` },
    { l: "LinkedIn", sub: "linkedin.com/in/paterinikhil1642", href: "https://linkedin.com/in/paterinikhil1642", icon: "in", clr: C.sky, bg: `${C.sky}10` },
    { l: "Email", sub: "paterinikhil0888@gmail.com", href: "mailto:paterinikhil0888@gmail.com", icon: "@", clr: C.rose, bg: `${C.rose}10` },
  ];

  return (
    <section id="contact" style={{ padding: "clamp(4rem,8vh,7rem) clamp(1.2rem,6vw,3.5rem)", maxWidth: 1200, margin: "0 auto" }}>
      <div className="ctcgrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2.5rem,5vw,5rem)", alignItems: "start" }}>

        <div className="rvL">
          <p style={{
            fontFamily: F.mono, fontSize: ".62rem", color: C.cyan,
            letterSpacing: ".16em", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: 12, marginBottom: ".85rem",
          }}>
            <span style={{ width: 24, height: 1, background: `linear-gradient(90deg,${C.cyan},${C.cyan}44)` }} />
            let's connect
          </p>
          <h2 style={{
            fontFamily: F.display, fontWeight: 800,
            fontSize: "clamp(2rem,5vw,3.8rem)", letterSpacing: "-.04em",
            lineHeight: 1.0, marginBottom: "1.5rem", color: C.text,
          }}>
            Let's build<br />something<br />
            <span style={{
              background: `linear-gradient(90deg,${C.cyan},${C.violet})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>great together.</span>
          </h2>
          <p style={{
            fontFamily: F.body, fontSize: ".9rem", color: C.muted, lineHeight: 1.9,
            maxWidth: 400, marginBottom: "1.5rem",
          }}>
            Actively seeking full-time roles as a Software Development Engineer, Python Full Stack Developer,
            Mobile App Developer, or AI/ML Engineer — available from mid-2026. Open to internships, freelance
            projects, and open-source collaborations.
          </p>
          <a href="mailto:paterinikhil0888@gmail.com" style={{
            fontFamily: F.mono, fontWeight: 500,
            fontSize: "clamp(.88rem,1.6vw,1rem)", color: C.cyan,
            textDecoration: "none", display: "flex", alignItems: "center", gap: 8,
            marginBottom: 8,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.cyan, animation: "pulse-glow 2s infinite" }} />
            paterinikhil0888@gmail.com
          </a>
          <div style={{ fontFamily: F.mono, fontSize: ".6rem", color: C.muted2, letterSpacing: ".08em" }}>
            +91-9390286430 · Hyderabad, Telangana
          </div>
        </div>

        <div className="rvR" style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
          {links.map(l => (
            <a key={l.l} href={l.href} target="_blank" rel="noreferrer" className="ccrd"
              style={{
                display: "flex", alignItems: "center", gap: "1rem",
                padding: "clamp(.9rem,1.5vw,1.1rem) clamp(1rem,1.8vw,1.3rem)",
                background: C.bg1, border: `0.5px solid ${C.border}`,
                borderRadius: 12, textDecoration: "none", color: C.text,
                position: "relative", overflow: "hidden",
              }}>
              <div style={{
                width: 38, height: 38, borderRadius: 8, background: l.bg, color: l.clr,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: F.mono, fontSize: ".68rem", fontWeight: 500,
                flexShrink: 0, letterSpacing: ".04em",
                border: `0.5px solid ${l.clr}25`,
              }}>{l.icon}</div>
              <div>
                <div style={{ fontFamily: F.body, fontSize: ".88rem", fontWeight: 600 }}>{l.l}</div>
                <div style={{ fontFamily: F.mono, fontSize: ".58rem", color: C.muted2, marginTop: 2, letterSpacing: ".04em" }}>{l.sub}</div>
              </div>
              <span className="ccarr" style={{ marginLeft: "auto", fontFamily: F.mono, fontSize: ".72rem", color: C.muted2 }}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{
      borderTop: `0.5px solid ${C.border}`,
      padding: "1.75rem clamp(1.2rem,6vw,3.5rem)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      flexWrap: "wrap", gap: "1rem", position: "relative",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(90deg, ${C.cyan}03, transparent 50%)`,
        pointerEvents: "none",
      }} />
      <p style={{ fontFamily: F.mono, fontSize: ".58rem", color: C.muted2, letterSpacing: ".06em", position: "relative" }}>
        © 2026 Pateri Nikhil · Engineered with precision from Hyderabad
      </p>
      <div style={{ display: "flex", gap: "1.5rem", position: "relative" }}>
        {[["github", "https://github.com/nikhil-1642"], ["linkedin", "https://linkedin.com/in/paterinikhil1642"], ["email", "mailto:paterinikhil0888@gmail.com"]].map(([l, h]) => (
          <a key={l} href={h} target="_blank" rel="noreferrer" className="footlink"
            style={{ fontFamily: F.mono, fontSize: ".58rem", color: C.muted2, textDecoration: "none", letterSpacing: ".06em" }}>{l}</a>
        ))}
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════ */
export default function App() {
  useEffect(() => {
    if (!document.getElementById("pn-g")) {
      const s = document.createElement("style");
      s.id = "pn-g"; s.textContent = GLOBAL;
      document.head.appendChild(s);
    }
  }, []);
  useReveal();

  return (
    <div style={{ background: C.bg0, minHeight: "100vh", position: "relative" }}>
      {/* Background layer */}
      <ParticleCanvas />
      <div className="scanline" />

      {/* ── Extra animated background layers ── */}
      {/* Nebula blobs */}
      <div className="bg-nebula" style={{ width: 700, height: 700, top: "-10%", left: "-12%", background: `radial-gradient(circle, ${C.cyan}07 0%, transparent 65%)`, animation: "nebula-drift 22s ease-in-out infinite" }} />
      <div className="bg-nebula" style={{ width: 600, height: 600, top: "30%", right: "-10%", background: `radial-gradient(circle, ${C.violet}06 0%, transparent 65%)`, animation: "nebula-drift 28s ease-in-out -10s infinite" }} />
      <div className="bg-nebula" style={{ width: 450, height: 450, bottom: "10%", left: "30%", background: `radial-gradient(circle, ${C.rose}05 0%, transparent 65%)`, animation: "nebula-drift 18s ease-in-out -5s infinite" }} />
      <div className="bg-nebula" style={{ width: 300, height: 300, top: "60%", left: "5%", background: `radial-gradient(circle, ${C.amber}04 0%, transparent 65%)`, animation: "nebula-drift 32s ease-in-out -14s infinite" }} />

      {/* Aurora bands */}
      <div className="bg-aurora" style={{ width: "140%", height: 220, top: "15%", left: "-20%", background: `linear-gradient(90deg, transparent, ${C.cyan}06, ${C.violet}05, transparent)`, animation: "aurora 14s ease-in-out infinite", borderRadius: "50%" }} />
      <div className="bg-aurora" style={{ width: "140%", height: 160, top: "55%", left: "-20%", background: `linear-gradient(90deg, transparent, ${C.violet}05, ${C.sky}04, transparent)`, animation: "aurora 20s ease-in-out -8s infinite", borderRadius: "50%" }} />

      {/* Spinning rings */}
      <div className="bg-ring" style={{ width: 500, height: 500, top: "10%", right: "5%", borderColor: C.cyan, animation: "hex-spin 40s linear infinite" }} />
      <div className="bg-ring" style={{ width: 320, height: 320, bottom: "20%", left: "8%", borderColor: C.violet, animation: "hex-spin 28s linear -14s infinite reverse", opacity: 0.04 }} />
      <div className="bg-ring" style={{ width: 200, height: 200, top: "45%", left: "50%", borderColor: C.rose, animation: "hex-spin 18s linear -6s infinite", opacity: 0.035, borderStyle: "dashed" }} />

      {/* Laser lines */}
      <div className="bg-laser-h" style={{ top: "28%", background: `linear-gradient(90deg, transparent, ${C.cyan}18, transparent)`, animation: "laser-h 8s ease-in-out 3s infinite" }} />
      <div className="bg-laser-h" style={{ top: "68%", background: `linear-gradient(90deg, transparent, ${C.violet}12, transparent)`, animation: "laser-h 11s ease-in-out 7s infinite" }} />
      <div className="bg-laser-v" style={{ left: "22%", background: `linear-gradient(180deg, transparent, ${C.cyan}10, transparent)`, animation: "laser-v 14s ease-in-out 2s infinite" }} />
      <div className="bg-laser-v" style={{ left: "78%", background: `linear-gradient(180deg, transparent, ${C.violet}08, transparent)`, animation: "laser-v 9s ease-in-out 5s infinite" }} />

      {/* Content layer */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Nav />
        <Hero />
        <HR />
        <About />
        <HR />
        <Skills />
        <HR />
        <Projects />
        <HR />
        <Experience />
        <HR />
        <Achievements />
        <HR />
        <Certifications />
        <HR />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
