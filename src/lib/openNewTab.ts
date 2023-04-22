const openNewTab = (url: string) => {
  window.open(url, '_blank')?.focus();
};

export default openNewTab;
