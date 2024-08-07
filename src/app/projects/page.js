import { getProjects } from "@/actions/getProjects";
import Link from "next/link";

export default async function Projects() {
	const projects = await getProjects();

	return (
		<div>
			<h1>Projects</h1>
			<ul>
				{projects.map((project) => (
					<li key={project.slug}>
						<Link href={`/projects/${project.slug}`}>{project.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
