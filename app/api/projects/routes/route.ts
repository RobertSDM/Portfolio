import { createProject, findAllProjects } from "@/backend/projects_resolve";
import { IProject } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
    if (!req.headers.get("authorization")) {
        return NextResponse.json(
            { message: "Requisição inválida" },
            { status: 422 }
        );
    }

    if (
        process.env.NEXT_PUBLIC_API_AUTHORIZATION !==
        req.headers.get("authorization")
    ) {
        return NextResponse.json(
            { message: "Autorização não concedida" },
            { status: 401 }
        );
    }
    const projects = findAllProjects();

    return NextResponse.json(projects, { status: 200 });
};

const POST = async (req: NextRequest) => {
    const data = (await req.json()) as IProject;
    if (!data.projectLink) {
        return NextResponse.json("Não", {
            status: 422,
        });
    }

    const addedProject = createProject(data);

    return NextResponse.json(addedProject, {
        status: 200,
    });
};

export { GET, POST };
