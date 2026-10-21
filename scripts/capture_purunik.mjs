import { chromium } from 'playwright-core'
import path from 'path'

const executablePath = 'C:\\Users\\Admin\\AppData\\Local\\ms-playwright\\chromium-1248\\chrome-win64\\chrome.exe'

async function capturePurunik() {
  const browser = await chromium.launch({ executablePath, headless: true })
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1.5,
  })
  const page = await context.newPage()
  const outPath = path.resolve('public', 'projects', 'purunik.jpg')

  try {
    console.log('Navigating to Purunik...')
    await page.goto('https://purunikk-db.web.app/', { waitUntil: 'load', timeout: 20000 })
    await page.waitForTimeout(3000)
    // Avoid fonts.ready hanging:
    await page.screenshot({ path: outPath, timeout: 10000, type: 'jpeg', quality: 90 })
    console.log('✓ Successfully saved purunik.jpg')
  } catch (err) {
    console.log('Retry without font waiting...')
    try {
      // Force screenshot buffer
      const buffer = await page.screenshot({ timeout: 5000, type: 'jpeg', quality: 85 })
      const fs = await import('fs')
      fs.writeFileSync(outPath, buffer)
      console.log('✓ Successfully saved purunik.jpg via buffer')
    } catch (e) {
      console.error('Failed purunik:', e.message)
    }
  }

  await browser.close()
}

capturePurunik()
