const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Bobbizybot:sonicmaster@cluster0.zfoajmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vad1tEBEKyZGLIImDY1x";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vad1tEBEKyZGLIImDY1x" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2349012220445" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349012220445";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349012220445";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/2f64dfafd56ccd8e630ac.jpg" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_07_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg4LFxuICAgICAgICA1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDksXG4gICAgICAgIDc2LFxuICAgICAgICA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDk4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3LFxuICAgICAgICA0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDMwLFxuICAgICAgICA4MixcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlEzNENGQitqL0lmNFViOHdseGs2SC80L3R4bHprbDF3UDMyWnlBTU1rd1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVxQ2RLVFBwU1l5ZUJ0dm5BVGZFMHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDk2ODEwOWEtMTQxNC00MzI0LWFjZTgtZGE0NDdmNWViYmNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgNzAsXG4gICAgICAxNzksXG4gICAgICA2MixcbiAgICAgIDM2LFxuICAgICAgMSxcbiAgICAgIDE0NCxcbiAgICAgIDE4MCxcbiAgICAgIDc3LFxuICAgICAgOTIsXG4gICAgICAyMDAsXG4gICAgICAzMCxcbiAgICAgIDEyMyxcbiAgICAgIDIwOSxcbiAgICAgIDYxLFxuICAgICAgMTEsXG4gICAgICAyMTAsXG4gICAgICA0MSxcbiAgICAgIDk0LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDIyLFxuICAgICAgMTI1LFxuICAgICAgMTQxLFxuICAgICAgNDcsXG4gICAgICAxMzAsXG4gICAgICA4NixcbiAgICAgIDUxLFxuICAgICAgMjAwLFxuICAgICAgOTYsXG4gICAgICAyNTUsXG4gICAgICAzOSxcbiAgICAgIDQ2LFxuICAgICAgMjQyLFxuICAgICAgMTY2LFxuICAgICAgMjAsXG4gICAgICA3NixcbiAgICAgIDY0LFxuICAgICAgMTEsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0cyRFNSSjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTIyMjA0NDU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU3MjE3Nzg5MjIzMTQ1OjIwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJvYmJpenlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYk1sZlVHRUwrNTBMRUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIll3US9rcU4yOGVwTVI1SnRuVk5uZVkxTXh2NFh2cFd2WkpoTU1VQmZVRkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOXo1VEFmbEpZVzZlQmZJbTV1VFNpa2pnY0htN1ZuR0hpVlpNMjhTWHZwV1Zka2ZoS3htMmNaNEhmZGtaeUVET29kLy8zOHdtaDZNSW85YUo0UXBURFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib0o3WWNGYzdUaGNPV0ZYbkxkWU1OeW9JbkZYVkJCZzIwNmRJeWdheHBSS0lDRXdFRm1qRURwdnRvTWpFek5URXJkOTRFMGJLSWE4WG14UExUb2t1QUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMjIyMDQ0NToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0NjkxMjY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmRiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCZGIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5VzhNTHh5Z2V0djM0UHhpWFhPMFJYU1VzeThybHFySFk3dmVGMm1WaktnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTYzMzMzMTgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ2OTExNjM5MjlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©Bobbizy²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "bobbizy",
  packname: process.env.PACK_NAME || "bobbizy",
  botname : process.env.BOT_NAME  || "Bobbizy bot",
  ownername:process.env.OWNER_NAME|| "Bobbizy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Bobbizy"  ).toUpperCase(),



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
