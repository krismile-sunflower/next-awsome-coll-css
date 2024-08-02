
export const maxDuration = 60; // This function can run for a maximum of 60 seconds (update at 2024-05-09 form 10 seconds)
export const dynamic = "force-dynamic";

const localExecutablePath =
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const remoteExecutablePath =
    "https://github.com/Sparticuz/chromium/releases/download/v126.0.0/chromium-v126.0.0-pack.tar";

export async function GET() {

    const isDev = process.env.NODE_ENV === "development";
    console.log("🚀 ~ constGET:APIRoute= ~ isDev:", isDev)
    const chromium = require("@sparticuz/chromium-min");
    const puppeteer = require("puppeteer-core");
    const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(remoteExecutablePath),
        headless: chromium.headless,
    });
    console.log("🚀 ~ constGET:APIRoute= ~ browser:", browser)

    const page = await browser.newPage();

    await page.goto("https://tianqi.qq.com");

    await page.waitForSelector("#ct-current");

    const temperature = await page.$eval(
        "#txt-temperature",
        (el) => el.textContent
    );
    const status = await page.$eval("#txt-name", (el) => el.textContent);
    const weather = await page.$eval(
        "#ct-aqi > .info-aqi",
        (el) => el.textContent
    );
    const text = await page.$eval("#txt-tips", (el) => el.textContent);
    const wind = await page.$eval("#txt-wind", (el) => el.textContent);
    const humidity = await page.$eval("#txt-humidity", (el) => el.textContent);
    const address = await page.$eval("#txt-cur-location", (el) => el.textContent);
    console.log("🚀 ~ GET ~ address:", address)

    await browser.close();
    return Response.json({
        temperature,
        status,
        weather,
        text,
        wind,
        humidity,
        address,
      }, { status: 200 })
}