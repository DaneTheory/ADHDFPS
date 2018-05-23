if(module.hot) module.hot.accept()
import 'babel-polyfill'
import './styles/index.scss'


import ADHDFPS from './scripts'


(() =>
  ADHDFPS()
    .then(data => data)
    .catch(error => {
      console.log(error)
      return new Error(error)
    })
)()
