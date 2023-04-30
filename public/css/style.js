new JASS.Component('nav',{
  'BASE': {
    position: 'fixed',
    height: '100%',
    width: 0,
    transition: 'width 0.7s',
    '@event toggle:menu': { width: [0,'100%'] }
  },
  '#content':{
    height: '100%',
    'padding': '50px',
    'background-color': 'white',
    'text-align': 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
    '@event toggle:menu': { opacity: [0,1] },
    '> a': {
      display: 'block',
      'font-size': '1.4em',
      'margin-bottom': '10px'
    }
  },
  '#button': {
    position: 'absolute',
    'font-size': '2em',
    padding: '20px',
    'z-index': 9999,
    transition: 'font-size 0.2s',
    '> :hover': { 'font-size': '2.4em' },
    '@bind onclick': '@event toggle:menu'
  }
});