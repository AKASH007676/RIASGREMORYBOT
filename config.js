//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "917872324809";
global.sudo = process.env.SUDO || "917872324809";
global.owner = process.env.OWNER_NUMBER || "917872324809";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5XMHBxUUFRMHUrUHlOa3FzVWNJMXhzM0FBMG5rKzd2TWhILzFXbC9Icz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialM2dUFsZjEzMDlWUnk1TmZKODhaSUNnTzkwZXZ5RnQxd2FlR2s4RlFCaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTklwQ0hoZTlhSmowellTMzlzQTR2cnRZclBVTlpLVlV6RnJaSUZDTzBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZ3h4M1VVTzV2U2NqcnZJdG1xSXppaVNlWUZKWlQyR1lkTDgxanVhN1hVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNRjZMODZYRXBJNDBET2NPTUtETVpZUHdSREpyQVNqTDQxK1NVZXNWVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhlaTZ5U3hVNkxkZklOd1pWK01IT01JSmsyRzl1ZmxIczhXWkFBWnFwVzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZTSnA4N0RnM2wzWkt1RFhCN2lvdk0rQVhoK3VSMHhoVm40NWUrUXYzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMldHeG9nZUFhL0RVbVYvcFBEd1hWR2pZUG9lelRYTGhMMmlZeGE1VWJVVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh6OUlsbmxJWE9WUkVsWVhDc1N1MEQxdlR2LzVYeTBYaFR5Vnk5TlI1cG94QmxuQnF4LzludWQ0c1dUQm1vdWt1amVPRlpEcWgrUFR4dllVZ3pXUGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6Ik5GNGJKNm0wMDdFRGlpVGFvSmlCQnppc0tyNExPdzA2ak9FUm83cUR3UkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3ODcyMzI0ODA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJCQkU4NDVDQUI2MTY1NjU1M0IxOTRFNTkwN0I1MjlEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU3NTY1NTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZpcnR0M2NjU2plV0VLQ081VVhrcnciLCJwaG9uZUlkIjoiNTFlNDEwZjMtYjQ2OS00MTY0LWE2YmItY2U3NjE1MTJhZTNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFZU3RTcjIwalNhWHl0K2xRaEpQczArNE0vOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0UTU2NWRXM2NPWW9IZkdtQ0FqYllsbHBnVzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUEdDRDdROTYiLCJtZSI6eyJpZCI6IjkxNzg3MjMyNDgwOTo3NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLilIAuLS7ilIDNos2i4oOc4oOc6q+tzZ/qr63wn4yAX/CdmIjhtIvqq51zypzjg4RfX/Cfp7jwn6e/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPMzR2TUFERVArVjFyc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqNEZOSDc2b05LeDkwQXNIcnpOK2lwRFVPUDh0RnEzZ0R5RnNlSFQxYm1BPSIsImFjY291bnRTaWduYXR1cmUiOiJxakpyaXpVYm9qY3BiOUR3c2xMUGo1dm1qTFZhNEc2U0gxcGtTbzRBUVFBeHN5TldFalFpREd3MUNjWnNtWmdWYnNMU1hpMVd4Q0VvRFZ0eGtsZDlDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT3d6YmJ1cVpSTGpMU1BIZnlxSHFMUFhUdDVwYWtoUVRLZVJVVnZESFlSSTNEL2p1L3dGbnorUW1EaDRHNW9yVFl4bW84YmxyeGFvMkEzRmhlMmpTaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTc4NzIzMjQ4MDk6NzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWStCVFIrK3FEU3NmZEFMQjY4emZvcVExRGovTFJhdDRBOGhiSGgwOVc1ZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTc1NjU1NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPSnAifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 *AKASH* 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
