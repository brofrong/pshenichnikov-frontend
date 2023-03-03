import { type NextPage } from "next";
import { type } from "os";
import { api } from "~/core/api";
import { category, project } from "~/core/types/data";
import Image from "next/image";
import image1 from '../../public/img/pexels-photo-618079.jpeg';
import { useContext, useState } from "react";
import { useRouter } from "next/router";


export async function getStaticProps() {
    // Fetch data from external API
    const categories = await api<category[]>('categories');
    const projects = await api<project[]>('projects?populate=*');

    // Pass data to the page via props
    return { props: { categories: categories.data, projects: projects.data } }
}

const Home: NextPage<{ categories: category[], projects: project[] }> = ({ categories, projects }) => {
    const [filter, setFilter] = useState<null | number>(null);

    const filteredProjects = projects.filter((project) => {
        if (filter === null) {
            return true;
        }
        return project.attributes.category.data.id === filter;
    });

    return (
        <div className="container px-12 m-auto py-8 grid grid-cols-4 gap-4">
            <div className="col-span-1 ">
                <ul>
                    <li className={"cursor-pointer text-xl " + ((filter == null) ? " text-slate-900" : "text-slate-400")} onClick={() => setFilter(null)}>Все проекты</li>
                    {categories.map((category) => <li className={"cursor-pointer text-xl " + ((filter === category.id) ? " text-slate-900" : "text-slate-400")} onClick={() => setFilter(category.id)} key={category.id}>{category.attributes.category}</li>)}
                </ul>
            </div>
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                {filteredProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
            </div>
        </div>
    );
};

const ProjectCard: React.FC<{ project: project }> = ({ project }) => {
    return (
        <div className="h-52 w-full rounded shadow relative overflow-hidden flex flex-col cursor-pointer">
            <div className="h-40 w-full relative">
                <Image
                    fill={true}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    src={image1}
                    alt={project.attributes.Title}
                />
            </div>
            <div className="flex-grow flex items-center px-4">
                <h4>{project.attributes.Title}</h4>
            </div>
        </div>
    )
}

export default Home;
