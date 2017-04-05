console.log('PLAYGROUND');

(function () {

    function mountShadow(id) {
        console.log('Mounting Component ' + id);
        const shadow = document.querySelector(`#entry-${id}`).attachShadow({mode: 'open'});
        const template = document.getElementById(`template-${id}`);
        const templateClone = document.importNode(template.content, true);

        console.log('VOR APP CHILD ' + id);
        shadow.appendChild(templateClone);
        console.log('NACH APP CHILD' + id);
    }

    mountShadow('one');
    mountShadow('two');

})();

