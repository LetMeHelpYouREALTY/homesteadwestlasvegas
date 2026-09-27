import { NextRequest, NextResponse } from 'next/server'
import {
  FollowUpBossApiError,
  FollowUpBossConfigError,
  submitLeadToFollowUpBoss,
} from '@/lib/fub/client'
import { AGENT_NAME, PHONE_DISPLAY } from '@/lib/site-contact'

export const runtime = 'nodejs'

const PUBLIC_ERROR = `Sorry, something went wrong sending your message. Please call or text ${AGENT_NAME} at ${PHONE_DISPLAY}.`

type LeadBody = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  /** Legacy: page section was sent as `source` */
  source?: string
  section?: string
  sourceUrl?: string
  formName?: string
  company?: string
}

function isLeadBody(value: unknown): value is LeadBody {
  return typeof value === 'object' && value !== null
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isValidPhone(value: string): boolean {
  return value.replace(/\D/g, '').length >= 10
}

export async function POST(request: NextRequest) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!isLeadBody(json)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const honeypot = (json.company || '').trim()
  if (honeypot.length > 0) {
    return NextResponse.json({ success: true })
  }

  const firstName = (json.firstName || '').trim()
  const lastName = (json.lastName || '').trim()
  const email = (json.email || '').trim()
  const phone = (json.phone || '').trim()
  const message = (json.message || '').trim()
  const section = (json.section || json.source || 'website').trim()
  const formName = (json.formName || 'Lead form').trim()
  const sourceUrl =
    (json.sourceUrl || '').trim() || request.headers.get('referer')?.trim() || undefined

  if (firstName.length < 2 || lastName.length < 2) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }

  const hasEmail = email.length > 0 && isValidEmail(email)
  const hasPhone = phone.length > 0 && isValidPhone(phone)
  if (!hasEmail && !hasPhone) {
    return NextResponse.json({ error: 'Valid email or phone is required' }, { status: 400 })
  }

  try {
    await submitLeadToFollowUpBoss({
      firstName,
      lastName,
      email: hasEmail ? email : undefined,
      phone: hasPhone ? phone : undefined,
      message,
      section,
      sourceUrl,
      formName,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof FollowUpBossConfigError) {
      console.error('FOLLOW_UP_BOSS_API_KEY is missing; lead was not sent to Follow Up Boss')
      return NextResponse.json({ error: PUBLIC_ERROR }, { status: 503 })
    }
    if (error instanceof FollowUpBossApiError) {
      return NextResponse.json({ error: PUBLIC_ERROR }, { status: 502 })
    }
    console.error('Lead submit failed', error)
    return NextResponse.json({ error: PUBLIC_ERROR }, { status: 502 })
  }
}
