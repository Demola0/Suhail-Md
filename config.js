const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://GRIM:Sam@1990@sam.tbegvvo.mongodb.net/?retryWrites=true&w=majority&appName=Sam"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null, 2349073602215";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349057275796";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_27_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDk4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwLFxuICAgICAgICA1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJ5UFhjKytQRTdmeU1UaFBPSDZxQzVPWExRUG5jWHVmbDYrcmsyazgwYUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZFZGJYQVJvUkltdFBRMVpjOEVtd1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjExOTBmYmUtM2Q1My00NjMyLWE3ZmYtZTg4NjVmNjE4ZDc5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMjcsXG4gICAgICAyMTUsXG4gICAgICA3NCxcbiAgICAgIDgwLFxuICAgICAgMTg2LFxuICAgICAgODksXG4gICAgICA2NyxcbiAgICAgIDE3NSxcbiAgICAgIDI0OSxcbiAgICAgIDE1NyxcbiAgICAgIDE5OCxcbiAgICAgIDExOCxcbiAgICAgIDExOCxcbiAgICAgIDE3NCxcbiAgICAgIDcsXG4gICAgICAxODQsXG4gICAgICAxNjEsXG4gICAgICAxNzAsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICA5MSxcbiAgICAgIDE4NyxcbiAgICAgIDEzLFxuICAgICAgMjcsXG4gICAgICA5NSxcbiAgICAgIDIzLFxuICAgICAgMjQsXG4gICAgICA2MSxcbiAgICAgIDIyMCxcbiAgICAgIDg1LFxuICAgICAgMTk5LFxuICAgICAgMjMxLFxuICAgICAgMTg0LFxuICAgICAgMTEzLFxuICAgICAgMjI3LFxuICAgICAgNjcsXG4gICAgICAyMTEsXG4gICAgICAxMzAsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzUDdUV0dGQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1NzI3NTc5NjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ1ODE4MjQyMTYyNzQ0OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ092c3FpVVFsK21mdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidWhXeGZVQVJNOTRnUm82aDJMNktxTzlGbkhOSmdnTGJ4TVBDeGR3SU9DUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBS3EyUE1mbk1WSWhjNVZLMDZCSkZ0T2lkYW5mSk53bVZyc1VIU3ZDTDBFbXE2c1N5SEl1SFRETFNwaURzWDhGY25UUW1NR0VYaC9DQ1BlNmIycTRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNcytJSitNVEhPVXVVRFhoVDVoclpDNWpJYStjTHdCRUJRMkFpRFpFbjJEY2ZsS00yZnBNS0JDd1FrbXRoNW5ZNU16OURwV0VZU3FvT2dQSEh1TEZoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU3Mjc1Nzk2OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE4NjAxMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "✓",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ᴵᴬᴹ",
  packname: process.env.PACK_NAME || "➳𝑰c𝒉ἶ𝙜ᵒԵ𝒉𝐞𝙜ʳᏋ𝑎Ե➳",
  botname : process.env.BOT_NAME  || "Grim-md",
  ownername:process.env.OWNER_NAME|| "ADE❤️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
