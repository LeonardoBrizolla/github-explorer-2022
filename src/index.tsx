import { render } from 'react-dom';
import './styles/elements/base.scss';
import './styles/generic/reset.scss';
import { App } from './App';

render(<App />, document.querySelector('#root'));
