import { renderHook, waitForNextUpdate } from '@testing-library/react-hooks';
import { useFetch } from "../../Hooks/useFetch";

describe('Pruebas en useFetch', () => {

    test('Debe tener la info deseada, loading y error en flase', async () => { 
        const { result, waitForNextUpdate }= renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' ) );
        await waitForNextUpdate();
        const { data, loading, error }= result.current;

        expect( loading ).toBe( false );
        expect( error ).toBe( null );
        expect( data.length ).toEqual( 1 );
    });

    test('Dee de retornar la informacion por defecto', () => {
        const { result }= renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' ) );
        const { data, loading, error }= result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );
    });

    test('Debe saber manejar el error', async () => { 
        const { result, waitForNextUpdate }= renderHook( () => useFetch( 'https://reqres.in/apid/users?page=2' ) );
        await  waitForNextUpdate();
        const { data, loading, error }= result.current;
    
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No se cargo la informacion...' );
        expect( data ).toEqual( null );
    });
})