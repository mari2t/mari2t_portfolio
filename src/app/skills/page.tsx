import { FunctionComponent } from "react";

const SkillsPage: FunctionComponent = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-2 md:mb-4">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Skills
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">
              Development Languages
            </h3>
            <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">
              Libraries / Frameworks
            </h3>
            <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
              <li>React</li>
              <li>Vue.js</li>
              <li>Express</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Database</h3>
            <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">
              {" "}
              Version Control Tools
            </h3>
            <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
              <li>Git</li>
            </ul>
          </div>
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl"> AWS</h3>
            <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
              <li>EC2</li>
              <li>Lambda</li>
              <li>S3</li>
              <li>RDS</li>
              <li>App Runner</li>
            </ul>
          </div>
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl"> GCP</h3>
            <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
              <li>Firestore</li>
              <li>Authentication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
