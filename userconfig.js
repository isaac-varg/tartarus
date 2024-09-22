let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: '',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://youtube.com",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "media",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "watch",
        links: [
          {
            name: "Netflix",
            url: "https://netflix.com/",
            icon: "brand-netflix",
            icon_color: "#ccd5ae",
          },
	  {
            name: "JellyFin",
            url: "http://www.minimonster.local:8096",
            icon: "cookie",
            icon_color: "#e9edc9",
          },
	  {
            name: "YouTube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube",
            icon_color: "#faedcd",
          },
          {
            name: "Peacock",
            url: "https://peacock.com/",
            icon: "feather",
            icon_color: "#fefae0",
          },
          {
            name: "Max",
            url: "https://www.max.com/",
            icon: "sword",
            icon_color: "#faedcd",
          },
          {
            name: "Hulu",
            url: "https://www.Hulu.com/",
            icon: "device-tv-old",
            icon_color: "#d4a373",
          },
          {
            name: "Twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#ccd5ae",
          },
        ],
      }, {
        name: "read",
        links: [
          {
            name: "Hoopla",
            url: "https://www.hoopla.com/home",
            icon: "book",
            icon_color: "#ffb4a2",
          },
          {
            name: "Komga",
            url: "http://minimonster.local:25600",
            icon: "book-2",
            icon_color: "#b5838d",
          },
          {
            name: "GoodReads",
            url: "https://goodreads.com/",
            icon: "bookmark",
            icon_color: "#c9ada7",
          },
        ],
      }, ],
    },
    {
      name: "create",
      background_url: "src/img/banners/cbg-4.gif",
      categories: [
        {
          name: "thinking",
          links: [
            {
              name: "Notion",
              url: "https://www.pinterest.es/",
              icon: "brand-notion",
              icon_color: "#ea6962",
            },
            {
              name: "ChatGTP",
              url: "https://chat.openai.com",
              icon: "chart-opneai",
              icon_color: "#7daea3",
            },
            {
              name: "Figma",
              url: "https://figma.com",
              icon: "brand-figma",
              icon_color: "#89b482",
            },
          ],
        },
        {
          name: "tools",
          links: [
                        {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
          ],
        },
              ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "flutter",
              url: "https://docs.flutter.dev/ui",
              icon: "brand-flutter",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "learn",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "asdf",
          links: [
            {
              name: "Monkey Type",
              url: "https://monkeytype.com",
              icon: "brand-monkey-type",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
       ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
