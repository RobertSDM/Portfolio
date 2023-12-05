import { NextResponse, type NextRequest } from "next/server";

const middleware = async (req: NextRequest) => {
    try {
        const auth = req.headers.get("authorization");
        if (auth !== process.env.NEXT_PUBLIC_API_AUTHORIZATION)
            return NextResponse.json("Invalid authorization", {
                status: 422,
            });
    } catch (error) {
        console.error(typeof error, " | ", error);
    }
};

export { middleware };

export const config = {
    matcher: "/api/projects/(.+)",
};
