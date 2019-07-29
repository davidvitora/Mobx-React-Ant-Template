import dvr from 'mobx-react-form/lib/validators/DVR';
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

const plugins = {
    dvr: dvr(validatorjs),
};

const hooks = {
    onSuccess(form) {
        alert('On Success hook is not defined');
        // get field values
        console.log('Form Values!', form.values());
    },
    onError(form) {
        alert('On Error hook is not defined');
        // get all form errors
        console.log('All form errors', form.errors());
    }
}

export default (first, second) => {
    return new MobxReactForm({ ...first }, { plugins, hooks, ...second });
}