window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
	digits: /^(?:[0-9]+(?:\{,\}[0-9]*)?|\{,\}[0-9]+)/
  },
  svg: {
    fontCache: 'global',
	internalSpeechTitles: false
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();


