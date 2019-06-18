import './styles.scss';

function component() {
	const el = document.createElement('div');
	el.innerHTML = 'Hello Webpack';
	el.classList.add('hello');

	return el;
}

document.body.appendChild(component());

console.log('hello wurld');