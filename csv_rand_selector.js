'use strict';

function f(mood,lang){

    const fs = require('fs');


    let rawdata = fs.readFileSync('Songs.json');
    let records = JSON.parse(rawdata);

    const audioList = []
    // console.log(records)
    for(let i in records){
    // console.log(records[i].MOOD)
    if(mood == records[i].MOOD && lang == records[i].LANGUAGE){
        // console.log(audioList)
        audioList.push(records[i].AUDIO_ID)
    }
    }
    const audiotoken = audioList[Math.floor(Math.random()*audioList.length)];
    //    console.log(audiotoken)
    for(let i in records){
    if (records[i].AUDIO_ID==audiotoken){
        const videotoken = records[i].VIDEO_ID
        // console.log(audiotoken,videotoken)
        const dat = [videotoken,audiotoken]
        return dat
    }
    }
}
module.exports=f