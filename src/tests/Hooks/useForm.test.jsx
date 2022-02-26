import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../Hooks/useForm';

describe('Prubas en el useForm', () => {
    const initialForm= {
        name: 'Art-Dev',
        email: 'elgallofeliz@React.com'
    };

    test('Debe de regresar el formuario por defecto', () => {
        const { result }=renderHook( () => useForm( initialForm ) );
        const [ formValues, handleInputChange, reset ]= result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function');
        expect( typeof reset ).toBe( 'function' );
    });

    test('Debe cambiar el valor del formulario name', () => {
        const { result }=renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, ]= result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'magaly'
                }
            });
        });

        const [ formValues ]=result.current;
        expect( formValues ).toEqual( { ...initialForm, name: 'magaly' })
    });

    test('Debe de reestablecer el valor con reset', () => {
        const { result }=renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, reset ]= result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'magaly'
                }
            });
            reset();
        });

        const [ formValues ]=result.current;
        expect( formValues ).toEqual( initialForm );
    });

});