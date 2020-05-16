const html = document.querySelector('html');

const getStyle = (element, style) =>
  window
  .getComputedStyle(element)
  .getPropertyValue(style);

const lightMode = {
  lightColor: getStyle(html, '--light-color'),
  darkColor: getStyle(html, '--dark-color')
}

const darkMode = {
  lightColor: '#202020',
  darkColor: '#f5f5f5'
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase();

const changeColors = colors => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}


const btn = document.querySelector('.btn-theme');
btn.onclick = function() {

  canvas.classList.toggle('invert');
  this.classList.toggle('invert');

  if (!this.classList.contains('invert')) {
    this.innerHTML = '<i class="fas fa-moon"></i>';
    changeColors(lightMode);
  } else {
    this.innerHTML = '<i class="fas fa-sun"></i>';
    changeColors(darkMode);
  }
}