const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349161723547";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_56_03_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDczLFxuICAgICAgICA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNixcbiAgICAgICAgODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICAyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI4LFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOU25VS2Q3SEIrNHZSa3RrdW5oTUFSbk4zaW13VGZBRGw5RkowUkp1V3VRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjE3MjM1NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVDREY2QjU4QjA4MUU0Qjg3OUNFRTc2MTJGNzY3QUMwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTUzNTc3NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjE3MjM1NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcwM0UxRkU4OTczMTFGQUU2RjAzMzQzQTFDMDBFNDA5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTUzNTc3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2LThWdGU4TFE5bW4xblBJbWhtNm1BXCIsXG4gIFwicGhvbmVJZFwiOiBcImNlYzc3OTg5LTM1YTctNDBjNS1iZTIxLWE1MjBkNzA3NDFkOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAxMDYsXG4gICAgICA4NCxcbiAgICAgIDMyLFxuICAgICAgMjAsXG4gICAgICAyMTcsXG4gICAgICAxMixcbiAgICAgIDEsXG4gICAgICAxNDMsXG4gICAgICAxNjIsXG4gICAgICAyNDAsXG4gICAgICA3NyxcbiAgICAgIDE4OSxcbiAgICAgIDEzNCxcbiAgICAgIDE0NCxcbiAgICAgIDE0NSxcbiAgICAgIDE3NCxcbiAgICAgIDEzLFxuICAgICAgMzQsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICA2NixcbiAgICAgIDMwLFxuICAgICAgNDIsXG4gICAgICAxNzMsXG4gICAgICAyNDcsXG4gICAgICAxODksXG4gICAgICA5NCxcbiAgICAgIDI2LFxuICAgICAgMjE1LFxuICAgICAgMjQ1LFxuICAgICAgMjMxLFxuICAgICAgNjIsXG4gICAgICAyMjAsXG4gICAgICAyNTAsXG4gICAgICAxMzQsXG4gICAgICAyMzMsXG4gICAgICAxMTEsXG4gICAgICAyNDgsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTg4RkUySzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjE3MjM1NDc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU2OTY4Mzc5OTIwNDY1OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiS0lORyBCUk9XTlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xPZDRnNFFtUFMydmdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib044ZDlsYXY4MEtueXlQUngyTkV2WVhNTWRTV3pObVFFUmdXSllGSWNuQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzQ1IwNERsNHQ0UW9PTVVCeU9hTlgwbEVaVnRNM1ZKOTQ2TFZtTGFwRkE5QjhSR0ZCZnhVNnErRmZZTmQwek92SEhOWWRBb1BPQzdDdzlVc3d5SGlDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJONHNaSzEvZnFEVHAwNW1xOVRKSnlRR3ZzbDJQcGQ2NnUvNzlGUFhRQi9UOFVsWnNMMEJDUXhEWkc4UkxSYkErQmhVSDZucXR5QkkvZnVKVGhVTjZCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYxNzIzNTQ3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDE1MzU3NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHK2dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUcrZy5qc29uIjogIntcImtleURhdGFcIjpcIjFhRTkraDRpT0tKWHNyZW5CYUc1R1VnTWk2U0dXYXVhcXk4aFNIc2MzWXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA5Njk1MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0MTUzNTc3MzgxNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "King brown",


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
