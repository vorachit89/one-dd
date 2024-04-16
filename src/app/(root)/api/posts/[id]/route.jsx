import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET( request, { params } )
{

    const postId = Number(params.id)
    const post = await prisma.post.findUnique({
        where: {
            id: postId
        }
    })

    return Response.json(post)
}

export async function PUT( request, { params } )
{
    const { title, content } = await request.json()
    const postId = Number(params.id)

    const updatePost = await prisma.post.update({
        where: { id: postId },
        data: {
            title,
            content
        }
    })
    return Response.json(updatePost)
}


export async function DELETE( request, { params } )
{
    const postId = Number(params.id)
    const deletedPost = await prisma.post.delete({
        where: { id: postId }
    })
    return Response.json(deletedPost)

}



