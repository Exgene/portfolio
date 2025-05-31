import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'

const redis = Redis.fromEnv()

export async function POST(
    request: NextRequest,
) {
    try {
        const { slug } = await request.json()
        if (!slug) {
            return NextResponse.json(
                { message: 'Slug is required' },
                { status: 400 }
            )
        }

        const result = await redis.incr(`page-views-${slug}`)
        return NextResponse.json({ message: "Successfully incremented", result })
    } catch (error) {
        console.error('Error incrementing view count:', error)
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        )
    }
}
