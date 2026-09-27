import assert from 'node:assert/strict'
import { afterEach, beforeEach, describe, mock, test } from 'node:test'
import {
  FUB_SITE_SOURCE,
  buildFubEventBody,
  submitLeadToFollowUpBoss,
  FollowUpBossConfigError,
} from './client'

describe('buildFubEventBody', () => {
  test('uses homesteadwestlasvegas.com source, system, and tags', () => {
    const body = buildFubEventBody({
      firstName: 'Jane',
      lastName: 'Buyer',
      email: 'jane@example.com',
      phone: '7025550100',
      message: 'Tour request',
      section: 'homepage',
      sourceUrl: 'https://www.homesteadwestlasvegas.com/',
      formName: 'Tell Dr. Jan what you are looking for',
    })

    assert.equal(body.source, FUB_SITE_SOURCE)
    assert.equal(body.system, FUB_SITE_SOURCE)
    assert.equal(body.type, 'General Inquiry')
    assert.equal(body.sourceUrl, 'https://www.homesteadwestlasvegas.com/')
    assert.equal(body.description, 'Tell Dr. Jan what you are looking for · homepage')
    assert.deepEqual(body.person.tags, [FUB_SITE_SOURCE, 'homepage'])
    assert.match(body.message, /Tour request/)
    assert.match(body.message, /jane@example.com/)
  })
})

describe('submitLeadToFollowUpBoss', () => {
  const originalFetch = globalThis.fetch
  const originalKey = process.env.FOLLOW_UP_BOSS_API_KEY

  beforeEach(() => {
    process.env.FOLLOW_UP_BOSS_API_KEY = 'test-key-not-real'
  })

  afterEach(() => {
    globalThis.fetch = originalFetch
    if (originalKey === undefined) {
      delete process.env.FOLLOW_UP_BOSS_API_KEY
    } else {
      process.env.FOLLOW_UP_BOSS_API_KEY = originalKey
    }
  })

  test('throws when API key is missing', async () => {
    delete process.env.FOLLOW_UP_BOSS_API_KEY
    await assert.rejects(
      () =>
        submitLeadToFollowUpBoss({
          firstName: 'A',
          lastName: 'B',
          email: 'a@b.com',
          section: 'test',
        }),
      FollowUpBossConfigError
    )
  })

  test('posts to /events with Basic auth and X-System header', async () => {
    const fetchMock = mock.fn(async (url: string | URL, init?: RequestInit) => {
      assert.equal(String(url), 'https://api.followupboss.com/v1/events')
      assert.equal(init?.method, 'POST')
      const headers = init?.headers as Record<string, string>
      assert.match(headers.Authorization, /^Basic /)
      assert.equal(headers['X-System'], FUB_SITE_SOURCE)
      const parsed = JSON.parse(String(init?.body))
      assert.equal(parsed.source, FUB_SITE_SOURCE)
      return new Response(null, { status: 201 })
    })
    globalThis.fetch = fetchMock as typeof fetch

    await submitLeadToFollowUpBoss({
      firstName: 'Jan',
      lastName: 'Test',
      email: 'lead@example.com',
      section: 'contact-page',
      formName: 'Lead form',
    })

    assert.equal(fetchMock.mock.calls.length, 1)
  })
})
