const presence = new Presence({
  clientId: "747190301676011550"
}),
strings = presence.getStrings({
  browsing: "presence.activity.browsing",
  reading: "presence.activity.reading"
});


let browsingStamp = Math.floor(Date.now() / 1000);

var title: any;

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "animehaber",
	details: "Ana Sayfada Haberlere Bakıyor",
    startTimestamp: startTimestamp
  },
  title = document.querySelector(
    "head > title"  
  ),
  
	if (document.location.pathname == "/"){
		presenceData.details = "Ana Sayfada";
		presenceData.state = "Haberlere Bakıyor";
    presenceData.startTimestamp = browsingStamp;
	}else if ((new RegExp('/edit')).test(document.location.pathname)){
		presenceData.details = "Haber, Quiz, VS... ";
    presenceData.state = "Ne Yapacağını Düşünüyor.";
    presenceData.startTimestamp = browsingStamp;
	}else if(document.location.pathname.includes("/top10")){
		presenceData.details = "TOP 10";
		presenceData.state = "EN'lere bakıyor.";
	}else if(document.location.pathname.includes("/kategori/anime")){
		presenceData.details = "Anime";
		presenceData.state = "Kategorisinde Geziniyor.";
	}else if(document.location.pathname.includes("/kategori/manga")){
		presenceData.details = "Manga";
		presenceData.state = "Manga Kategorisinde Geziniyor.";
	}else if(document.location.pathname.includes("/kategori/haber")){
		presenceData.details = "Haber";
		presenceData.state = "Haber Kategorisinde Geziniyor.";
	}else if(document.location.pathname.includes("/kategori/fansub")){
		presenceData.details = "Fansub";
		presenceData.state = "Fansub Kategorisinde Geziniyor.";
	}  
  
  else if (document.location.pathname.includes("/ara")) {
      ara = document.querySelector(
        "#page > div:nth-child(3) > div > div.g1-row-inner > div > div.g1-bin-3.g1-bin-grow-off > div > div.g1-drop.g1-drop-before.g1-drop-the-search.g1-drop-m.g1-drop-icon > div > div > form > label > input"
      );
      presenceData.details = "Şunu Arıyor:";
      presenceData.state = ara.value;
      presenceData.smallImageKey = "ara";
    }
	
  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }
});
