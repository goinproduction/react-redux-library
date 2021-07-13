import app from '../core.js'
import { connect } from '../store.js'

const connector = connect()
function App(props) {
    return app`
    `
}

export default connector(App)