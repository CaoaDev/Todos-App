import { useEffect, useRef, useState } from "react";


export const useFetch = ( url ) => {
    const isMounted = useRef(true);
    const [first, setFirst] = useState( { data: null, loading: true, error: null } );

    useEffect(() => {    
      return () => {
        isMounted.current = false;
      }
    }, [])
    

    useEffect(() => {

        setFirst ( { data: null, loading: true, error: null } )

        fetch( url )
        .then( resp => resp.json() )
        .then( data => {
            // setTimeout( () => {
                if ( isMounted.current ){
                    setFirst ({
                        loading: false,
                        error: null,
                        data
                    })                
                }
            // }, 1000);
        })
        .catch( () => {
            setFirst({
                data: null,
                loading: false,
                error: 'No se cargo la informacion...'
            })
        })
    }, [ url ])
    return first;
}
