const axios = require('axios');
const MediumToken = "********************************************************************"; // Give here your medium.com Token
const mediumid = "****************************************************************"; // Give your medium.com id
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const axiosResponse = await axios.get("https://excited-fly-windbreaker.cyclic.app/NetFlixAPI?_page=1&_limit=20");
        const data = axiosResponse.data;
        for(let i = 0; i < 2 ; i++){
            await browser.url("https://bard.google.com/");
            const bardinput = await $("#mat-input-0");
            await bardinput.setValue(`write Full Story of ${data[i].Title} in 1000 words only in english`);
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
            await browser.url("-------Give your blogger link-------");
            const threedot = await $("//div[@aria-label='Main menu']");
            await threedot.click();
            const newpost = $("//*[contains(text(), 'New Post')]");
            await newpost.click();
            const blogtitle = await $("//input[@aria-label='Title']");
            await blogtitle.setValue(`${data[i].Title} , Watch or Download in Full HD`);
            const blogcontent = await $("//pre[@role='presentation']/span");
            await blogcontent.setValue(`<p></p><div class="separator" style="clear: both; text-align: center;"><div class="separator" style="clear: both; text-align: center;"><b><span style="background-color: black; color: white; font-size: x-large;">${data[i].Title} Watch Live or Download in 480p or in 1080p</span></b></div><div class="separator" style="clear: both; text-align: center;"><div class="separator" style="background: linear-gradient(102deg, rgb(0, 0, 0), rgb(255, 0, 4)); border: 1px solid rgb(255, 255, 254); box-shadow: rgb(143, 12, 12) 0px 15px 72px 7px; clear: both; text-align: center;"><div class="separator" style="clear: both; text-align: center;"><div class="separator" style="clear: both; text-align: center;"><a href="https://github.com/jitenderji1137/Free-Netflix" imageanchor="1" style="margin-left: 1em; margin-right: 1em;" target="_blank"><img border="0" data-original-height="810" data-original-width="540" height="320" src="${data[i].Image}" width="213" /></a></div></div></div></div></div><h1 style="text-align: center;"><br /></h1><h1 style="text-align: center;">&nbsp;<span style="font-family: consolas, lucida console, courier new, monospace; font-size: x-large;"><span><b class="gag" >${data[i].Title}</b></span></span></h1><div><span style="font-family: consolas, lucida console, courier new, monospace; font-size: x-large;"><span style="white-space: pre-wrap;"><b><br /></b></span></span>
            <div><span face="&quot;helvetica neue&quot;, Helvetica, Arial, sans-serif" style="background-color: white; font-size: 12px;"><b><br /></b></span></div><div style="text-align: center;"><span><b><span style="font-size: medium;"><u><span style="background-color: black; color: red;">DISCLAMER</span></u><span style="background-color: black;">&nbsp; :&nbsp; </span></span><span style="background-color: black; color: white;">if you want any movie then you can message me on </span><u style="background-color: #fcff01;"><a href="https://www.instagram.com/vijayji1137" target="_blank">INSTAGRAM</a></u></b></span></div><div><span><b><br /></b></span></div>
            
          <center><b><span style="font-family: georgia; font-size: x-large;"><br /></span></b></center><center>
              <b><span class="gag"><a href="https://github.com/jitenderji1137/Free-Netflix" target="_blank">Watch Now only on free Netflix</a></span></b>
          </center>
           
            <center>
                  <div style="border: 1px solid rgb(255, 255, 254); box-shadow: rgb(143, 12, 12) 0px 15px 72px 7px; overflow: hidden; padding-top: 56.108%; position: relative;"><iframe allow="autoplay;fullscreen" allowfullscreen="" frameborder="0" src="https://user-images.githubusercontent.com/113350806/236665488-6544b4a1-80ff-41c1-b549-0164c85685cf.mp4" scrolling="no" style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;"></iframe></div>
          </center><center><br /></center>
          <style>
            p{color:#fff;}
            .button {
                  background-image: linear-gradient(to right, #00ff9a, #b0ff00);
                  color: black;
                  font-family: Arial Bold;
                  font-size: 5vw;
                  text-decoration: none;
                  padding: 3px;
                  border-radius: 8px;
                  border: solid black 1px;
            }
            .gag{
                  background-image: linear-gradient(to right, #00ff9a, #b0ff00);
                  color: black;
                  font-family: Arial Bold;
                  font-size: 5vw;
                  text-decoration: none;
                  padding: 3px;
                  border-radius: 7px;
            }
              @media screen and (min-width:50px) and (max-width:299px) {
                .gag{font-size: 5vw;}
                .button{font-size: 5vw;}
                .youtube{width: 280px;height: 130px;}
            }
            @media screen and (min-width:300px) and (max-width:599px) {
              .gag{font-size: 4vw;}
              .button{font-size: 4vw;}
              .youtube{width: 300px;height: 160px;}
            }
              @media screen and (min-width:600px) and (max-width:899px) {
                .gag{font-size: 3vw;}
                .button{font-size: 3vw;}
                .youtube{width: 546px;height: 307px;}
            }
              @media screen and (min-width:900px) and (max-width:1199px) {
                .gag{font-size: 2vw;}
                .button{font-size: 2vw;}
                .youtube{width: 600px;height: 316px;}
            }
              @media screen and (min-width:1200px){
                .gag{font-size: 2vw;}
                .button{font-size: 2vw;}
                .youtube{width: 808px;height: 425px;}
            }
          </style>
          <div style="text-align: center;"><br /></div><div style="text-align: center;">
          <a class="button" href="https://github.com/jitenderji1137/Free-Netflix" target="_blank">Download Movie Now in HD 1080p</a>
          
            <br /><br /></div><br /><p>${parastory}</p>`);
            await driver.pause(10000);
            await driver.hideKeyboard();
            await driver.pause(10000);
            const setting = await $("//div[@class='iC8G2d']");
            await setting.click();
            await driver.pause(5000);
            const geans = await $("//textarea[@aria-label='Separate labels by commas']");
            await geans.setValue(`Featured,${data[i].Geans}`);
            const update = await $("//div[@aria-label='Publish']//span[@class='CwaK9']");
            await update.click();
            const uploadpub = $("//div[@class='XfpsVe J9fJmf']//span[@class='RveJvd snByac'][normalize-space()='Confirm']");
            await uploadpub.click();
            await driver.pause(15000);
            await driver.pause(7000);
            await browser.url("https://www.blogger.com/blog/posts/9195254730924193311");
            await driver.pause(7000);
            const lable = await $("(//div[@class='McBQdb'])[1]");
            await lable.click();
            const linkElement = await $("//div[@class='JPdR6b e5Emjc zCTr4e qjTEB']//div[@class='JAPqpe K0NPx']/a");
            const linkURL =  await linkElement.getAttribute('href');
            const apiUrl = `https://api.medium.com/v1/users/${mediumid}/posts`;
            const postData = {
              title: data[i].Title,
              contentFormat: 'html',
              content: `<h1>${data[i].Title}</h1><p></p><a href="${linkURL}" imageanchor="1" target="_blank"><img src="${data[i].Image}" width="100%" /></a><h1><b class="gag" >${data[i].Title}</b></h1><div><span><span style="white-space: pre-wrap;"><b><br /></b></span></span>
              <div><span face="&quot;helvetica neue&quot;, Helvetica, Arial, sans-serif" style="background-color: white; font-size: 12px;"><b><br /></b></span></div><div style="text-align: center;"><span><b><span style="font-size: medium;"><u><span style="background-color: black; color: red;">DISCLAMER</span></u><span style="background-color: black;">&nbsp; :&nbsp; </span></span><span style="background-color: black; color: white;">if you want any movie then you can message me on </span><u style="background-color: #fcff01;"><a href="https://www.instagram.com/vijayji1137" target="_blank">INSTAGRAM</a></u></b></span></div><div><span><b><br /></b></span></div>
              
  <center><b><span style="font-family: georgia; font-size: x-large;"><br /></span></b></center><center>
                <b><span class="gag"><a href="${linkURL}" target="_blank">Watch Now only on free Netflix</a></span></b>
  </center>
<center><br /></center>
  <div style="text-align: center;"><br /></div><div style="text-align: center;">
            <a class="button" href="${linkURL}" target="_blank">Download Movie Now in HD 1080p</a>
            <br /><br /></div><br /><p>${parastory}</p>`,
              tags: [`${data[i].Title} Watch Full ${data[i].MainCategory} in HD 1080p`],
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


