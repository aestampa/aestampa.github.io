import { Badge } from "@/components/ui/badge"

function BadgeCustomColors() {
    const languages = ['Java', 'Python', 'C/C++', 'C#', 'SQL', 'JavaScript', 'TypeScript', 'HTML'];
    const frontEndFrameworks = ['Svelte', 'React', 'Tailwind CSS', 'Cesium'];
    const backEndFrameworks = ['WebLogic', 'WildFly', '.NET / Entity Framework', 'Oracle PL-SQL', 'XML-based APIs', 'Node.js', 'Swagger'];
    const devOpsSkills = ['Docker', 'Azure DevOps', 'Ant (build automation)', 'GitHub', 'GitLab', 'Atlassian Tools'];
    const qaSKills = ['VS Code', 'Visual Studio', 'Eclipse', 'Git'];



    return (
        <div className="flex flex-wrap gap-2">
            {languages.map((language) => (
                <Badge className="bg-blue-950 text-blue-300">
                    {language}
                </Badge>
            ))}
            {frontEndFrameworks.map((f) => (
                <Badge className="bg-green-950 text-green-300">
                    {f}
                </Badge>
            ))}
            {backEndFrameworks.map((b) => (
                <Badge className="bg-sky-950 text-sky-300">
                    {b}
                </Badge>
            ))}
            {devOpsSkills.map((d) => (
                <Badge className="bg-purple-950 text-purple-300">
                    {d}
                </Badge>
            ))}
            {qaSKills.map((q) => (
                <Badge className="bg-red-950 text-red-300">
                    {q}
                </Badge>
            ))}

        </div>
    )
}

export default BadgeCustomColors;