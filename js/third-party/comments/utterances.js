/* global NexT, CONFIG */

document.addEventListener('page:loaded', async () => {
  if (!CONFIG.page.comments) return;

  const { repo, issue_term, label, theme, lang } = CONFIG.utterances;
  const attributes = {
    async       : true,
    crossOrigin : 'anonymous',
    'repo'      : repo,
    'issue-term': issue_term,
    'theme'     : theme
  };
  if (label) attributes.label = label;
  if (lang) attributes.lang = lang;

  await NexT.utils.loadComments('.utterances-container');
  await NexT.utils.getScript('https://utteranc.es/client.js', {
    attributes,
    parentNode: document.querySelector('.utterances-container')
  });
});
