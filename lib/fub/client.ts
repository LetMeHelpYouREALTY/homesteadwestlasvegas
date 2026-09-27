/**
 * Follow Up Boss Events API — server-side only (FOLLOW_UP_BOSS_API_KEY).
 */
export const FUB_SITE_SOURCE = 'homesteadwestlasvegas.com'

export type FubLead = {
  firstName: string
  lastName: string
  email?: string
  phone?: string
  message?: string
  /** Page section identifier (homepage, faq, floor-plan-3704, etc.) */
  section: string
  sourceUrl?: string
  formName?: string
}

export class FollowUpBossConfigError extends Error {
  constructor() {
    super('FOLLOW_UP_BOSS_API_KEY is not configured')
    this.name = 'FollowUpBossConfigError'
  }
}

export class FollowUpBossApiError extends Error {
  readonly status: number

  constructor(status: number) {
    super(`Follow Up Boss API error ${status}`)
    this.name = 'FollowUpBossApiError'
    this.status = status
  }
}

export function buildFubEventBody(lead: FubLead) {
  const section = (lead.section || 'website').trim()
  const formName = (lead.formName || 'Lead form').trim()

  const summaryLines: string[] = []
  if (lead.email?.trim()) summaryLines.push(`Email: ${lead.email.trim()}`)
  if (lead.phone?.trim()) summaryLines.push(`Phone: ${lead.phone.trim()}`)

  const messageParts: string[] = []
  if (lead.message?.trim()) messageParts.push(lead.message.trim())
  if (summaryLines.length > 0) messageParts.push(summaryLines.join('\n'))

  const message = messageParts.join('\n\n').trim() || 'Website inquiry'

  const email = lead.email?.trim()
  const phone = lead.phone?.trim()

  return {
    source: FUB_SITE_SOURCE,
    system: FUB_SITE_SOURCE,
    type: 'General Inquiry' as const,
    message,
    description: `${formName} · ${section}`,
    sourceUrl: lead.sourceUrl?.trim() || undefined,
    person: {
      firstName: lead.firstName,
      lastName: lead.lastName,
      emails: email ? [{ value: email }] : [],
      phones: phone ? [{ value: phone }] : [],
      tags: [FUB_SITE_SOURCE, section],
    },
  }
}

export async function submitLeadToFollowUpBoss(lead: FubLead): Promise<void> {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY
  if (!apiKey) {
    throw new FollowUpBossConfigError()
  }

  const base = (process.env.FOLLOW_UP_BOSS_BASE_URL || 'https://api.followupboss.com/v1').replace(/\/$/, '')
  const auth = Buffer.from(`${apiKey}:`).toString('base64')
  const body = buildFubEventBody(lead)

  let response: Response
  try {
    response = await fetch(`${base}/events`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-System': FUB_SITE_SOURCE,
      },
      body: JSON.stringify(body),
    })
  } catch (error) {
    console.error('Follow Up Boss request failed', error)
    throw new FollowUpBossApiError(0)
  }

  if (!response.ok) {
    console.error(`Follow Up Boss API returned ${response.status}`)
    throw new FollowUpBossApiError(response.status)
  }
}
