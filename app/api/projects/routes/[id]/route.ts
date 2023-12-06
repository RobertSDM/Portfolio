import { deleteProject, updateProject } from "@/backend/projects_resolve";
import { NextRequest, NextResponse } from "next/server";

const DELETE = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const deletedProject = await deleteProject(Number(params.id));

    if (!deletedProject) {
        return NextResponse.json(
            { message: `No projects found with the id: ${params.id}` },
            {
                statusText: "No content",
                status: 200,
            }
        );
    } else {
        return NextResponse.json(deletedProject, {
            status: 200,
        });
    }
};

const PUT = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const body = await req.json();
    const updatedProject = await updateProject(Number(params.id), body);

    if (updatedProject) {
        return NextResponse.json(updatedProject, {
            status: 200,
        });
    } else {
        return NextResponse.json(
            { message: `No projects found with the id: ${params.id}` },
            {
                status: 200,
                statusText: "No content",
            }
        );
    }
};

export { DELETE, PUT };
