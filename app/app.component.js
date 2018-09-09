import controller from './app.controller';
import template from './app.html!text';

export default function appComponent() {
    return {
        template,
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};