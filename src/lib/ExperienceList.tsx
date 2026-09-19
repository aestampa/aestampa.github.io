import ZivaroLogo from "../assets/Zivaro.png";
import Trace3Logo from "../assets/Trace3.png";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

function ExperienceList() {
  return (
    <div className="flex w-full max-w-md flex-col">
      <Item>
        <ItemMedia variant="icon">
            <img src={ZivaroLogo} alt="Zivaro logo" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Zivaro — Software Developer Intern</ItemTitle>
          <ItemDescription className="text-white">
            June 2023 - August 2023
          </ItemDescription>
          <div className="text-white">
            <ul className="text-left text-xs list-disc pl-5 space-y-1 marker:text-white">
              <li>Developed responsive UIs using Svelte and Tailwind CSS</li>
              <li>Built and integrated RESTful APIs with C#, Entity Framework, and SQL</li>
              <li>Delivered features and bug fixes in an Agile environment, supporting design and testing</li>
            </ul>
          </div>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia variant="icon">
            <img src={ZivaroLogo} alt="Zivaro logo" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Zivaro — Software Engineer</ItemTitle>
          <ItemDescription className="text-white">
            August 2023 - April 2025
          </ItemDescription>
          <div className="text-white">
            <ul className="text-left text-xs list-disc pl-5 space-y-1 marker:text-white">
              <li>Built front-end applications with Svelte and Tailwind CSS in an Agile team</li>
              <li>Applied Test-Driven Development using Vitest and Playwright</li>
              <li>Used Azure DevOps and VS Code to support development workflows</li>
            </ul>
          </div>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia variant="icon">
            <img src={Trace3Logo} alt="Zivaro logo" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Trace3 <div className="italic text-xs">(Acquisition)</div>— Software Engineer</ItemTitle>
          <ItemDescription className="text-white">
            April 2025 - Present
          </ItemDescription>
          <div className="text-white">
            <ul className="text-left text-xs list-disc pl-5 space-y-1 marker:text-white">
              <li>Developed and maintained Java backend services, integrating frontend systems with Oracle data layers</li>
              <li>Built and supported XML-based APIs by executing database queries and handling data serialization in Java</li>
              <li>Managed SQL/PLSQL queries and Ant build processes for application deployment</li>
            </ul>
          </div>
        </ItemContent>
      </Item>
    </div>
  )
}

export default ExperienceList;