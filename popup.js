const searchBtn = document.querySelector('#search-button');
const input = document.querySelector('#input');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const ticketNumber = input.value;
    const url = `https://hi.service-now.com/text_search_exact_match.do?sysparm_search=${ticketNumber}`;
    chrome.tabs.create({ url });
  });
}

input.addEventListener('keyup', (ev) => {
  if (ev.keyCode === 13) {
    searchBtn.click();
  }
});
