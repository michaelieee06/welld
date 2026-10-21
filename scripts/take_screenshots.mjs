import { chromium } from 'playwright-core'
import path from 'path'
import fs from 'fs'

const executablePath = 'C:\\Users\\Admin\\AppData\\Local\\ms-playwright\\chromium-1248\\chrome-win64\\chrome.exe'

const projects = [
  { id: 'yeonlee', url: 'https://yeonlee.web.app' },
  { id: 'lembanna', url: 'https://lembannaarabahari.github.io/lembannaarabahari' },
  { id: 'purunik', url: 'https://purunikk-db.web.app/' },
  { id: 'ubmbelajar', url: 'https://ubmbelajar.web.app' },
  { id: 'gololoni', url: 'http://desagololoni.github.io/gololoni' },
  { id: 'dapurpepaya', url: 'https://dapurpepaya.github.io/dapurpepaya' },
]

async function capture() {
  console.log('Launching browser at:', executablePath)
  const browser = await chromium.launch({
    executablePath,
    headless: true,
  })

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1.5,
  })

  const page = await context.newPage()

  for (const proj of projects) {
    const outPath = path.resolve('public', 'projects', `${proj.id}.jpg`)
    console.log(`\nCapturing [${proj.id}] from ${proj.url}...`)
    try {
      await page.goto(proj.url, { waitUntil: 'domcontentloaded', timeout: 35000 })
      // give animations, hero images, and fonts 4 seconds to settle
      await page.waitForTimeout(4000)
      await page.screenshot({
        path: outPath,
        type: 'jpeg',
        quality: 90,
      })
      console.log(`✓ Saved ${outPath}`)
    } catch (err) {
      console.error(`✗ Error on ${proj.id}:`, err.message)
    }
  }

  await browser.close()
  console.log('\nAll captures completed!')
}

capture()
