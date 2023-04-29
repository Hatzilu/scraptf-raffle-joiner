import puppeteer from 'puppeteer';

async function main(){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://scrap.tf/raffles');

  // Set screen size
  await page.setViewport({width: 1920, height: 1080});
// wait for login
  await page.waitForSelector('.avatar-container');

  const elements = await page.$$('.panel-raffle');
//     const elements = $$('').toArray();
//     // console.log({elements});
//     // const elementsArray = [].slice.call(elements);
//     console.log({elements});
//     return elements
//   })
let links = [];
  elements.forEach(async link => {
      const a = await link.getProperty('className')
      console.log(a);

  });
  console.log({elements})
  
//   await browser.close();
};

main();
// export default main;