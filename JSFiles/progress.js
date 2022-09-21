export default class Progress {
    render() {
        const page = document.createElement('div');
        page.classList.add('main-block');

        const appBlock = document.createElement('div');
        appBlock.classList.add('app-block');
        page.appendChild(appBlock);

        const circleProgress = document.createElement('div');
        circleProgress.classList.add('circle');
        appBlock.appendChild(circleProgress);

        const circleStates = document.createElement('div');
        circleStates.classList.add('states');
        appBlock.appendChild(circleStates);

        const states = {
            Value: {
                type: 'text',
                class: 'value',
                begin: 0,
                label: null,
                div: null,
            },
            Animate: {
                type: 'checkbox',
                class: 'check-animate',
                begin: null,
                label: 'switch',
                div: 'slider',
            },
            Hide: {
                type: 'checkbox',
                class: 'check-hide',
                begin: null,
                label: 'switch',
                div: 'slider',
            }
        }


        Object.entries(states).forEach(([key, value]) => {
            const stateBlock = document.createElement('div');
            stateBlock.classList.add('state');

            const action = document.createElement('input');
            action.classList.add(value.class);
            action.type = value.type;
            action.value = value.begin;

            if (value.label) {
                const label = document.createElement('label');
                label.classList.add(value.label);

                const slider = document.createElement('div');
                slider.classList.add(value.div);

                label.appendChild(action);
                label.appendChild(slider);
                stateBlock.appendChild(label);
            } else {
                stateBlock.appendChild(action)
            }

            const text = document.createElement('div');
            text.classList.add('state__text');
            text.textContent = key;

            stateBlock.appendChild(text)
            circleStates.appendChild(stateBlock);
        })

        return page;
    }

    mount() {
        const value = document.querySelector('.value');
        const checkAnimate = document.querySelector('.check-animate');
        const checkHide = document.querySelector('.check-hide');

        const circle = document.querySelector('.circle');

        value.addEventListener('change', () => {
            if (value.value <= 50) {
                let deg = 360 - (360 * (100 - value.value)/100 + 90);

                circle.style.background = `linear-gradient(${deg}deg, #f2f2f2 50%, transparent 50%), 
                linear-gradient(90deg, #f2f2f2 50%, #005bff 50%)`;
            }

            if ((value.value > 50) && (value.value <= 100)) {
                const deg = value.value/100 * 360 - 90;

                circle.style.background = `linear-gradient(${deg}deg, transparent 50%, #005bff 50%), 
                linear-gradient(90deg, #f2f2f2 50%, #005bff 50%)`;
            }
        })

        checkAnimate.addEventListener('change', () => {
            if (checkAnimate.checked) {
                circle.classList.add('circle-animation');
            } else {
                circle.classList.remove('circle-animation');
            }
        })

        checkHide.addEventListener('change', () => {
            if (checkHide.checked) {
                circle.style.opacity = '0';
            } else {
                circle.style.opacity = '1';
            }
        });
    }
}