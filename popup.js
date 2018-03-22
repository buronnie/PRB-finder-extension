const searchBtn = document.querySelector('#search-button');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const ticketNumber = document.querySelector('#ticket-number').value;
    const url = `https://hi.service-now.com/text_search_exact_match.do?sysparm_search=${ticketNumber}`;
    chrome.tabs.create({ url });
  });
}
