// pages/skills.tsx
import { FunctionComponent } from "react";

const SkillsPage: FunctionComponent = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1
        className="text-lg font-bold"
        style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}
      >
        Development Languages
      </h1>
      <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
      </ul>
      <h1
        className="text-lg font-bold"
        style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}
      >
        Libraries / Frameworks
      </h1>
      <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
        <li>React</li>
        <li>Vue.js</li>
        <li>Express</li>
        <li>Next.js</li>
      </ul>
      <h1
        className="text-lg font-bold"
        style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}
      >
        Database
      </h1>
      <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
        <li>MySQL</li>
        <li>PostgreSQL</li>
      </ul>
      <h1
        className="text-lg font-bold"
        style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}
      >
        Version Control Tools
      </h1>
      <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
        <li>Git</li>
      </ul>
      <h1
        className="text-lg font-bold"
        style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}
      >
        AWS
      </h1>
      <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
        <li>EC2</li>
        <li>Lambda</li>
        <li>S3</li>
      </ul>
      <h1
        className="text-lg font-bold"
        style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}
      >
        GCP
      </h1>
      <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
        <li>Firestore</li>
        <li>Authentication</li>
      </ul>
    </div>
  );
};

export default SkillsPage;
