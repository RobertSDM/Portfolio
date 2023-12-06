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

    return NextResponse.json(projects, { status: 200 });
};

const POST = async (req: NextRequest) => {
    const data = (await req.json()) as IProject;
    if (!data.projectLink) {
        return NextResponse.json("No authorized", {
            status: 422,
        });
    }

    const addedProject = createProject(data);

    return NextResponse.json(addedProject, {
        status: 200,
    });
};

export { GET, POST };
