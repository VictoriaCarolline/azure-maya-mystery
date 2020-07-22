import Page from './components/Page';
import Item from './components/Item';
import Login from './components/Login';
import Register from './components/Register';
import Buttons from './components/Buttons';
import Puzzle1 from './components/Puzzle1';
import Puzzle2 from './components/Puzzle2';
import Puzzle3 from './components/Puzzle3';
import Puzzle4 from './components/Puzzle4';
import Puzzle5 from './components/Puzzle5';
import Challenge1 from './components/Challenge1';
import Launch2 from './components/Launch2';
import Challenge2 from './components/Challenge2';

export default ({ Vue }) => {
	Vue.component('Page', Page);
	Vue.component('Item', Item);
	Vue.component('Login', Login);
	Vue.component('Register', Register);
	Vue.component('Buttons', Buttons);
	Vue.component('Puzzle1', Puzzle1);
	Vue.component('Puzzle2', Puzzle2);
	Vue.component('Puzzle3', Puzzle3);
	Vue.component('Puzzle4', Puzzle4);
	Vue.component('Puzzle5', Puzzle5);
	Vue.component('Challenge1', Challenge1);
	Vue.component('Launch2', Launch2);
	Vue.component('Challenge2', Challenge2);
};
