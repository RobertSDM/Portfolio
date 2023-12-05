import { deleteProject, updateProject } from "@/backend/projects_resolve";
import { NextRequest, NextResponse } from "next/server";

const DELETE = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const deletedProject = deleteProject(params.id);

    if (!deletedProject) {
        return NextResponse.json(null, {
            statusText: "No content",
            status: 404,
        });
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
    const updated = updateProject(params.id, body);

    if (updated) {
        return NextResponse.json(null, {
            status: 200,
        });
    } else {
        return NextResponse.json(null, {
            status: 200,
            statusText: "No content",
        });
    }
};

export { DELETE, PUT };
