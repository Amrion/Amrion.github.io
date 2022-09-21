import Progress from './progress.js';

class App {
    constructor(root, block) {
        this.root = root;
        this.block = block;
    }

    start() {
        const name = document.createElement('div');
        name.classList.add('name-block');
        name.textContent = 'Progress';
        this.root.appendChild(name);

        this.root.appendChild(this.block);
    }

}

const root = document.getElementById("root");

const block = new Progress();

const app = new App(root, block.render());

app.start();
block.mount();

