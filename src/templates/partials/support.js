document.addEventListener('DOMContentLoaded', function () {
  var support = window.CSS && CSS.supports('display', 'grid')

  if (!support) {
    var p = document.createElement('p')
    p.className = 'Demo-warning'
    p.innerHTML = '<strong>Your browser does not appear to support grid layout. You may need <a href="https://igalia.github.io/css-grid-layout/enable.html">to enable it</a>.</strong>'
    document.body.insertBefore(p, document.body.firstChild)
  }
})
