const DEFAULT_SETTINGS = {
  autoExpandSidebar: false,
  googleSearch: true,
  youtubeVideoSummaries: true,
  duckduckgoSearch: true,
  braveSearch: true,
  showSidebarButtonMode: 'supported',
  sidebarWidth: 430
};

if (typeof module !== 'undefined') {
  module.exports = DEFAULT_SETTINGS;
} 