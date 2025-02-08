import styled from "styled-components";

export const SwitchStyle = styled.label`
.switch {
    --button-width: 3.4em;
    --button-height: 1.8em;
    --toggle-diameter: 1.1em;
    --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
    --color-grey: #ecebeb;
    --color-green: #4296f4;
    transform: translateY(.2rem);

}

.slider {
    display: inline-block;
    width: var(--button-width);
    height: var(--button-height);
    background-color: var(--color-grey);
    border-radius: 1em;
    position: relative;
    transition: background-color 0.3s;
}

.slider::after {
    content: "";
    display: block;
    width: var(--toggle-diameter);
    height: var(--toggle-diameter);
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: var(--button-toggle-offset);
    left: var(--button-toggle-offset);
    transition: transform 0.3s;
}

.switch input[type="checkbox"] {
    display: none;
}

.switch input[type="checkbox"]:checked + .slider {
    background-color: var(--color-green);
}

.switch input[type="checkbox"]:checked + .slider::after {
    transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
}
`