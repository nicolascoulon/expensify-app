import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

// enzyme for react v16 => mega relou
Enzyme.configure({
    adapter: new Adapter()
});
// switch env 
DotEnv.config({ path: '.env.test'});