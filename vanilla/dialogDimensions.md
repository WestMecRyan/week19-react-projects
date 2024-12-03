```js
    modal.addEventListener('click', (e)=> {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            // the e.clientX is less than the dialogDimensions.left
            // OR
            // the e.clientX is greater than the dialogDimensions.right
            // OR
            // the e.clientY is less than the dialogDimensions.top
            // OR
            // the e.clientY is greater than the dialogDimensions.botom
        ) {
            modal.close();
        }
    });
```
