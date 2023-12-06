import { createProject, findAllProjects } from "@/backend/projects_resolve";
import { IProject } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
    if (
        process.env.NEXT_PUBLIC_API_AUTHORIZATION !==
        req.headers.get("authorization")
    ) {
        return NextResponse.json({ message: "No authorized" }, { status: 401 });
    }
    const projects = await findAllProjects();

    if (projects) {
        return NextResponse.json(projects, { status: 200 });
    } else {
        return NextResponse.json(
            { message: "Error while searching" },
            {
                status: 500,
            }
        );
    }
};

const POST = async (req: NextRequest) => {
    const data = (await req.json()) as IProject;
    if (!data.projectLink) {
        return NextResponse.json("No authorized", {
            status: 422,
        });
    }

    const createdProject = await createProject(data);

    if (createdProject) {
        return NextResponse.json(createdProject, {
            status: 200,
        });
    } else {
        return NextResponse.json(
            { message: "Error while creating" },
            {
                status: 500,
            }
        );
    }
};

export { GET, POST };
