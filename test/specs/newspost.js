const axios = require('axios');
const MediumToken = "263a52af06104f51d50b81c4c71db4f89dc0d63ab1056c774b6c841f5dd9f8f00";
const mediumid = "1df79544f5b15b691a37bb0e2d05fc759a97f57e2379d0dee745a69e7ac03b54b";
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const axiosResponse = await axios.get("https://jitenderji1137.github.io/zee5apidata/newsdata.json");
        const data = axiosResponse.data.articles;
        for(let i = 9; i < data.length ; i++){
            await browser.url("https://bard.google.com/");
            const bardinput = await $("#mat-input-0");
            await bardinput.setValue(`write paragraph on ${data[i].title} in 1000 words only in english`);
            const bardsendbtn = await $("//div[@class='send-button-container']");
            await bardsendbtn.click();
            await driver.pause(30000);
            const paragraph = await $$("//div[contains(@class, 'response-container-content')]/div/message-content/div/p");
            let parastory = "";
            for (let pElement of paragraph) {
                const text = await pElement.getText();
                parastory+=text;
                parastory+="<br/><br/>";
            }
            await browser.url("https://www.blogger.com/blog/posts/7094022842899280747");
            const threedot = await $("//div[@aria-label='Main menu']");
            await threedot.click();
            const newpost = $("//*[contains(text(), 'New Post')]");
            await newpost.click();
            const blogtitle = await $("//input[@aria-label='Title']");
            await blogtitle.setValue(`${data[i].title}`);
            const blogcontent = await $("//pre[@role='presentation']/span");
            await blogcontent.setValue(`<p>&nbsp;</p><div class="separator" style="clear: both; text-align: center;"><a href="" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="720" data-original-width="1280" height="360" src="${data[i].media}" width="640" /></a></div><br /><div class="separator" style="clear: both; text-align: center;"><br /></div><br /><p></p><p style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-ring-color: rgba(59,130,246,0.5); --tw-ring-offset-color: #fff; --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-offset-width: 0px; --tw-ring-shadow: 0 0 transparent; --tw-rotate: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-scroll-snap-strictness: proximity; --tw-shadow-colored: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-skew-x: 0; --tw-skew-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; background-color: transparent; border: 0px solid rgb(217, 217, 227); box-sizing: border-box; color: black; font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; margin: 0px 0px 1.25em; white-space: pre-wrap;">${data[i].summary}<br /><br />${parastory}</p><p><br /></p>`);
            await driver.pause(10000);
            await driver.hideKeyboard();
            await driver.pause(10000);
            const setting = await $("//div[@class='iC8G2d']");
            await setting.click();
            await driver.pause(5000);
            const geans = await $("//textarea[@aria-label='Separate labels by commas']");
            await geans.setValue(`Featured,news`);
            const update = await $("//div[@aria-label='Publish']//span[@class='CwaK9']");
            await update.click();
            const uploadpub = $("//div[@class='XfpsVe J9fJmf']//span[@class='RveJvd snByac'][normalize-space()='Confirm']");
            await uploadpub.click();
            await driver.pause(7000);
            await browser.url("https://www.blogger.com/blog/posts/7094022842899280747");
            await driver.pause(7000);
            const lable = await $("(//div[@class='McBQdb'])[1]");
            await lable.click();
            const linkElement = await $("//div[@class='JPdR6b e5Emjc zCTr4e qjTEB']//div[@class='JAPqpe K0NPx']/a");
            const linkURL =  await linkElement.getAttribute('href');
            const apiUrl = `https://api.medium.com/v1/users/${mediumid}/posts`;
            const postData = {
                title: data[i].title,
                contentFormat: 'html',
                content: `<h1>${data[i].title}</h1><p>&nbsp;</p><div class="separator" style="clear: both; text-align: center;"><a href="${linkURL}" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="720" data-original-width="1280" height="360" src="${data[i].media}" width="640" /></a></div><br /><div class="separator" style="clear: both; text-align: center;"><br /></div><a href="${linkURL}">READ MORE >>></a><br /><p></p><p>${data[i].summary}<br /><br />${parastory}<br/><br/></p><p><br /></p>`,
                tags: [`${data[i].title}`],
                publishStatus: 'public',
            };
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${MediumToken}`,
            };
            const response = await axios.post(apiUrl, postData, { headers });
            console.log('Post created successfully:', response.data);
            console.log(`${i} has passed`);
                }
            })
    })


