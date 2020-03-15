import 'raf/polyfill'

import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
    adapter: new Adapter()
})

// NOTE: add more global functions here
global.shallow = shallow
global.render = render
global.mount = mount
