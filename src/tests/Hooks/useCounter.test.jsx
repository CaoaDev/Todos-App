import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../Hooks/useCounter';

describe('Pruebas en useCounter', () => { 
    test('Deben de retornar los valores por defecto', () => { 
        const { result }= renderHook( () => useCounter());
        expect( result.current.state ).toEqual(10);
        expect( typeof result.current.increment ).toEqual( 'function' );
        expect( typeof result.current.decrement ).toEqual( 'function' );
        expect( typeof result.current.reset ).toEqual( 'function' );

     })


    test('El valor de state debe mostrar el avlor 50', () => { 
        const { result }= renderHook( () => useCounter( 50 ));
        expect( result.current.state ).toEqual( 50 );
    })

    test('Debe incrementar el valor de state en 1, 101', () => {
        const { result }= renderHook( () => useCounter( 100 ) );
        const { increment }= result.current;

        act( () => {
            increment();
        });
        
        const { state }= result.current;
        expect( state ).toBe( 101 );
    })

    test('Debe disminuir el valor de state en 1, 99', () => {
        const { result }= renderHook( () => useCounter( 100 ) );
        const { decrement }= result.current;

        act( () => {
            decrement();
        });
        
        const { state }= result.current;
        expect( state ).toBe( 99 );
    })

    test('Debe de montrar el valor por reset 100', () => {
        const { result }= renderHook( () => useCounter( 100 ) );
        const { reset }= result.current;

        act( () => {
            reset();
        });
        
        const { state }= result.current;
        expect( state ).toBe( 100 );
    })
})