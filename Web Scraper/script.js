const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = 'https://in.indeed.com/jobs?q=ful+stack+developer&l=&vjk=257ec3f89d0da3af';
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        const articles = [];

        $('.mosaic-jobcards', html).each(function(){
            const title = $(this).find('h2').text();
            const salary = $(this).find('.attribute_snippet').text(); 
            const posted = $(this).find('.date').text(); 
            articles.push({
                title,
                salary,
                posted
            })
        })
        console.log(articles);
    }).catch(err => console.log(err))

app.listen(PORT, ()=> console.log(`server running on PORT ${PORT}`));