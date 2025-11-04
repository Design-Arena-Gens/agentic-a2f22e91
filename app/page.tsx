import { FeatureGrid } from "../components/FeatureGrid";
import { FlowFieldCanvas } from "../components/FlowFieldCanvas";
import { IdeaStream } from "../components/IdeaStream";

const features = [
  {
    title: "Experiential Storycraft",
    description:
      "Compose multi-sensory narratives that merge interface, motion, and sound into a single expressive flow."
  },
  {
    title: "Generative Textures",
    description:
      "Blend lightweight shaders with creative coding to deliver living backgrounds that never repeat the same scene twice."
  },
  {
    title: "Adaptive Systems",
    description:
      "Shape experiences that respond to the human on the other side — context-aware, intentional, and deeply personal."
  },
  {
    title: "Agentic Tooling",
    description:
      "Prototype with automated collaborators that explore permutations, uncover surprises, and push concepts further."
  }
];

const ideas = [
  {
    title: "Resonant Interfaces",
    summary:
      "UI states tuned like musical intervals so every transition resolves into a satisfying chord progression."
  },
  {
    title: "Canvas Cartography",
    summary:
      "Data stories drawn as orbital systems — zoom into a datapoint to reveal its gravitational influences."
  },
  {
    title: "Memory-Linked Prompts",
    summary:
      "Agentic workflows that bind creative prompts to project lore, letting collaborators pick up the thread instantly."
  },
  {
    title: "Ambient Debugging",
    summary:
      "Diagnostics visualized as flowing particles around problem areas, highlighting code health without dashboards."
  }
];

const orbit = [
  { label: "Creative Systems", detail: "Frameworks for expressive, living UX" },
  { label: "Edge Deployment", detail: "Near-zero latency storytelling" },
  { label: "Design Ops", detail: "Pattern libraries that evolve with teams" },
  { label: "Signal Processing", detail: "Turning noise into insight" }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="tagline">A playground for luminous ideas</p>
        <h1>Craft the Possible</h1>
        <p>
          Agentic Atelier is a speculative studio exploring how the next wave of
          web experiences can feel cinematic, adaptive, and human. We experiment
          with generative canvases, narrative logic, and experiences that bloom
          as you interact.
        </p>
        <div className="hero-cta">
          <a className="primary" href="#ideas">
            Browse Idea Stream
          </a>
          <a href="#about">Orbit the Atelier</a>
        </div>
      </section>

      <section id="canvas" aria-labelledby="canvas-heading" className="dynamic-canvas">
        <FlowFieldCanvas />
        <div className="overlay">
          <div className="section-title">
            <span>01</span>
            <div>
              <h2 id="canvas-heading">Living Canvas</h2>
              <p>
                A generative flow-field sketch that remaps every cursor movement
                into ripples of light. Each moment is unique, yet part of a shared
                story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="feature-heading">
        <div className="section-title">
          <span>02</span>
          <div>
            <h2 id="feature-heading">The Craft Stack</h2>
            <p>
              Tools, practices, and experiments we lean on when turning raw sparks
              into living prototypes.
            </p>
          </div>
        </div>
        <FeatureGrid features={features} />
      </section>

      <section id="ideas" aria-labelledby="idea-heading">
        <div className="section-title">
          <span>03</span>
          <div>
            <h2 id="idea-heading">Idea Stream</h2>
            <p>
              Concepts to explore, remix, and build upon. The stream never stops —
              it only adapts to whoever dives in.
            </p>
          </div>
        </div>
        <IdeaStream ideas={ideas} />
      </section>

      <section id="about" aria-labelledby="about-heading" className="about">
        <div className="card">
          <div className="section-title">
            <span>04</span>
            <div>
              <h2 id="about-heading">About the Orbit</h2>
              <p>
                Agentic Atelier is a concept studio that bends creative coding into
                poetic tools. We map direction, design behaviors, and craft
                stories.
              </p>
            </div>
          </div>
          <p>
            We believe the web can hum with emotion. Every prototype is a story
            loop: conjure, compose, calibrate, and release. The Atelier works
            across disciplines to find resonance between algorithms and the people
            who touch them.
          </p>
        </div>
        <ul className="orbit-list" aria-label="Practice Pillars">
          {orbit.map((entry) => (
            <li key={entry.label}>
              <span>{entry.label}</span>
              <span>{entry.detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
